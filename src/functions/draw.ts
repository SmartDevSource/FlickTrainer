import { ImageObject, Statistics, Target, Vector2, Timer } from "@/types"

const timer: Timer = {last_update: Date.now(), delta_time: 0}

const weaponAnim: {
    current_frame: number,
    last_update: number,
    update_delay: number,
    speed_shot_animation: number,
    frames_count: number
} = {
    current_frame: 0,
    last_update: 0,
    update_delay: .07,
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

export const initialWindowSize = {w: 1024, h: 768}
export const screenBoundaries = {left: 0, top: 0, right: -890, bottom: -295}

export const drawWeapon = (ctx: CanvasRenderingContext2D, 
                            weaponImg: ImageObject,
                            flameImg: ImageObject,
                            isFiring: boolean, 
                            updateFiringState: (state: boolean) => void) => 
{
    timer.delta_time = (Date.now() - timer.last_update) / 1000
    timer.last_update = Date.now()

    if (isFiring && weaponAnim.current_frame < weaponAnim.frames_count - 1){
        weaponAnim.last_update += timer.delta_time * weaponAnim.speed_shot_animation
        if (weaponAnim.last_update > weaponAnim.update_delay){
            weaponAnim.last_update = 0
            weaponAnim.current_frame++
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

export const drawTarget = (target: Target, screenOffset: Vector2, ctx: CanvasRenderingContext2D, targetImg: ImageObject) => {
    ctx.drawImage(
        targetImg.img,
        0,
        0,
        targetImg.img.width,
        targetImg.img.height,
        target.from.x + screenOffset.x,
        target.from.y + screenOffset.y,
        targetImg.img.width / (target.distance + 1.5),
        targetImg.img.height / target.distance
    )
}

export const drawStatistics = (statistics: Statistics, ctx: CanvasRenderingContext2D) => {
    // ADD DELAY REACTION TIME (MS)
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
}

export const drawPlayerDeath = (ctx: CanvasRenderingContext2D) => {
    if (deathAnim.opacity < 1){
        deathAnim.opacity += timer.delta_time * deathAnim.update_delay
        if (deathAnim.opacity > 1){
            deathAnim.opacity = 1
        }
    }
    ctx.fillStyle = `rgba(0, 0, 0, ${deathAnim.opacity})`
    ctx.fillRect(0, 0, initialWindowSize.w, initialWindowSize.h)
}