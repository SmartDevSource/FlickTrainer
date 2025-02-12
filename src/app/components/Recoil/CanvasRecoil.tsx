'use client'
import React, { useEffect, useRef, useState } from 'react'
import { images } from '@/images_data'
import { audios } from '@/audio_data'
import { Vector2, CrosshairData, RecoilBackground, Weapon } from '@/types'
import { fullscreenCanvasSize, minimizedCanvasSize, screenBoundaries, 
    drawWeapon, drawPauseScreen, drawCrosshair, drawTrajectorySpreads,
    drawFixedPattern, screenScaleFactor }
from '@/functions/Recoil/draw'
import { updateRecoil, screenSprayOffset, spraySettings } from '@/functions/Recoil/recoil_manager'
import { getCrosshairStorage, getSensitivityStorage, loadResources } from '@/functions/utils'
import { weapons } from '@/functions/Recoil/weapons'

const sensitivityFactor: number = 1.2

const CanvasRecoil = () => {
    const isFiring = useRef<boolean>(false)
    const weapon = useRef<Weapon>(weapons['ak47'])

    let startInterval = useRef<ReturnType<typeof setInterval>>(null)
    let timeElapsedInterval = useRef<ReturnType<typeof setInterval>>(null)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctx = useRef<CanvasRenderingContext2D | null>(null)

    const isFullScreen = useRef(false)

    const screenOffset = useRef<Vector2>({x: 0, y: 0})
    const aimPunch = useRef<Vector2>({x: 0, y: 0})
    const currentSpread = useRef<Vector2>({x: 0, y: 0})

    const crosshairData = useRef<CrosshairData>(getCrosshairStorage())
    const mouseSensitivity = useRef<number>(getSensitivityStorage())

    const backgroundImage = useRef<RecoilBackground>({index: 1, image: {path:'', img: new Image()}})

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const mouseAccel = useRef<Vector2>({x: 0, y: 0})
    
    const updateFiringState = (state: boolean) => {
        isFiring.current = state
    }
    const setCurrentSpread = (spread: Vector2) => {
        currentSpread.current = spread
    }

    const updateBackground = (direction: string) => {
        switch(direction){
            case '+':
                if (backgroundImage.current.index < 4)
                    backgroundImage.current.index++
            break
            case '-':
                if (backgroundImage.current.index > 1)
                    backgroundImage.current.index--
            break
        }
        backgroundImage.current.image.img = images[`recoil_background_${backgroundImage.current.index}`].img
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
                if (startInterval.current){
                    clearInterval(startInterval.current)
                }
                if (timeElapsedInterval.current){
                    clearInterval(timeElapsedInterval.current)
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
                case 'z': case 'w': updateBackground('-'); break
                case 's': updateBackground('+'); break
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

        window.addEventListener('keydown', handleKeydown)
        window.addEventListener('fullscreenchange', handleFullscreenChange)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        return () => {
            window.removeEventListener('keydown', handleKeydown)
            window.removeEventListener('fullscreenchange', handleFullscreenChange)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [])

    useEffect(() => { 
        if (ctx) {
            (async () => {
                try {
                    await loadResources(images, audios)
                    updateBackground('+')
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
        if (ctx.current && canvasRef.current && backgroundImage.current){
            ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

            updateRecoil(
                aimPunch.current,
                weapon.current,
                isFiring.current,
                updateFiringState,
                setCurrentSpread
            )

            if (isFullScreen.current){
                // MAP BACKGROUND //
                const screenOffsetAimPunch = getScreenOffsetAimPunch()
                ctx.current.drawImage(backgroundImage.current.image.img, screenOffsetAimPunch.x, screenOffsetAimPunch.y)

                const patternSpreadOffset = getPatternSpreadOffset()
                drawTrajectorySpreads(ctx.current, patternSpreadOffset)

                // drawWeapon(ctx.current, images.deagle, images.shotflame, isFiring.current, mouseAccel.current)
                drawCrosshair(ctx.current, crosshairData.current)

                // drawScreenOffsets(ctx.current, screenOffset.current)

                drawFixedPattern(
                    ctx.current,
                    screenOffsetAimPunch,
                    weapon.current,
                    spraySettings
                )
            } else {
                drawPauseScreen(ctx.current, backgroundImage.current.image)
            }
            requestAnimationFrame(draw)
        }
    }

    return (
        <>
            {isLoading &&
                <h1 className='text-white text-2xl mt-6'>
                    Loading resources ...
                </h1>
            }
            <canvas
                ref={canvasRef}
                className='bg-slate-900 m-16 cursor-crosshair'
                onClick={() => !isLoading && toggleFullScreen()}
            />
        </>
    )
}

export default CanvasRecoil