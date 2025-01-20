'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Target, Vector2, Statistics } from '@/types'
import { mapsData } from '@/maps_data'
import { images } from '@/images_data'
import { audios } from '@/audio_data'
import { 
    getRandomTarget,
    updateTarget,
    getHeadCoordinates,
    screenBoundaries,
    shotTimeout, 
    updateTargetTimer
} from '@/functions/target'
import {
    fullscreenCanvasSize,
    minimizedCanvasSize,
    drawTarget,
    drawWeapon,
    drawStatistics,
    drawPlayerDeath,
    drawPauseScreen,
    drawTargetHelper,
    drawCoordinates,
    drawStartCounter
} from '@/functions/draw'
import { initRecoil, updateRecoil } from '@/functions/recoil'
import { loadResources } from '@/functions/utils'

interface CanvasParams {
    map_name: string,
    spot_name: string,
    difficulty: string,
    mouse_sensitivity: number
}

const Canvas = ({params}: {params: CanvasParams}) => {
    const testDistance = useRef<number>(1)
    const testCharacter = useRef<number>(3)
    const testSpeedPosition = useRef<number>(1)
    const testSpeedScale = useRef<number>(0.1)
    const testPosition = useRef<Vector2>({x: 0, y: 0})

    const isFiring = useRef<boolean>(false)
    const isPlayerDead = useRef<boolean>(false)
    const isReady = useRef<boolean>(false)
    const startTimer = useRef<number>(3)
    let startInterval = useRef<ReturnType<typeof setInterval>>(null)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctx = useRef<CanvasRenderingContext2D | null>(null)

    const [mapSpotImage] = useState({
        background: {
            path: `/gfx/maps/${params.map_name}/${params.spot_name}.png`,
            img: new Image(),
        },
        layer: {
            path: `/gfx/maps/${params.map_name}/${params.spot_name}_layer.png`,
            img: new Image(),
        }
    })

    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const isFullScreen = useRef(false)
    const statistics = useRef<Statistics>({kills: 0, deaths: 0})

    const currentSpot = structuredClone(mapsData[params.map_name][params.spot_name])
    const target = useRef<Target | null>(null)

    const screenOffset = useRef<Vector2>(structuredClone(currentSpot.initial_offset))

    const updateFiringState = (state: boolean) => {
        isFiring.current = state
    }
    const updatePlayerDeath = (state: boolean) => {
        isPlayerDead.current = state
        statistics.current.deaths++
        audios.player_death.audio.currentTime = 0
        audios.player_death.audio.play()
        setTimeout(() => { respawnPlayer() }, 1000)
    }
    const generateTarget = () => {
        target.current = getRandomTarget(structuredClone(currentSpot.targets))
    }
    const respawnPlayer = () => {
        isPlayerDead.current = false
        screenOffset.current = currentSpot.initial_offset
        generateTarget()
    }
    const resetGame = () => {
        if (shotTimeout){
            clearTimeout(shotTimeout)
        }
        if (startInterval.current){
            clearInterval(startInterval.current)
            startInterval.current = null
        }
        if (target.current){
            target.current = null
        }
        statistics.current.kills = 0
        statistics.current.deaths = 0
        isReady.current = false
        startTimer.current = 3
    }
    const initGame = () => {
        audios.timer.audio.play()
        startInterval.current = setInterval(()=>{
            if (startTimer.current > 1){
                startTimer.current--
                audios.timer.audio.play()
            } else {
                isReady.current = true
                generateTarget()
                if (startInterval.current){
                    clearInterval(startInterval.current)
                    startInterval.current = null
                }
            }
        }, 1000)
    }

    const initCanvas = () => {
        if (canvasRef?.current){
            canvasRef.current.width = minimizedCanvasSize.w
            canvasRef.current.height = minimizedCanvasSize.h
            ctx.current = canvasRef.current.getContext('2d')
        }
    }

    const toggleFullScreen = () => {
        if (document.fullscreenElement === canvasRef.current){
            return
        }
        canvasRef.current?.requestFullscreen()
        .then(() => {
            resizeCanvas('fullscreen')
            isFullScreen.current = true
            initGame()
        })
        .catch(err => {
            console.error('Error while toggling in fullscreen mode :', err)
        })
    }

    const handleExitFullScreen = () => {
        if (document.fullscreenElement){
            if (document.pointerLockElement){
                document.exitPointerLock()
            }
            document.exitFullscreen().then(() => {
                if (shotTimeout){
                    clearTimeout(shotTimeout)
                }
                if (startInterval.current){
                    clearInterval(startInterval.current)
                }
            }
        )}
    }

    const resizeCanvas = (type: string) => {
        if (canvasRef.current && ctx.current){
            switch(type){
                case 'fullscreen':
                    canvasRef.current.requestPointerLock()
                    const fullscreen_scale_x = window.innerWidth / fullscreenCanvasSize.w
                    const fullscreen_scale_y = window.innerHeight / fullscreenCanvasSize.h
                    canvasRef.current.width = window.innerWidth
                    canvasRef.current.height = window.innerHeight
                    ctx.current.setTransform(fullscreen_scale_x, 0, 0, fullscreen_scale_y, 0, 0)
                break
                case 'windowed':
                    canvasRef.current.width = minimizedCanvasSize.w
                    canvasRef.current.height = minimizedCanvasSize.h
                    screenOffset.current = {...mapsData[params.map_name][params.spot_name].initial_offset}
                break
            }
        }
    }

    useEffect(()=>{
        if (canvasRef.current){
            initCanvas()
        }
        const handleKeydown = (event:KeyboardEvent) => {
            switch(event.key){
                case 'ArrowLeft': testPosition.current.x -= testSpeedPosition.current; break
                case 'ArrowRight': testPosition.current.x += testSpeedPosition.current; break
                case 'ArrowUp': testPosition.current.y -= testSpeedPosition.current; break
                case 'ArrowDown': testPosition.current.y += testSpeedPosition.current; break
                case '+': testDistance.current -= testSpeedScale.current; break
                case '-': testDistance.current += testSpeedScale.current; break
                case 'Alt': case 'Meta': handleExitFullScreen(); break
                case 'A': case 'a':
                    testCharacter.current = testCharacter.current >= 9 ?
                        3
                        :
                        testCharacter.current + 2
                break
                case 'Z': case 'z':
                    testSpeedPosition.current *= 10
                    if (testSpeedPosition.current > 100){
                        testSpeedPosition.current = 1
                    }
                break
                case 'E': case 'e':
                    testSpeedScale.current *= 10
                    if (testSpeedScale.current > 1){
                        testSpeedScale.current = .01
                    }
                break
            }
        }
        
        const handleFullscreenChange = () => {
            if (document.fullscreenElement !== canvasRef.current){
                if (document.pointerLockElement){
                    document.exitPointerLock()
                }
                if (canvasRef.current){
                    resizeCanvas('windowed')
                    isFullScreen.current = false
                    resetGame()
                }
            }
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (isFullScreen.current && !isPlayerDead.current){
                const prevOffset = screenOffset.current
                const newOffset = {
                    x: prevOffset.x - (event.movementX * (params.mouse_sensitivity - (params.mouse_sensitivity / 2))),
                    y: prevOffset.y - (event.movementY * (params.mouse_sensitivity - (params.mouse_sensitivity / 2)))
                }
                if (newOffset.x < screenBoundaries.left && newOffset.x > screenBoundaries.right){
                    screenOffset.current.x = newOffset.x
                }
                if (newOffset.y < screenBoundaries.top && newOffset.y > screenBoundaries.bottom){
                    screenOffset.current.y = newOffset.y
                }
            }
        }

        const handleMouseDown = (event: MouseEvent) => {
            // FIRING //
            if (event.button === 0 && isFullScreen.current && !isPlayerDead.current && isReady.current){
                if (!isFiring.current){
                    isFiring.current = true
                    audios.deagleshot.audio.currentTime = 0
                    audios.deagleshot.audio.play()
                    initRecoil(screenOffset.current)
                    if (target?.current && screenOffset?.current && images[target?.current?.character]){
                        const headCoordinates = getHeadCoordinates(
                            target.current,
                            screenOffset.current,
                            images[target.current.character]
                        )
                        const mouseCenterPosition = {
                            x: (fullscreenCanvasSize.w / 2),
                            y: (fullscreenCanvasSize.h / 2)
                        }
                        if (mouseCenterPosition.x >= headCoordinates.position.x &&
                            mouseCenterPosition.x <= headCoordinates.position.x + headCoordinates.scale.w &&
                            mouseCenterPosition.y >= headCoordinates.position.y &&
                            mouseCenterPosition.y <= headCoordinates.position.y + headCoordinates.scale.h)
                        {
                            audios.headshot.audio.currentTime = 0
                            audios.headshot.audio.play()
                            statistics.current.kills++
                            generateTarget()
                        }
                    }
                }
            }
        }

        window.addEventListener('keydown', handleKeydown)
        window.addEventListener('fullscreenchange', handleFullscreenChange)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
            window.removeEventListener('fullscreenchange', handleFullscreenChange)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
        }
    }, [])

    useEffect(() => { 
        if (ctx) {
            (async () => {
                try {
                    await loadResources({...images, ...mapSpotImage}, audios)
                    setIsLoading(false)
                } catch (err) {
                    console.error(`Error while loading all resources :`, err)
                }
            })()
        }
    }, [ctx])

    useEffect(() => {
        if (!isLoading) draw()
    }, [isLoading])

    const draw = () => {
        if (ctx.current && canvasRef.current){
            ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

            updateTargetTimer()

            if (target.current)
                updateTarget(target.current, params.difficulty, isFullScreen.current, updatePlayerDeath)

            if (isFullScreen.current){            
                updateRecoil(screenOffset.current)
    
                // MAP BACKGROUND  //
                ctx.current.drawImage(mapSpotImage.background.img, screenOffset.current.x, screenOffset.current.y)
    
                // TARGET //
                if (target.current)
                    drawTarget(target.current, screenOffset.current, ctx.current, images[target.current.character], false)
                
                // HELPER //
                drawTargetHelper(ctx.current, images, screenOffset.current, testPosition.current, testDistance.current, testCharacter.current)
    
                // MAP BACKGROUND LAYER //
                ctx.current.drawImage(mapSpotImage.layer.img, screenOffset.current.x, screenOffset.current.y)
    
                drawWeapon(ctx.current,images.deagle, images.shotflame, isFiring.current, updateFiringState)
                
                // CROSSHAIR //
                ctx.current.drawImage(
                    images.crosshair.img,
                    (fullscreenCanvasSize.w / 2) - (images.crosshair.img.width / 2),
                    (fullscreenCanvasSize.h / 2) - (images.crosshair.img.height / 2)
                )
    
                drawStatistics(statistics.current, ctx.current)
                drawCoordinates(ctx.current, screenOffset.current, testDistance.current, testPosition.current, testSpeedPosition.current, testSpeedScale.current)
    
                if (!isReady.current){
                    drawStartCounter(ctx.current, startTimer.current)
                }

                if (isPlayerDead.current){
                    drawPlayerDeath(ctx.current)
                }
            } else {
                drawPauseScreen(ctx.current, mapSpotImage.background)
            }
            requestAnimationFrame(draw)
        }
    }

    return (
        <canvas
            ref={canvasRef}
            className='bg-black m-16 cursor-crosshair'
            onClick={() => toggleFullScreen()}
        />
    )
}

export default Canvas