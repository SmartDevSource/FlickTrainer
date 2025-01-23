import { ImageObject, Statistics, Target, Vector2, Timer, CircuitStates, SpotStates } from "@/types"
import { getHeadCoordinates } from "./target"
import { crosshairData } from "./crosshair_changer"

const timer: Timer = {last_update: performance.now(), delta_time: 0}
const framesPerSecond: number = 100
const crosshairScaleFactor: number = 2
const drawCoordinatesYOffset: number = 25

const weaponAnim: {
    current_frame: number,
    last_update: number,
    update_delay: number,
    speed_shot_animation: number,
    frames_count: number,
} = {
    current_frame: 0,
    last_update: 0,
    update_delay: .01,
    speed_shot_animation: 7.4,
    frames_count: 20
}
const deathAnim: {
    opacity: number,
    update_delay: number
} = {
    opacity: 0,
    update_delay: 5
}

export const minimizedCanvasSize = {w: 320, h: 240}
export const fullscreenCanvasSize = {w: 1024, h: 768}
export const screenBoundaries = {left: 0, top: 0, right: -890, bottom: -295}

export const drawWeapon = (ctx: CanvasRenderingContext2D,
                            weaponImg: ImageObject,
                            flameImg: ImageObject,
                            isFiring: boolean,
                            updateFiringState: (state: boolean) => void) =>
{
    const now = performance.now()
    timer.delta_time = (now - timer.last_update) / 1000
    timer.last_update = now

    if (isFiring){
        weaponAnim.last_update += timer.delta_time
        const currentFrameRate = Math.floor(weaponAnim.last_update * framesPerSecond)

        if (currentFrameRate > 0){
            weaponAnim.last_update = 0
            weaponAnim.current_frame += currentFrameRate

            if (weaponAnim.current_frame >= weaponAnim.frames_count - 1){
                updateFiringState(false)
                weaponAnim.current_frame = 0
            }
        }
    }
    const frame_width = weaponImg.img.width / weaponAnim.frames_count
    ctx.drawImage(
        weaponImg.img,
        weaponAnim.current_frame * frame_width,
        0,
        frame_width,
        weaponImg.img.height,
        600,
        150,
        frame_width - 150,
        weaponImg.img.height - 150
    )
    if (weaponAnim.current_frame == 2){
        ctx.drawImage(
            flameImg.img,
            0,
            0,
            flameImg.img.width,
            flameImg.img.height,
            470,
            320,
            flameImg.img.width / 2,
            flameImg.img.height / 2
        )
    }
}

export const drawTarget = (target: Target, screenOffset: Vector2, ctx: CanvasRenderingContext2D, targetImg: ImageObject, enableHitbox: boolean) => {
    ctx.drawImage(
        targetImg.img,
        0,
        0,
        targetImg.img.width,
        targetImg.img.height,
        target.from.x + screenOffset.x,
        target.from.y + screenOffset.y,
        targetImg.img.width / target.distance,
        targetImg.img.height / target.distance
    )
    if (enableHitbox){
        ctx.save()
        const headCoordinates = getHeadCoordinates(
            target,
            screenOffset,
            targetImg
        )
        ctx.fillStyle = 'rgba(255, 0, 0, .5)'
        ctx.fillRect(
            headCoordinates.position.x,
            headCoordinates.position.y,
            headCoordinates.scale.w,
            headCoordinates.scale.h
        )
        ctx.restore()
    }
}

export const drawTargetHelper = (
    ctx: CanvasRenderingContext2D,
    images: { [key:string]: ImageObject},
    screenOffset: Vector2,
    testPosition: Vector2,
    testDistance: number,
    testCharacter: number
) => {
    const currentCharacter = Object.keys(images)[testCharacter]
    ctx.drawImage(
        images[currentCharacter].img,
        0,
        0,
        images[currentCharacter].img.width,
        images[currentCharacter].img.height,
        testPosition.x + screenOffset.x,
        testPosition.y + screenOffset.y,
        images[currentCharacter].img.width / testDistance,
        images[currentCharacter].img.height / testDistance
    )
}

export const drawCoordinates = (
    ctx: CanvasRenderingContext2D,
    screenOffset: Vector2,
    testDistance: number,
    testPosition: Vector2,
    testSpeedPosition: number,
    testSpeedScale: number
) => {
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.fillText(`Offset x : ${screenOffset.x.toFixed(2)} | Offset y : ${screenOffset.y.toFixed(2)}`,
        20, 
        75 + drawCoordinatesYOffset
    )
    ctx.fillText(`Distance x : ${testDistance.toFixed(2)} | Position (x : ${testPosition.x}, y: ${testPosition.y})`,
        20,
        100 + drawCoordinatesYOffset
    )
    ctx.fillText(`[a] Toggle Character Type`,
        20,
        175 + drawCoordinatesYOffset
    )
    ctx.fillText(`[z] Speed Position : ${testSpeedPosition === 1 ? 'slow' : testSpeedPosition === 10 ? 'medium': 'fast'}`,
        20,
        200 + drawCoordinatesYOffset
    )
    ctx.fillText(`[e] Speed Scale : ${testSpeedScale === .01 ? 'slow' : testSpeedScale === .1 ? 'medium' : 'fast'}`,
        20,
        225 + drawCoordinatesYOffset
    )
    ctx.restore()
}

export const drawStatistics = (
    ctx: CanvasRenderingContext2D,
    statistics: Statistics,
    circuit_states: CircuitStates,
    spot_states: SpotStates,
    game_mode: string
) => {
    // ADD DELAY REACTION TIME (MS)
    ctx.save()
    const kd = (statistics.kills / (statistics.deaths === 0 ? 1 : statistics.deaths)).toFixed(2)
    const killsDeathBoxLength = (statistics.kills.toString().length * 15) + (statistics.deaths.toString().length * 15)
    const kdBoxLength = kd.toString().length * 13
    ctx.fillStyle = 'white'
    ctx.font = 'bold 20px Play-Bold'
    ctx.fillStyle = 'rgba(255, 255, 255, .3)'
    ctx.fillRect(10, 31, 210 + killsDeathBoxLength, 25)
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.strokeStyle = 'rgb(150, 150, 150)'
    ctx.strokeRect(10, 31, 210 + killsDeathBoxLength, 25)
    ctx.fillText(`Kills : ${statistics.kills}  -  Deaths : ${statistics.deaths}`, 30, 50)

    ctx.strokeStyle = 'rgb(150, 150, 150)'
    ctx.fillStyle = 'rgba(255, 255, 255, .3)'
    ctx.fillRect(870, 31, 80 + kdBoxLength, 25)
    ctx.strokeRect(870, 31, 80 + kdBoxLength, 25)
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.fillText(`KD : ${kd}`, 890, 50)

    switch(game_mode){
        case 'circuit':
            ctx.strokeStyle = 'rgb(150, 150, 150)'
            ctx.fillStyle = 'rgba(255, 255, 255, .3)'
            ctx.fillRect(870, 56, 80 + kdBoxLength, 25)
            ctx.strokeRect(870, 56, 80 + kdBoxLength, 25)
            ctx.fillStyle = 'rgb(255, 255, 255)'
            ctx.fillText(`${circuit_states.current_kills} / ${circuit_states.kills_goal}`, 915, 75)    
        break
        case 'spot':
            ctx.strokeStyle = 'rgb(150, 150, 150)'
            ctx.fillStyle = 'rgba(255, 255, 255, .3)'
            ctx.fillRect(870, 56, 80 + kdBoxLength, 25)
            ctx.strokeRect(870, 56, 80 + kdBoxLength, 25)
            ctx.fillStyle = 'rgb(255, 255, 255)'
            ctx.fillText(`${spot_states.current_kills} / ${spot_states.kills_goal}`, 915, 75) 
        break
    }

    ctx.font = 'bold 28px Play-Bold'

    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.lineWidth = 2
    ctx.strokeText(`Temps : ${statistics.time_elapsed}`, 450, 50)
    ctx.fillText(`Temps : ${statistics.time_elapsed}`, 450, 50)
    ctx.restore()

}

export const drawPlayerDeath = (ctx: CanvasRenderingContext2D) => {
    if (deathAnim.opacity < 1){
        deathAnim.opacity += timer.delta_time * deathAnim.update_delay
        if (deathAnim.opacity > 1){
            deathAnim.opacity = 1
        }
    }
    ctx.fillStyle = `rgba(0, 0, 0, ${deathAnim.opacity})`
    ctx.fillRect(0, 0, fullscreenCanvasSize.w, fullscreenCanvasSize.h)
}

export const drawPauseScreen = (ctx: CanvasRenderingContext2D, background: ImageObject) => {
    const scale_x = background.img.width * (ctx.canvas.width / background.img.width)
    const scale_y = background.img.height * (ctx.canvas.height / background.img.height)
    const offset_x = (ctx.canvas.width - scale_x) / 2
    const offset_y = (ctx.canvas.height - scale_y) / 2
    ctx.drawImage(background.img, offset_x, offset_y, scale_x, scale_y)
    ctx.fillStyle = 'rgba(0, 0, 0, .5)'
    ctx.fillRect(0, 0, minimizedCanvasSize.w, minimizedCanvasSize.h)
    ctx.fillStyle = 'white'
    ctx.font = 'bold 38px Play-Bold'
    ctx.fillText("Go", 135, 130)
}

export const drawStartCounter = (ctx: CanvasRenderingContext2D, startTimer: number) => {
    ctx.save()
    ctx.font = 'bold 114px Digit'
    ctx.fillStyle = 'white'
    ctx.lineWidth = 5
    ctx.strokeStyle = 'black'
    ctx.strokeText(startTimer.toString(), 450, 430)
    ctx.fillText(startTimer.toString(), 450, 430)
    ctx.restore()
}

export const drawCrosshair = (ctx: CanvasRenderingContext2D, crosshairSettings: crosshairData) => {
    ctx.fillStyle = `rgba(${crosshairSettings.red}, ${crosshairSettings.green}, ${crosshairSettings.blue}, ${crosshairSettings.opacity})`

    // CENTRAL DOT //
    if (crosshairSettings.show_dot){
        ctx.fillRect(
            (fullscreenCanvasSize.w / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
            (fullscreenCanvasSize.h / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
            (crosshairSettings.thickness / crosshairScaleFactor),
            (crosshairSettings.thickness / crosshairScaleFactor)
        )
    }

    // LEFT //
    ctx.fillRect(
        ((fullscreenCanvasSize.w / 2) - ((crosshairSettings.length / crosshairScaleFactor))) - ((crosshairSettings.gap / crosshairScaleFactor) / 2),
        (fullscreenCanvasSize.h / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
        (crosshairSettings.length / crosshairScaleFactor),
        (crosshairSettings.thickness / crosshairScaleFactor)
    )
    // RIGHT //
    ctx.fillRect(
        (fullscreenCanvasSize.w / 2) + ((crosshairSettings.gap / crosshairScaleFactor) / 2),
        (fullscreenCanvasSize.h / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
        (crosshairSettings.length / crosshairScaleFactor),
        (crosshairSettings.thickness / crosshairScaleFactor)
    )
    // UP //
    ctx.fillRect(
        (fullscreenCanvasSize.w / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
        (fullscreenCanvasSize.h / 2) - ((crosshairSettings.length / crosshairScaleFactor)) - ((crosshairSettings.gap / crosshairScaleFactor) / 2),
        (crosshairSettings.thickness / crosshairScaleFactor),
        (crosshairSettings.length / crosshairScaleFactor)
    )
    // DOWN //
    ctx.fillRect(
        (fullscreenCanvasSize.w / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
        (fullscreenCanvasSize.h / 2) + ((crosshairSettings.gap / crosshairScaleFactor) / 2),
        (crosshairSettings.thickness / crosshairScaleFactor),
        (crosshairSettings.length / crosshairScaleFactor)
    )

    // STROKED PART //
    if (crosshairSettings.outline > 0){
        ctx.strokeStyle = `rgba(0, 0, 0, ${crosshairSettings.opacity}`
        ctx.lineWidth = crosshairSettings.outline / crosshairScaleFactor

        // CENTRAL DOT //
        if (crosshairSettings.show_dot){
            ctx.strokeRect(
                (fullscreenCanvasSize.w / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
                (fullscreenCanvasSize.h / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
                (crosshairSettings.thickness / crosshairScaleFactor),
                (crosshairSettings.thickness / crosshairScaleFactor)
            )
        }
        // LEFT //
        ctx.strokeRect(
            ((fullscreenCanvasSize.w / 2) - ((crosshairSettings.length / crosshairScaleFactor))) - ((crosshairSettings.gap / crosshairScaleFactor) / 2),
            (fullscreenCanvasSize.h / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
            (crosshairSettings.length / crosshairScaleFactor),
            (crosshairSettings.thickness / crosshairScaleFactor)
        )
        // RIGHT //
        ctx.strokeRect(
            (fullscreenCanvasSize.w / 2) + ((crosshairSettings.gap / crosshairScaleFactor) / 2),
            (fullscreenCanvasSize.h / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
            (crosshairSettings.length / crosshairScaleFactor),
            (crosshairSettings.thickness / crosshairScaleFactor)
        )
        // UP //
        ctx.strokeRect(
            (fullscreenCanvasSize.w / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
            (fullscreenCanvasSize.h / 2) - ((crosshairSettings.length / crosshairScaleFactor)) - ((crosshairSettings.gap / crosshairScaleFactor) / 2),
            (crosshairSettings.thickness / crosshairScaleFactor),
            (crosshairSettings.length / crosshairScaleFactor)
        )
        // DOWN //
        ctx.strokeRect(
            (fullscreenCanvasSize.w / 2) - ((crosshairSettings.thickness / crosshairScaleFactor) / 2),
            (fullscreenCanvasSize.h / 2) + ((crosshairSettings.gap / crosshairScaleFactor) / 2),
            (crosshairSettings.thickness / crosshairScaleFactor),
            (crosshairSettings.length / crosshairScaleFactor)
        )
    }
}