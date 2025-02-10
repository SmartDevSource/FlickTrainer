'use client'
import React, { useEffect, useRef, useState } from 'react'
import { images } from '@/images_data'
import { audios } from '@/audio_data'
import { Vector2, CrosshairData, ImageObject } from '@/types'
import { fullscreenCanvasSize, minimizedCanvasSize, screenBoundaries, drawWeapon, drawPauseScreen, drawCrosshair } from '@/functions/Recoil/draw'
import { updateRecoil } from '@/functions/Recoil/recoil_manager'
import { getCrosshairStorage, getSensitivityStorage, loadResources } from '@/functions/utils'

const sensitivityFactor: number = 1.2

const CanvasRecoil = () => {
    const isFiring = useRef<boolean>(false)
    const weapon = useRef<string>('ak47')

    let startInterval = useRef<ReturnType<typeof setInterval>>(null)
    let timeElapsedInterval = useRef<ReturnType<typeof setInterval>>(null)

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const ctx = useRef<CanvasRenderingContext2D | null>(null)

    const isFullScreen = useRef(false)

    const screenOffset = useRef<Vector2>({x: 0, y: 0})
    const crosshairData = useRef<CrosshairData>(getCrosshairStorage())
    const mouseSensitivity = useRef<number>(getSensitivityStorage())

    const backgroundImage = useRef<ImageObject>({path: '', img: new Image()})

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const mouseAccel = useRef<Vector2>({x: 0, y: 0})
    
    const updateFiringState = (state: boolean) => {
        isFiring.current = state
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
                case '1': alert("1"); break
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
                    audios.deagleshot.audio.currentTime = 0
                    audios.deagleshot.audio.play()
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
                    backgroundImage.current.img = images.recoil_background_2.img
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

    const draw = () => {
        if (ctx.current && canvasRef.current && backgroundImage.current){
            ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

            updateRecoil(screenOffset.current, weapon.current, isFiring.current)

            if (isFullScreen.current){
                // MAP BACKGROUND //
                ctx.current.drawImage(backgroundImage.current.img, screenOffset.current.x, screenOffset.current.y)

                drawWeapon(ctx.current, images.deagle, images.shotflame, isFiring.current, mouseAccel.current)
                drawCrosshair(ctx.current, crosshairData.current)

                // drawScreenOffsets(ctx.current, screenOffset.current)

            } else {
                drawPauseScreen(ctx.current, backgroundImage.current)
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