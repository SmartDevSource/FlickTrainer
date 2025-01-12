'use client'
import React, { useEffect, useRef, useState } from 'react'
import { ImageObject, Target } from '@/types'
import { mapsData } from '@/maps_data'
import { images } from '@/images_data'
import { getRandomTarget, updateTarget } from '@/utils'

const Canvas = ({params}: {params: {map_name: string, spot_name: string}}) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    const [mapImage] = useState({
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
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)

    const screenOffset = useRef({x: 0, y: 0})
    const isFullScreen = useRef(false)
    const sensitivity = useRef(2.4)

    const mapData = mapsData[params.map_name]
    const target = useRef<Target>(getRandomTarget(mapData.targets))
    console.log("target current :", target.current)

    const initialWindowSize = {w: 1024, h: 768}
    const screenBoundaries = {left: 0, top: 0, right: -890, bottom: -295}

    const initCanvas = () => {
        if (canvasRef?.current){
            canvasRef.current.width = initialWindowSize.w
            canvasRef.current.height = initialWindowSize.h
            setCtx(canvasRef.current.getContext('2d'))
        }
    }

    const loadImages = () => {
        const loadImage = (image_object: ImageObject): Promise<ImageObject> => {
            return new Promise((resolve, reject) => {
                image_object.img.src = `${image_object.path}`
                image_object.img.onload = () => {
                    resolve(image_object)
                }
                image_object.img.onerror = () => reject(`Failed to load image ${image_object.path}`)
            })
        }
        const imagePromises = Object.values({...images, ...mapImage}).map(loadImage)

        Promise.all(imagePromises)
        .then(() => {
            setIsLoading(false)
            console.log('All images loaded')
        })
        .catch(err => {
            console.error('Error while loading all images :', err)
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
            target.current = updateTarget(target.current)
            ctx.drawImage(
                mapImage.background.img, 
                screenOffset.current.x, 
                screenOffset.current.y
            )
            ctx.fillStyle = 'red'
            ctx.fillRect(
                target.current.from.x + screenOffset.current.x,
                target.current.from.y + screenOffset.current.y,
                50,
                50
            )
            ctx.drawImage(
                mapImage.layer.img,
                screenOffset.current.x,
                screenOffset.current.y
            )
            ctx.drawImage(
                images.crosshair.img,
                (initialWindowSize.w / 2) - (images.crosshair.img.width / 2),
                (initialWindowSize.h / 2) - (images.crosshair.img.height / 2)
            )
            ctx.fillStyle = 'white'
            ctx.font = 'bold 20px serif'
            ctx.fillText(`Off x : ${screenOffset.current.x} | Off y : ${screenOffset.current.y}`, 20, 50)
            requestAnimationFrame(draw)
        }
    }

    useEffect(()=>{
        if (canvasRef?.current){
            console.log("Canvas Loaded")
            initCanvas()
        }
        const handleKeydown = (event:KeyboardEvent) => {
            switch(event.key){

            }
        }
        
        const handleFullscreenChange = () => {
            if (document.fullscreenElement !== canvasRef.current){
                console.log("fullscreen mode exited")
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
                    x: prevOffset.x - (event.movementX * sensitivity.current),
                    y: prevOffset.y - (event.movementY * sensitivity.current)
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

    useEffect(()=>{ if (ctx) loadImages()}, [ctx])
    useEffect(()=>{ if (!isLoading) draw()}, [isLoading])

    return (
        <canvas
            ref={canvasRef}
            className='bg-black m-16'
            onClick={() => toggleFullScreen()}
        />
    )
}

export default Canvas