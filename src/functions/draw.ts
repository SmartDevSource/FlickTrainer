import { ImageObject, Statistics, Target, Vector2 } from "@/types"

let lastUpdate: number = Date.now()
let deltaTime: number = 0
let currentWeaponFrame: number = 0
let lastWeaponUpdate: number = 0
let weaponUpdateDelay: number = .07

const speedShotAnimation: number = 7.4
const weaponFramesCount: number = 20

export const screenBoundaries = {left: 0, top: 0, right: -890, bottom: -295}

export const drawWeapon = (ctx: CanvasRenderingContext2D, 
                            weaponImg: ImageObject,
                            flameImg: ImageObject,
                            isFiring: boolean, 
                            updateFiringState: (state: boolean) => void) => 
{
    deltaTime = (Date.now() - lastUpdate) / 1000
    lastUpdate = Date.now()

    if (isFiring && currentWeaponFrame < weaponFramesCount - 1){
        lastWeaponUpdate += deltaTime * speedShotAnimation
        if (lastWeaponUpdate > weaponUpdateDelay){
            lastWeaponUpdate = 0
            currentWeaponFrame++
            if (currentWeaponFrame >= weaponFramesCount - 1){
                updateFiringState(false)
                currentWeaponFrame = 0
            }
        }
    }
    const frame_width = weaponImg.img.width / weaponFramesCount
    ctx.drawImage(
        weaponImg.img,
        currentWeaponFrame * frame_width,
        0,
        frame_width,
        weaponImg.img.height,
        600,
        150,
        frame_width - 150,
        weaponImg.img.height - 150
    )
    if (currentWeaponFrame == 2){
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
        targetImg.img.width / (target.distance + 2),
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