import { ImageObject, Statistics, Target, Vector2, Timer, CircuitStates, SpotStates } from "@/types"
import { getHeadCoordinates } from "./target"
import { crosshairData } from "../crosshair_changer"

export const minimizedCanvasSize = {w: 320, h: 240}
export const fullscreenCanvasSize = {w: 1240, h: 768}
export const screenBoundaries = {left: 250, top: 250, right: -925, bottom: -545}

const timer: Timer = {last_update: performance.now(), delta_time: 0}
const framesPerSecond: number = 100
const crosshairScaleFactor: number = 2

export const weaponAnim: {
    current_frame: number,
    last_update: number,
    update_delay: number,
    speed_shot_animation: number,
    frames_count: number,
    sway_offset: Vector2
} = {
    current_frame: 0,
    last_update: 0,
    update_delay: .01,
    speed_shot_animation: 7.4,
    frames_count: 20,
    sway_offset: {x: 0, y: 0}
}
const deathAnim: {
    opacity: number,
    update_delay: number
} = {
    opacity: 0,
    update_delay: 5
}

export const drawWeapon = (
    ctx: CanvasRenderingContext2D,
    weaponImg: ImageObject,
    flameImg: ImageObject,
    isFiring: boolean,
    mouseAccel: Vector2,
    updateFiringState: (state: boolean) => void
) => {
    const now = performance.now()
    timer.delta_time = Math.min((now - timer.last_update) / 1000, 0.016)
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

    const normalized_mouseaccel = {
        x: Math.floor(mouseAccel.x) < -60 ? -60 : Math.floor(mouseAccel.x) > 60 ? 60 : Math.floor(mouseAccel.x),
        y: Math.floor(mouseAccel.y) < -60 ? -60 : Math.floor(mouseAccel.y) > 60 ? 60 : Math.floor(mouseAccel.y)
    }
    weaponAnim.sway_offset.x += (normalized_mouseaccel.x - weaponAnim.sway_offset.x) * .02
    weaponAnim.sway_offset.y += (normalized_mouseaccel.y - weaponAnim.sway_offset.y) * .02

    const weapon_position = {
        x: 800 + weaponAnim.sway_offset.x,
        y: 160 + weaponAnim.sway_offset.y >= 140 ? 160 + weaponAnim.sway_offset.y : 140
    }

    ctx.drawImage(
        weaponImg.img,
        weaponAnim.current_frame * frame_width,
        0,
        frame_width,
        weaponImg.img.height,
        weapon_position.x,
        weapon_position.y,
        frame_width - 150,
        weaponImg.img.height - 150
    )
    if (weaponAnim.current_frame > 0 && weaponAnim.current_frame < 3){
        ctx.drawImage(
            flameImg.img,
            0,
            0,
            flameImg.img.width,
            flameImg.img.height,
            680,
            330,
            300,
            300
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

export const drawScreenOffsets = (
    ctx: CanvasRenderingContext2D,
    screenOffset: Vector2,
) => {
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.font = '24px Arial'
    ctx.fillText(`Offset (x, y) : ${screenOffset.x.toFixed(2)} | ${screenOffset.y.toFixed(2)}`,
        20, 
        75
    )
}

export const drawStatistics = (
    ctx: CanvasRenderingContext2D,
    statistics: Statistics,
    circuit_states: CircuitStates,
    spot_states: SpotStates,
    game_mode: string
) => {
    const kd = statistics.kd.toFixed(2)
    const killsDeathBoxLength = (statistics.kills.toString().length * 15) + (statistics.deaths.toString().length * 15)
    const kdBoxLength = kd.toString().length * 13

    ctx.save()

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
    ctx.fillRect(1085, 31, 80 + kdBoxLength, 25)
    ctx.strokeRect(1085, 31, 80 + kdBoxLength, 25)
    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.fillText(`KD : ${kd}`, 1105, 50)

    switch(game_mode){
        case 'circuit':
            ctx.strokeStyle = 'rgb(150, 150, 150)'
            ctx.fillStyle = 'rgba(255, 255, 255, .3)'
            ctx.fillRect(1085, 56, 80 + kdBoxLength, 25)
            ctx.strokeRect(1085, 56, 80 + kdBoxLength, 25)
            ctx.fillStyle = 'rgb(255, 255, 255)'
            ctx.fillText(`${circuit_states.current_kills} / ${circuit_states.kills_goal}`, 1130, 75)    
        break
        case 'spot':
            ctx.strokeStyle = 'rgb(150, 150, 150)'
            ctx.fillStyle = 'rgba(255, 255, 255, .3)'
            ctx.fillRect(1085, 56, 80 + kdBoxLength, 25)
            ctx.strokeRect(1085, 56, 80 + kdBoxLength, 25)
            ctx.fillStyle = 'rgb(255, 255, 255)'
            ctx.fillText(`${spot_states.current_kills} / ${spot_states.kills_goal}`, 1130, 75) 
        break
    }

    ctx.font = 'bold 28px Play-Bold'

    ctx.fillStyle = 'rgb(255, 255, 255)'
    ctx.lineWidth = 2
    ctx.strokeText(`Time : ${statistics.time_elapsed}`, 570, 50)
    ctx.fillText(`Time : ${statistics.time_elapsed}`, 570, 50)

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
    ctx.fillText("Start", 115, 130)
}

export const drawStartCounter = (ctx: CanvasRenderingContext2D, startTimer: number) => {
    ctx.save()
    ctx.font = 'bold 114px Digit'
    ctx.fillStyle = 'white'
    ctx.lineWidth = 5
    ctx.strokeStyle = 'black'
    ctx.strokeText(startTimer.toString(), 565, 430)
    ctx.fillText(startTimer.toString(), 565, 430)
    ctx.restore()
}

export const drawCrosshair = (ctx: CanvasRenderingContext2D, crosshairSettings: crosshairData) => {
    ctx.fillStyle = `rgba(${crosshairSettings.red}, ${crosshairSettings.green}, ${crosshairSettings.blue}, ${crosshairSettings.opacity})`

    // CENTRAL DOT //
    if (crosshairSettings.show_dot === 1){
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
        if (crosshairSettings.show_dot === 1){
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