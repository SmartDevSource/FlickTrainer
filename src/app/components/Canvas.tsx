'use client'
import React, { useEffect, useRef, useState } from 'react'
import { mapsData, getMapCircuits } from '@/maps_data'
import { images } from '@/images_data'
import { audios } from '@/audio_data'
import { 
    Target,
    Vector2,
    Statistics,
    CrosshairData,
    GameSettings,
    CircuitTeams,
    SpotStruct,
    CircuitStates,
    MapSpotStruct 
} from '@/types'
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
    drawStartCounter,
    drawCrosshair
} from '@/functions/draw'
import { initRecoil, updateRecoil } from '@/functions/recoil'
import { getCrosshairStorage, getSensitivityStorage, loadResources } from '@/functions/utils'

interface CanvasParams {
    game_settings: GameSettings,
    onCircuitAccomplished: () => void
}

const startTimerValue: number = 0

const Canvas: React.FC<CanvasParams> = ({game_settings, onCircuitAccomplished}) => {
    const testDistance = useRef<number>(1)
    const testCharacter = useRef<number>(3)
    const testSpeedPosition = useRef<number>(1)
    const testSpeedScale = useRef<number>(0.1)
    const testPosition = useRef<Vector2>({x: 0, y: 0})

    const circuits: CircuitTeams = getMapCircuits(game_settings.map_name)
    const circuitStates = useRef<CircuitStates>(getCircuitStates())

    const isFiring = useRef<boolean>(false)
    const isDead = useRef<boolean>(false)
    const isReady = useRef<boolean>(false)
    const startTimer = useRef<number>(startTimerValue)
    let startInterval = useRef<ReturnType<typeof setInterval>>(null)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctx = useRef<CanvasRenderingContext2D | null>(null)

    const isFullScreen = useRef(false)
    const statistics = useRef<Statistics>({kills: 0, deaths: 0})

    const currentSpot = useRef<SpotStruct>(getCurrentSpot())
    const target = useRef<Target | null>(null)

    const screenOffset = useRef<Vector2>(structuredClone(currentSpot.current.initial_offset))
    const crosshairData = useRef<CrosshairData>(getCrosshairStorage())
    const mouseSensitivity = useRef<number>(getSensitivityStorage())

    const mapSpotImages = useRef<MapSpotStruct>({
        background: {path: '', img: new Image()},
        layer: {path: '', img: new Image()}
    })
    const [isLoading, setIsLoading] = useState<Boolean>(true)

    function getCircuitStates(){
        return {
            current_kills: 0,
            kills_goal: 1,
            current_spot_index: 0,
            last_spot_index: Object.keys(circuits[game_settings.circuit as keyof CircuitTeams]).length,
            is_accomplished: false
        }
    }
    function getCurrentSpotName() {
        switch(game_settings.mode){
            case 'circuit':
                return circuits[game_settings.circuit as keyof CircuitTeams][circuitStates.current.current_spot_index].name || ''
            case 'spot':
                return game_settings.spot || ''
            default:
                return ''
        }
    }
    function getCurrentSpot(){
        return structuredClone(mapsData[game_settings.map_name][getCurrentSpotName()])
    }
    const updateBackgroundImages = () => {
        currentSpot.current = getCurrentSpot()
        const backgroundKey = `${game_settings.map_name}_${getCurrentSpotName()}`
        const layerKey = `${game_settings.map_name}_${getCurrentSpotName()}_layer`
        mapSpotImages.current.background = images[backgroundKey]
        mapSpotImages.current.layer = images[layerKey]
    }

    const updateFiringState = (state: boolean) => {
        isFiring.current = state
    }
    const killPlayer = () => {
        isDead.current = true
        statistics.current.deaths++
        audios.player_death.audio.currentTime = 0
        audios.player_death.audio.play()
        circuitStates.current.current_kills = 0
        setTimeout(() => { respawnPlayer() }, 1000)
    }
    const respawnPlayer = () => {
        isDead.current = false
        screenOffset.current = currentSpot.current.initial_offset
        if (isReady.current)
            generateTarget()
    }
    const killTarget = () => {
        if (!isDead.current){
            audios.headshot.audio.currentTime = 0
            audios.headshot.audio.play()

            statistics.current.kills++

            if (shotTimeout){
                clearTimeout(shotTimeout)
            }
            if (game_settings.mode === 'circuit'){
                circuitStates.current.current_kills++
                if (circuitStates.current.current_kills >= circuitStates.current.kills_goal){
                    if (circuitStates.current.current_spot_index < circuitStates.current.last_spot_index - 1){
                        circuitStates.current.current_spot_index++
                        circuitStates.current.current_kills = 0
                        updateBackgroundImages()
                        target.current = null
                        setTimeout(() => {
                            generateTarget()
                        }, 1000)
                    } else {
                        circuitStates.current.is_accomplished = true
                        target.current = null
                        handleExitFullScreen()
                        onCircuitAccomplished()
                    }
                } else {
                    generateTarget()
                }
            } else {
                generateTarget()
            }
        }
    }
    const generateTarget = () => {
        target.current = getRandomTarget(structuredClone(currentSpot.current.targets))
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
        circuitStates.current.current_kills = 0
        circuitStates.current.current_spot_index = 0
        circuitStates.current.is_accomplished = false
        screenOffset.current = structuredClone(currentSpot.current.initial_offset)
        statistics.current.kills = 0
        statistics.current.deaths = 0
        isReady.current = false
        startTimer.current = startTimerValue
        isDead.current = false
        updateBackgroundImages()
    }
    const initGame = () => {
        audios.timer.audio.play()
        crosshairData.current = getCrosshairStorage()
        mouseSensitivity.current = getSensitivityStorage()
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
        if (!circuitStates.current.is_accomplished){
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
    }

    const handleExitFullScreen = () => {
        if (document.fullscreenElement){
            if (document.pointerLockElement){
                document.exitPointerLock()
            }
            document.exitFullscreen().then(() => {
                isFullScreen.current = false
                if (shotTimeout){
                    clearTimeout(shotTimeout)
                }
                if (startInterval.current){
                    clearInterval(startInterval.current)
                }
            }
            )
            .catch(err =>{
                console.log('Error while exiting fullscreen :', err)
            })
        }
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
                    screenOffset.current = {...mapsData[game_settings.map_name][getCurrentSpotName()].initial_offset}
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
                    if (!circuitStates.current.is_accomplished){
                        resetGame()
                    } else {
                        setTimeout(() => resetGame(), 500)
                    }
                }
            }
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (isFullScreen.current && !isDead.current && !circuitStates.current.is_accomplished){
                const prevOffset = screenOffset.current
                const newOffset = {
                    x: prevOffset.x - (event.movementX * (mouseSensitivity.current - (mouseSensitivity.current / 2))),
                    y: prevOffset.y - (event.movementY * (mouseSensitivity.current - (mouseSensitivity.current / 2)))
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
            if (event.button === 0 && isFullScreen.current && !isDead.current && isReady.current){
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
                            killTarget()
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
                    await loadResources(images, audios)
                    updateBackgroundImages()
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
            updateRecoil(screenOffset.current)

            if (target.current)
                updateTarget(target.current, game_settings.difficulty, isFullScreen.current, killPlayer)

            if (isFullScreen.current && mapSpotImages.current.background.path && mapSpotImages.current.layer.path){
                // MAP BACKGROUND //
                ctx.current.drawImage(mapSpotImages.current.background.img, screenOffset.current.x, screenOffset.current.y)

                // TARGET //
                if (target.current)
                    drawTarget(target.current, screenOffset.current, ctx.current, images[target.current.character], false)

                // HELPER //
                drawTargetHelper(ctx.current, images, screenOffset.current, testPosition.current, testDistance.current, testCharacter.current)

                // MAP BACKGROUND LAYER //
                ctx.current.drawImage(mapSpotImages.current.layer.img, screenOffset.current.x, screenOffset.current.y)

                drawWeapon(ctx.current, images.deagle, images.shotflame, isFiring.current, updateFiringState)
                drawCrosshair(ctx.current, crosshairData.current)

                drawStatistics(ctx.current, statistics.current, circuitStates.current, game_settings.mode)
                drawCoordinates(ctx.current, screenOffset.current, testDistance.current, testPosition.current, testSpeedPosition.current, testSpeedScale.current)

                if (!isReady.current)
                    drawStartCounter(ctx.current, startTimer.current)

                if (isDead.current)
                    drawPlayerDeath(ctx.current)
            } else {
                drawPauseScreen(ctx.current, mapSpotImages.current.background)
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