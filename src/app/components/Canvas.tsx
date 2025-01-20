'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Target, Vector2, CanvasParams, Statistics } from '@/types'
import { mapsData } from '@/maps_data'
import { images } from '@/images_data'
import { audios } from '@/audio_data'
import { getRandomTarget, updateTarget, getHeadCoordinates, screenBoundaries, shotTimeout } from '@/functions/target'
import { initialWindowSize, drawTarget, drawWeapon, drawStatistics, drawPlayerDeath, drawPauseScreen, drawTargetHelper } from '@/functions/draw'
import { initRecoil, updateRecoil } from '@/functions/recoil'
import { loadResources } from '@/functions/utils'

const Canvas = ({params}: {params: CanvasParams}) => {
    const testDistance = useRef<number>(1)
    const testCharacter = useRef<number>(3)
    const testSpeedPosition = useRef<number>(1)
    const testSpeedScale = useRef<number>(0.1)
    const testPosition = useRef<Vector2>({x: 0, y: 0})

    const isFiring = useRef<boolean>(false)
    const isPlayerDead = useRef<boolean>(false)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

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
    const target = useRef<Target>(getRandomTarget(structuredClone(currentSpot.targets)))

    const screenOffset = useRef<Vector2>(structuredClone(currentSpot.initial_offset))

    const updateFiringState = (state: boolean) => {
        isFiring.current = state
    }
    const updatePlayerDeath = (state: boolean) => {
        isPlayerDead.current = state
        statistics.current.deaths++
        audios.player_death.audio.currentTime = 0
        audios.player_death.audio.play()
        setTimeout(() => { respawnPlayer()}, 1000)
    }
    const generateTarget = () => {
        target.current = getRandomTarget(structuredClone(currentSpot.targets))
    }
    const respawnPlayer = () => {
        isPlayerDead.current = false
        generateTarget()
        screenOffset.current = currentSpot.initial_offset
    }

    const initCanvas = () => {
        if (canvasRef?.current){
            canvasRef.current.width = initialWindowSize.w
            canvasRef.current.height = initialWindowSize.h
            setCtx(canvasRef.current.getContext('2d'))
        }
    }

    const toggleFullScreen = () => {
        if (document.fullscreenElement === canvasRef.current){
            return
        }
        canvasRef.current?.requestFullscreen()
        .then(() => {
            resizeCanvas()
            isFullScreen.current = true
            generateTarget()
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
            }
        )}
    }

    const resizeCanvas = () => {
        if (canvasRef.current && ctx){
            canvasRef.current.requestPointerLock()

            const scale_x = window.innerWidth / initialWindowSize.w
            const scale_y = window.innerHeight / initialWindowSize.h

            canvasRef.current.width = window.innerWidth
            canvasRef.current.height = window.innerHeight

            ctx.setTransform(scale_x, 0, 0, scale_y, 0, 0)
        }
    }

    const draw = () => {
        if (ctx && canvasRef.current){
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
            
            updateRecoil(screenOffset.current)

            // MAP BACKGROUND  //
            ctx.drawImage(mapSpotImage.background.img, screenOffset.current.x, screenOffset.current.y)

            // TARGET //
            updateTarget(target.current, params.difficulty, isFullScreen.current, updatePlayerDeath)
            drawTarget(target.current, screenOffset.current, ctx, images[target.current.character], false)
            drawTargetHelper(ctx, images, screenOffset.current, testPosition.current, testDistance.current, testCharacter.current, testSpeedPosition.current, testSpeedScale.current)

            // MAP BACKGROUND LAYER //
            ctx.drawImage(mapSpotImage.layer.img, screenOffset.current.x, screenOffset.current.y)

            drawWeapon(ctx,images.deagle, images.shotflame, isFiring.current, updateFiringState)
            
            // CROSSHAIR //
            ctx.drawImage(
                images.crosshair.img,
                (initialWindowSize.w / 2) - (images.crosshair.img.width / 2),
                (initialWindowSize.h / 2) - (images.crosshair.img.height / 2)
            )

            drawStatistics(statistics.current, ctx)

            if (isPlayerDead.current){
                drawPlayerDeath(ctx)
            } 

            if (!isFullScreen.current){
                drawPauseScreen(ctx)
            }
            requestAnimationFrame(draw)
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
                    if (testSpeedScale.current > .1){
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
                    canvasRef.current.width = initialWindowSize.w
                    canvasRef.current.height = initialWindowSize.h
                    isFullScreen.current = false
                    if (shotTimeout){
                        clearTimeout(shotTimeout)
                    }
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
            if (event.button === 0 && isFullScreen.current && !isPlayerDead.current){
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
                            x: (initialWindowSize.w / 2),
                            y: (initialWindowSize.h / 2)
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

    return (
        <canvas
            ref={canvasRef}
            className='bg-black m-16'
            onClick={() => toggleFullScreen()}
        />
    )
}

export default Canvas