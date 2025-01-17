'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ImageObject, Target, Vector2, CanvasParams, Statistics, AudioObject } from '@/types'
import { mapsData } from '@/maps_data'
import { images } from '@/images_data'
import { audios } from '@/audio_data'
import { getRandomTarget, updateTarget, getHeadCoordinates, screenBoundaries } from '@/functions/target'
import { drawTarget, drawWeapon, drawStatistics } from '@/functions/draw'
import { initRecoil, updateRecoil } from '@/functions/recoil'

const Canvas = ({params}: {params: CanvasParams}) => {
    const testDistance = useRef(1)
    const testPosition = useRef<Vector2>({x: 0, y: 0})
    const isFiring = useRef<boolean>(false)

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

    const initialWindowSize = {w: 1024, h: 768}
    const screenOffset = useRef<Vector2>(structuredClone(currentSpot.initial_offset))

    const updateFiringState = (state: boolean) => isFiring.current = state
    const generateTarget = () => {
        target.current = getRandomTarget(structuredClone(currentSpot.targets))
    }

    const initCanvas = () => {
        if (canvasRef?.current){
            canvasRef.current.width = initialWindowSize.w
            canvasRef.current.height = initialWindowSize.h
            setCtx(canvasRef.current.getContext('2d'))
        }
    }

    const loadResources = () => {
        const loadImage = (image_object: ImageObject): Promise<ImageObject> => {
            return new Promise((resolve, reject) => {
                image_object.img.src = `${image_object.path}`
                image_object.img.onload = () => {
                    resolve(image_object)
                }
                image_object.img.onerror = () => reject(`Failed to load image ${image_object.path}`)
            })
        }
        const loadAudio = (audio_object: AudioObject): Promise<AudioObject> => {
            return new Promise((resolve, reject) => {
                audio_object.audio.src = audio_object.path
                audio_object.audio.volume = audio_object.volume
                audio_object.audio.addEventListener('canplaythrough', () => {
                    resolve(audio_object)
                })
                audio_object.audio.addEventListener('error', () => {
                    reject(`Failed to load audio ${audio_object.path}`)
                })
            })
        }

        const imagePromises = Object.values({...images, ...mapSpotImage}).map(loadImage)
        const audioPromises = Object.values(audios).map(loadAudio)

        Promise.all([imagePromises, audioPromises])
        .then(() => {
            console.log('All resources loaded')
            setIsLoading(false)
        })
        .catch(err => {
            console.error('Error while loading resources :', err)
        })
    }

    const toggleFullScreen = () => {
        if (document.fullscreenElement === canvasRef.current){
            return
        }
        canvasRef.current?.requestFullscreen()
        .then(() => {
            resizeCanvas()
            isFullScreen.current = true
        })
        .catch(err => {
            console.error('Error while toggling in fullscreen mode :', err)
        })
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
            updateTarget(target.current, params.difficulty)

            ctx.drawImage(
                mapSpotImage.background.img, 
                screenOffset.current.x, 
                screenOffset.current.y
            )
            drawTarget(
                target.current,
                screenOffset.current,
                ctx,
                images[target.current.character]
            )
            ctx.drawImage(
                images.terrorist_standup.img,
                0,
                0,
                images.terrorist_crouch.img.width,
                images.terrorist_crouch.img.height,
                testPosition.current.x + screenOffset.current.x,
                testPosition.current.y + screenOffset.current.y,
                images.terrorist_crouch.img.width / testDistance.current,
                images.terrorist_crouch.img.height / testDistance.current
            )
            ctx.drawImage(
                mapSpotImage.layer.img,
                screenOffset.current.x,
                screenOffset.current.y
            )
            drawWeapon(
                ctx,
                images.deagle,
                images.shotflame,
                isFiring.current,
                updateFiringState
            )
            ctx.drawImage(
                images.crosshair.img,
                (initialWindowSize.w / 2) - (images.crosshair.img.width / 2),
                (initialWindowSize.h / 2) - (images.crosshair.img.height / 2)
            )
            drawStatistics(statistics.current, ctx)
            ctx.fillText(`Off x : ${screenOffset.current.x} | Off y : ${screenOffset.current.y}`, 20, 80)
            ctx.fillText(`Distance x : ${testDistance.current} | Position (x : ${testPosition.current.x}, y: ${testPosition.current.y})`,
                20,
                100
            )
            requestAnimationFrame(draw)
        }
    }

    useEffect(()=>{
        if (canvasRef.current){
            initCanvas()
        }
        const handleKeydown = (event:KeyboardEvent) => {
            switch(event.key){
                case 'ArrowLeft': testPosition.current.x -= 5; break
                case 'ArrowRight': testPosition.current.x += 5; break
                case 'ArrowUp': testPosition.current.y -= 5; break
                case 'ArrowDown': testPosition.current.y += 5; break
                case '+': testDistance.current -= .1; break
                case '-': testDistance.current += .1; break
                case 'Alt': case 'Meta':
                    if (document.fullscreenElement){
                        document.exitFullscreen().then(() => console.log("exited"))
                    }
                break
            }
        }
        
        const handleFullscreenChange = () => {
            if (document.fullscreenElement !== canvasRef.current){
                if (canvasRef.current){
                    canvasRef.current.width = initialWindowSize.w
                    canvasRef.current.height = initialWindowSize.h
                    isFullScreen.current = false
                }
            }
        }

        const handleMouseMove = (event: MouseEvent) => {
            if (isFullScreen.current){
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
            if (event.button === 0 && isFullScreen.current){
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
            loadResources()
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