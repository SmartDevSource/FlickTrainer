import { ImageObject, Vector2, Timer, SpraySettings, AudioObject } from "@/types"
import { weapons } from "./weapons"
import { crosshairData } from "../crosshair_changer"
import { playShotSound } from "../utils"

export const minimizedCanvasSize = {w: 320, h: 240}
export const fullscreenCanvasSize = {w: 1240, h: 768}
export const screenBoundaries = {left: 250, top: 250, right: -925, bottom: -545} // {left: 0, top: 0, right: -670, bottom: -315}
export const screenScaleFactor = (fullscreenCanvasSize.w / fullscreenCanvasSize.h)

const timer: Timer = {last_update: performance.now(), delta_time: 0}
const crosshairScaleFactor: number = 2

const sprayGapFactor: number = 1.5
const sprayPatternPosition: Vector2 = {x: 1000, y: 550}
const currentTargetSpreadPosition: Vector2 = {x: 0, y: 0}
const impactHelperSize: number = 5
const spreadImageSize: number = 10
const spreads: Vector2[] = []

const weaponScaleFactor: number = .8
let bulletsIntoTarget: number = 0
let lastSpreadIndex: number = 1
let fireLatch: boolean = false
let showPattern: boolean = true
let lastPercentage: number = 0
let animateWeapon: boolean = false
let speedUpdated: boolean = false

export const weaponAnim: {
    current_frame: number,
    last_update: number,
    update_delay: number,
    speed_shot_animation: number,
    frames_count: number,
    sway_offset: Vector2,
    scale_recoil: number,
    max_scale_recoil: number,
} = {
    current_frame: 0,
    last_update: 0,
    update_delay: .01,
    speed_shot_animation: 7.4,
    frames_count: 20,
    sway_offset: {x: 0, y: 0},
    scale_recoil: 0,
    max_scale_recoil: 120,
}

const drawShotFlame = (ctx: CanvasRenderingContext2D, flameImg: ImageObject, flameOffset: Vector2) => {
    ctx.drawImage(
        flameImg.img,
        0,
        0,
        flameImg.img.width,
        flameImg.img.height,
        flameOffset.x,
        flameOffset.y - (weaponAnim.scale_recoil / 2),
        300,
        300
    )
}

export const drawWeapon = (
    ctx: CanvasRenderingContext2D,
    weaponName: string,
    isFiring: boolean,
    mouseAccel: Vector2,
    spraySettings: SpraySettings,
    fireTimer: number,
    images: {[key: string]: ImageObject}
) => {
    const now = performance.now()
    timer.delta_time = Math.min((now - timer.last_update) / 1000, 0.016)
    timer.last_update = now

    if (isFiring){
        if (!animateWeapon){
            animateWeapon = true
        }
    }

    const timerTarget = weapons[weaponName].fire_rate
    const halfTimer = timerTarget / 2

    if (spraySettings.is_spraying){
        if (animateWeapon) {
            if (fireTimer >= 0 && fireTimer < halfTimer) {
                const targetScale = weaponAnim.max_scale_recoil
                const recoil = (spraySettings.index / 10) < .5 ? (spraySettings.index / 10) : .5
                weaponAnim.scale_recoil += (targetScale - weaponAnim.scale_recoil) * recoil
            }
        }
    
        if (fireTimer >= 0 && fireTimer < halfTimer){
            if (weaponName != 'm4a1s')
                drawShotFlame(ctx, images.shotflame, weapons[weaponName].flame_offset)
        }    
    }

    if (fireTimer >= halfTimer) {
        if (weaponAnim.scale_recoil > .1) {
            weaponAnim.scale_recoil += (0 - weaponAnim.scale_recoil) * 0.1
        } else {
            weaponAnim.scale_recoil = 0
            animateWeapon = false
        }
    }

    const normalized_mouseaccel = {
        x: Math.floor(mouseAccel.x) < -60 ? -60 : Math.floor(mouseAccel.x) > 60 ? 60 : Math.floor(mouseAccel.x),
        y: Math.floor(mouseAccel.y) < -60 ? -60 : Math.floor(mouseAccel.y) > 60 ? 60 : Math.floor(mouseAccel.y)
    }
    weaponAnim.sway_offset.x += (normalized_mouseaccel.x - weaponAnim.sway_offset.x) * .02
    weaponAnim.sway_offset.y += (normalized_mouseaccel.y - weaponAnim.sway_offset.y) * .02

    ctx.drawImage(
        images[weaponName].img,
        0,
        0,
        images[weaponName].img.width,
        images[weaponName].img.height,
        (weapons[weaponName].offset.x + weaponAnim.sway_offset.x),
        (weapons[weaponName].offset.y + weaponAnim.sway_offset.y) - weaponAnim.scale_recoil,
        (images[weaponName].img.width * weaponScaleFactor) + weaponAnim.scale_recoil,
        (images[weaponName].img.height * weaponScaleFactor) + weaponAnim.scale_recoil
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


const showBulletsPercentage = (ctx: CanvasRenderingContext2D, screenOffsetAimPunch: Vector2) => {
    if (lastPercentage){
        ctx.save()
        ctx.fillStyle = 'rgba(70, 70, 70, .5)'

        ctx.fillRect(
            1110 + screenOffsetAimPunch.x,
            410 + screenOffsetAimPunch.y,
            215,
            50
        )
    
        ctx.strokeRect(
            1110 + screenOffsetAimPunch.x,
            410 + screenOffsetAimPunch.y,
            215,
            50
        )

        ctx.fillStyle = 'white'
        ctx.strokeStyle = 'black'
        ctx.font = '20px Play-Bold'
        ctx.lineWidth = 3

        ctx.strokeText(
            `Accuracy : ${lastPercentage.toFixed(2)} %`,
            1130 + screenOffsetAimPunch.x,
            443 + screenOffsetAimPunch.y,
        )
        ctx.fillText(
            `Accuracy : ${lastPercentage.toFixed(2)} %`,
            1130 + screenOffsetAimPunch.x,
            443 + screenOffsetAimPunch.y
        )
    
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
    speedShoot: number,
    audios: {[key: string]: AudioObject},
) => {
    const relative_spread_offset_x = ((fullscreenCanvasSize.w / 2) - screenOffsetAimPunch.x - (patternSpreadOffset.x)) - spreadImageSize / 2
    const relative_spread_offset_y = ((fullscreenCanvasSize.h / 2) - screenOffsetAimPunch.y - (patternSpreadOffset.y * screenScaleFactor)) - spreadImageSize / 2

    if (!spraySettings.is_spraying && spreads.length > 0 && !fireLatch){
        fireLatch = true
        lastSpreadIndex = 1
    }

    if (spraySettings.is_spraying && fireLatch){
        fireLatch = false
        bulletsIntoTarget = 0
        spreads.splice(0, spreads.length)
    }

    if (lastSpreadIndex != spraySettings.index && spraySettings.is_spraying){
        lastSpreadIndex = spraySettings.index

        playShotSound(audios, weaponName)

        const targetArea = (speedShoot >= 0 && speedShoot < 5) ? 17 :
                           (speedShoot >= 5 && speedShoot < 10) ? 12 : 7

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

        if (spraySettings.index === Object.keys(weapons[weaponName].spreads).length + 1){
            showPattern = false
            lastPercentage = (bulletsIntoTarget * 100) / Object.keys(spreads).length
            audios.beep.audio.currentTime = 0
            setTimeout(()=>{
                audios.beep.audio.play()
                showPattern = true
                bulletsIntoTarget = 0
            }, 1500)
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

    showBulletsPercentage(ctx, screenOffsetAimPunch)
}

export const drawFixedPattern = (
    ctx: CanvasRenderingContext2D,
    weaponName: string,
    screenOffsetAimPunch: Vector2,
    spraySettings: SpraySettings
) => {
    ctx.save()
    let last_spread = {x: 0, y: 0}
    const current_spread_data = {offset_x: 0, offset_y: 0, index: 0}

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

export const drawSpeedSelector = (
    ctx: CanvasRenderingContext2D,
    screenOffsetAimPunch: Vector2,
    normalizedSpeed: number,
    isFiring: boolean,
    setSpeed: (selection: string) => void
) => {
    ctx.save()

    let xTextCenter = 0

    switch(true){
        case normalizedSpeed < 20: xTextCenter = 20; break
        case normalizedSpeed >= 20 && normalizedSpeed < 100: xTextCenter = 30; break
        case normalizedSpeed === 100: xTextCenter = 5; break
    }

    ctx.fillStyle = 'rgba(70, 70, 70, .5)'

    ctx.fillRect(
        1110 + screenOffsetAimPunch.x,
        280 + screenOffsetAimPunch.y,
        215,
        130
    )

    ctx.strokeRect(
        1110 + screenOffsetAimPunch.x,
        280 + screenOffsetAimPunch.y,
        215,
        130
    )

    ctx.fillStyle = 'white'

    ctx.font = 'bold 40px Digit'
    ctx.lineWidth = 4

    ctx.strokeText(
        `Speed`,
        1155 + screenOffsetAimPunch.x,
        330 + screenOffsetAimPunch.y,
    )
    ctx.fillText(
        `Speed`,
        1155 + screenOffsetAimPunch.x,
        330 + screenOffsetAimPunch.y
    )

    ctx.font = 'bold 60px Digit'
    ctx.lineWidth = 4

    const isOnDecreaseArrow = Math.abs(1140 + screenOffsetAimPunch.x - (fullscreenCanvasSize.w / 2)) <= 30 &&
                              Math.abs(375 + screenOffsetAimPunch.y - (fullscreenCanvasSize.h / 2)) <= 30

    const isOnIncreaseArrow = Math.abs(1300 + screenOffsetAimPunch.x - (fullscreenCanvasSize.w / 2)) <= 30 &&
                              Math.abs(375 + screenOffsetAimPunch.y - (fullscreenCanvasSize.h / 2)) <= 30

    if (isOnDecreaseArrow){
        ctx.save()
        ctx.fillStyle = 'rgba(50, 50, 50, .5)'
        ctx.fillRect(
            1115 + screenOffsetAimPunch.x,
            350 + screenOffsetAimPunch.y,
            45,
            50
        )
        ctx.restore()
        if (isFiring && !speedUpdated){
            setSpeed('-')
            speedUpdated = true
            setTimeout(() => {
                speedUpdated = false
            }, 100)
        }
    }
    
    ctx.strokeText(
        `<`,
        1120 + screenOffsetAimPunch.x,
        395 + screenOffsetAimPunch.y,
    )
    ctx.fillText(
        `<`,
        1120 + screenOffsetAimPunch.x,
        395 + screenOffsetAimPunch.y
    )

    ctx.strokeText(
        `${normalizedSpeed}`,
        1145 + (xTextCenter) + screenOffsetAimPunch.x,
        400 + screenOffsetAimPunch.y,
    )
    ctx.fillText(
        `${normalizedSpeed}`,
        1145 + (xTextCenter) + screenOffsetAimPunch.x,
        400 + screenOffsetAimPunch.y
    )

    if (isOnIncreaseArrow){
        ctx.save()
        ctx.fillStyle = 'rgba(50, 50, 50, .5)'
        ctx.fillRect(
            1275 + screenOffsetAimPunch.x,
            350 + screenOffsetAimPunch.y,
            45,
            50
        )
        ctx.restore()
        if (isFiring && !speedUpdated){
            setSpeed('+')
            speedUpdated = true
            setTimeout(() => {
                speedUpdated = false
            }, 100)
        }
    }

    ctx.strokeText(
        `>`,
        1280 + screenOffsetAimPunch.x,
        395 + screenOffsetAimPunch.y,
    )
    ctx.fillText(
        `>`,
        1280 + screenOffsetAimPunch.x,
        395 + screenOffsetAimPunch.y
    )

    ctx.restore()
}