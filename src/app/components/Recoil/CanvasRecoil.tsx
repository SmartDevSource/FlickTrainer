'use client'
import React, { useEffect, useRef, useState } from 'react'
import { images } from '@/images_data'
import { audios } from '@/audio_data'
import { Vector2, CrosshairData, RecoilBackground } from '@/types'
import { fullscreenCanvasSize, minimizedCanvasSize, screenBoundaries, screenScaleFactor,
        drawWeapon, drawPauseScreen, drawCrosshair, drawTrajectorySpreads,
        drawFixedPattern, drawSpeedSelector }
from '@/functions/Recoil/draw'
import { updateRecoil, screenSprayOffset, spraySettings, fireTimer } from '@/functions/Recoil/recoil_manager'
import { getCrosshairStorage, getSensitivityStorage, loadResources } from '@/functions/utils'

const sensitivityFactor: number = 1.2
const weaponNames: string[] = ['ak47', 'mac10', 'mp9', 'mp7', 'galil','m4a1s','m4a4','famas']

const CanvasRecoil = () => {
    const isFiring = useRef<boolean>(false)
    const weaponIndex = useRef<number>(0)
    const normalizedSpeed = useRef<number>(50)
    const speedShoot = useRef<number>(getNormalizedSpeed(normalizedSpeed.current))

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctx = useRef<CanvasRenderingContext2D | null>(null)

    const isFullScreen = useRef(false)

    const screenOffset = useRef<Vector2>({x: -500, y: 0})
    const aimPunch = useRef<Vector2>({x: 0, y: 0})
    const currentSpread = useRef<Vector2>({x: 0, y: 0})

    const crosshairData = useRef<CrosshairData>(getCrosshairStorage())
    const mouseSensitivity = useRef<number>(getSensitivityStorage())

    // const backgroundImage = useRef<RecoilBackground>({index: 1, image: {path:'', img: new Image()}})

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const mouseAccel = useRef<Vector2>({x: 0, y: 0})
    
    const updateFiringState = (state: boolean) => {
        isFiring.current = state
    }
    const setCurrentSpread = (spread: Vector2) => {
        currentSpread.current = spread
    }
    function getNormalizedSpeed (value: number) {
        return -.2 * value + 21
    }
    const setSpeed = (selection: string) => {
        switch(selection){
            case '-':
                if (normalizedSpeed.current >= 20){
                    normalizedSpeed.current -= 10
                }
            break
            case '+':
                if (normalizedSpeed.current < 100){
                    normalizedSpeed.current += 10
                }
            break
        }
        speedShoot.current = getNormalizedSpeed(normalizedSpeed.current)
    }

    const initGame = () => {
        crosshairData.current = getCrosshairStorage()
        mouseSensitivity.current = getSensitivityStorage()
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
                isFullScreen.current = false
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
                    screenOffset.current = {x: 0, y: 0}
                break
            }
        }
    }

    useEffect(()=>{
        if (canvasRef.current){
            initCanvas()
        }
        const handleKeydown = (event:KeyboardEvent) => {
            switch(event.key.toLowerCase()){
                case 'Alt': case 'Meta': case 'F12': handleExitFullScreen(); break
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
                }
            }
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (isFullScreen.current){
                const prevOffset = screenOffset.current
                const newOffset = {
                    x: prevOffset.x - (event.movementX * (mouseSensitivity.current - mouseSensitivity.current / sensitivityFactor)),
                    y: prevOffset.y - (event.movementY * (mouseSensitivity.current - mouseSensitivity.current / sensitivityFactor))
                }
                if (newOffset.x < screenBoundaries.left && newOffset.x > screenBoundaries.right){
                    screenOffset.current.x = newOffset.x
                }
                if (newOffset.y < screenBoundaries.top && newOffset.y > screenBoundaries.bottom){
                    screenOffset.current.y = newOffset.y
                }
                mouseAccel.current = {x: event.movementX, y: event.movementY}
            }
        }

        const handleMouseDown = (event: MouseEvent) => {
            // FIRING //
            if (event.button === 0 && isFullScreen.current){
                if (!isFiring.current){
                    isFiring.current = true
                    // audios.deagleshot.audio.currentTime = 0
                    // audios.deagleshot.audio.play()
                }
            }
        }
        const handleMouseUp = (event: MouseEvent) => {
            // FIRING //
            if (event.button === 0 && isFullScreen.current){
                if (isFiring.current){
                    isFiring.current = false
                }
            }
        }
        const handleMouseScroll = (event: WheelEvent) => {
            if (isFullScreen.current){
                if (event.deltaY < 0){
                    if (weaponIndex.current < weaponNames.length - 1){
                        weaponIndex.current++
                    } else {
                        weaponIndex.current = 0
                    }
                } else {
                    if (weaponIndex.current > 0){
                        weaponIndex.current--
                    } else {
                        weaponIndex.current = weaponNames.length - 1
                    }
                }
            }
        }

        window.addEventListener('keydown', handleKeydown)
        window.addEventListener('fullscreenchange', handleFullscreenChange)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)
        window.addEventListener('wheel', handleMouseScroll)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
            window.removeEventListener('fullscreenchange', handleFullscreenChange)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            window.removeEventListener('wheel', handleMouseScroll)
        }
    }, [])

    useEffect(() => { 
        if (ctx) {
            (async () => {
                try {
                    await loadResources(images, audios)
                    setTimeout(() => {
                        setIsLoading(false)
                        draw()
                    }, 1000)
                } catch (err) {
                    console.error(`Error while loading all resources :`, err)
                }
            })()
        }
    }, [ctx])

    const getScreenOffsetAimPunch = () => {
        return {
            x: screenOffset.current.x + (aimPunch.current.x / (screenSprayOffset.x / screenScaleFactor)),
            y: screenOffset.current.y + (aimPunch.current.y / (screenSprayOffset.y / screenScaleFactor)),
        }
    }

    const getPatternSpreadOffset = () => {
        return {
            x: aimPunch.current.x / (screenSprayOffset.x / screenScaleFactor),
            y: aimPunch.current.y / (screenSprayOffset.y / screenScaleFactor),
        }
    }

    const draw = () => {
        if (ctx.current && canvasRef.current && images.recoil_background.img){
            ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

            if (isFullScreen.current){
                // MAP BACKGROUND //
                const screenOffsetAimPunch = getScreenOffsetAimPunch()
                ctx.current.drawImage(images.recoil_background.img, screenOffsetAimPunch.x, screenOffsetAimPunch.y)

                const patternSpreadOffset = getPatternSpreadOffset()
                drawTrajectorySpreads(
                    ctx.current,
                    weaponNames[weaponIndex.current],
                    patternSpreadOffset,
                    screenOffsetAimPunch,
                    spraySettings,
                    images.spread,
                    speedShoot.current,
                    audios
                )

                drawFixedPattern(
                    ctx.current,
                    weaponNames[weaponIndex.current],
                    screenOffsetAimPunch,
                    spraySettings
                )

                drawWeapon(
                    ctx.current,
                    weaponNames[weaponIndex.current],
                    isFiring.current,
                    mouseAccel.current,
                    spraySettings,
                    fireTimer.elapsed,
                    images
                )

                drawSpeedSelector(
                    ctx.current,
                    screenOffsetAimPunch,
                    normalizedSpeed.current,
                    isFiring.current,
                    setSpeed
                )

                ctx.current.drawImage(images.hud_terro.img, 350, 700, images.hud_terro.img.width / 1.4, images.hud_terro.img.height / 1.4)
                drawCrosshair(ctx.current, crosshairData.current)
            } else {
                drawPauseScreen(ctx.current, images.recoil_background)
            }
            
            updateRecoil(
                aimPunch.current,
                weaponNames[weaponIndex.current],
                isFiring.current,
                speedShoot.current,
                updateFiringState,
                setCurrentSpread,
            )

            requestAnimationFrame(draw)
        }
    }

    return (
        <div className={`relative m-5`}>
            {isLoading && (
                <div className='absolute inset-0 flex items-center justify-center bg-slate-900 bg-opacity-75'>
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className='bg-slate-900 cursor-crosshair'
                onClick={() => !isLoading && toggleFullScreen()}
            />
        </div>
    )
}

export default CanvasRecoil