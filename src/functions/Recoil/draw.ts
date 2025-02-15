import { spraySettings } from './recoil_manager';
import { ImageObject, Vector2, Timer, Weapon, SpraySettings, AudioObject } from "@/types"
import { weapons } from "./weapons"
import { crosshairData } from "../crosshair_changer"
import { playShotSound } from "../utils"

export const minimizedCanvasSize = {w: 320, h: 240}
export const fullscreenCanvasSize = {w: 1240, h: 768}
export const screenBoundaries = {left: 250, top: 250, right: -925, bottom: -545}
export const screenScaleFactor = (fullscreenCanvasSize.w / fullscreenCanvasSize.h)

const timer: Timer = {last_update: performance.now(), delta_time: 0}
const framesPerSecond: number = 100
const crosshairScaleFactor: number = 2

const sprayGapFactor: number = 1.5
const sprayPatternPosition: Vector2 = {x: 1000, y: 550}
const currentTargetSpreadPosition: Vector2 = {x: 0, y: 0}
const impactHelperSize: number = 5
const spreadImageSize: number = 10
const spreads: Vector2[] = []

let bulletsIntoTarget: number = 0
let lastSpreadIndex: number = 0
let fireLatch: boolean = false
let showPattern: boolean = true
let lastPercentage: number = 0

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

export const drawWeapon = (
    ctx: CanvasRenderingContext2D,
    weaponName: string,
    isFiring: boolean,
    mouseAccel: Vector2,
    spraySettings: SpraySettings,
    images: {[key: string]: ImageObject}
) => {
    const now = performance.now()
    timer.delta_time = (now - timer.last_update) / 1000
    timer.last_update = now

    if (isFiring){
        weaponAnim.last_update += timer.delta_time
        const currentFrameRate = Math.floor(weaponAnim.last_update * framesPerSecond)

        if (currentFrameRate > 0){
            weaponAnim.last_update = 0
            weaponAnim.current_frame += currentFrameRate
            if (weaponAnim.current_frame >= spraySettings.current_weapon.frames_count - 1){
                weaponAnim.current_frame = 0
            }
        }
    }

    const frame_width = images[weaponName].img.width / weaponAnim.frames_count

    const normalized_mouseaccel = {
        x: Math.floor(mouseAccel.x) < -60 ? -60 : Math.floor(mouseAccel.x) > 60 ? 60 : Math.floor(mouseAccel.x),
        y: Math.floor(mouseAccel.y) < -60 ? -60 : Math.floor(mouseAccel.y) > 60 ? 60 : Math.floor(mouseAccel.y)
    }
    weaponAnim.sway_offset.x += (normalized_mouseaccel.x - weaponAnim.sway_offset.x) * .02
    weaponAnim.sway_offset.y += (normalized_mouseaccel.y - weaponAnim.sway_offset.y) * .02

    ctx.drawImage(
        images[weaponName].img,
        weaponAnim.current_frame * frame_width,
        0,
        frame_width,
        images[weaponName].img.height,
        550 + weaponAnim.sway_offset.x,
        420 + weaponAnim.sway_offset.y,
        frame_width - 200,
        images[weaponName].img.height - 150
    )
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


const showBulletsPercentage = (ctx: CanvasRenderingContext2D) => {
    if (lastPercentage){
        ctx.save()
        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'black'
        ctx.font = '30px Play-Bold'
        ctx.fillText(`Spray accuracy : ${lastPercentage.toFixed(2)} %`, 850, 50)
        ctx.strokeText(`Spray accuracy : ${lastPercentage.toFixed(2)} %`, 850, 50)
        ctx.restore()
    }
}

export const drawTrajectorySpreads = (
    ctx: CanvasRenderingContext2D,
    weaponName: string,
    patternSpreadOffset: Vector2,
    screenOffsetAimPunch: Vector2,
    spraySettings: SpraySettings,
    spread_img: ImageObject,
    slowPercentage: number,
    audios: {[key: string]: AudioObject},
) => {
    const relative_spread_offset_x = ((fullscreenCanvasSize.w / 2) - screenOffsetAimPunch.x - (patternSpreadOffset.x)) - spreadImageSize / 2
    const relative_spread_offset_y = ((fullscreenCanvasSize.h / 2) - screenOffsetAimPunch.y - (patternSpreadOffset.y * screenScaleFactor)) - spreadImageSize / 2

    if (!spraySettings.is_spraying && spreads.length > 0 && !fireLatch){
        fireLatch = true
    }

    if (spraySettings.is_spraying && fireLatch){
        spreads.splice(0, spreads.length)
        fireLatch = false
        bulletsIntoTarget = 0
    }

    if (lastSpreadIndex != spraySettings.index && spraySettings.is_spraying){
        lastSpreadIndex = spraySettings.index

        playShotSound(audios, weaponName)

        let targetArea = (((1 / slowPercentage) * (spreadImageSize / 2)) * 10)
        if (targetArea > 15) targetArea = 15

        const isOnTarget = Math.abs(currentTargetSpreadPosition.x - (fullscreenCanvasSize.w / 2)) <= targetArea &&
                           Math.abs(currentTargetSpreadPosition.y - (fullscreenCanvasSize.h / 2)) <= targetArea
        if (isOnTarget){
            const rnd_x = Math.floor(Math.random() * 10) - 5
            const rnd_y = Math.floor(Math.random() * 10) - 5
            spreads.push({x: sprayPatternPosition.x + rnd_x, y: sprayPatternPosition.y + rnd_y})
            bulletsIntoTarget++
        } else {
            spreads.push({x: relative_spread_offset_x, y: relative_spread_offset_y})
        }
        if (spraySettings.index === Object.keys(weapons[weaponName].spreads).length){
            showPattern = false
            lastPercentage = (bulletsIntoTarget * 100) / Object.keys(spreads).length
            audios.beep.audio.currentTime = 0
            setTimeout(()=>{
                audios.beep.audio.play()
                showPattern = true
                bulletsIntoTarget = 0
            }, 2000)
        }
    }
    spreads.forEach(spread => {
        ctx.drawImage(
            spread_img.img,
            screenOffsetAimPunch.x + spread.x,
            screenOffsetAimPunch.y + spread.y,
            spreadImageSize,
            spreadImageSize
        )
    })

    showBulletsPercentage(ctx)
}

export const drawFixedPattern = (
    ctx: CanvasRenderingContext2D,
    weaponName: string,
    screenOffsetAimPunch: Vector2,
    spraySettings: SpraySettings
) => {
    ctx.save()
    let last_spread = {x: 0, y: 0}
    let current_spread_data = {offset_x: 0, offset_y: 0, index: 0}

    for (let i = 1; i <= Object.keys(weapons[weaponName].spreads).length; i++){
        const offset_x = last_spread.x + weapons[weaponName].spreads[i].x
        const offset_y = last_spread.y + weapons[weaponName].spreads[i].y

        if (spraySettings.index === i){
            current_spread_data.offset_x = offset_x
            current_spread_data.offset_y = offset_y
        }

        if (i >= spraySettings.index && showPattern){
            ctx.fillStyle = 'red'
            ctx.globalAlpha = .5
            ctx.beginPath()
            ctx.arc(
                sprayPatternPosition.x + (screenOffsetAimPunch.x) + (offset_x / sprayGapFactor),
                sprayPatternPosition.y + (screenOffsetAimPunch.y) + (offset_y / sprayGapFactor),
                impactHelperSize,
                0,
                2 * Math.PI
            )
            ctx.fill()
            ctx.stroke()
        }

        last_spread = {x: offset_x, y: offset_y}
    }

    if (showPattern){
        currentTargetSpreadPosition.x = sprayPatternPosition.x + (screenOffsetAimPunch.x) + (current_spread_data.offset_x / sprayGapFactor)
        currentTargetSpreadPosition.y = sprayPatternPosition.y + (screenOffsetAimPunch.y) + (current_spread_data.offset_y / sprayGapFactor)
    
        ctx.fillStyle = 'lime'
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.arc(
            currentTargetSpreadPosition.x,
            currentTargetSpreadPosition.y,
            impactHelperSize,
            0,
            2 * Math.PI
        )
        ctx.fill()
        ctx.stroke()
    }
    ctx.restore()
}