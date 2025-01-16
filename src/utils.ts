import { ImageObject, Statistics, Target, Vector2 } from "./types"

let last_update: number = Date.now()
export let delta_time: number = 0

let current_weapon_frame: number = 0
let last_weapon_update: number = 0
let weapon_update_delay: number = .07

const speedMove: number = 100
const speedShot: number = 7.4
const headOffset: number = 55
const verticalOffset: {standup: number, crouch: number} = {standup: .4, crouch: 2}
const weapon_frames_count: number = 20

export const screenBoundaries = {left: 0, top: 0, right: -890, bottom: -295}

export const getHeadCoordinates = (target: Target, screenOffset: Vector2, image: ImageObject) => {
    return {
        position: {
            x: (target.from.x + screenOffset.x) +
               (((image.img.width / 2) -
               ((headOffset + (headOffset / 2)) / 2)) /
               (target.distance + 2)),
            y: (target.from.y + screenOffset.y) +
               (target.character.includes('crouch') ? verticalOffset.crouch : verticalOffset.standup) *
               (headOffset / target.distance),
        },
        scale: {
            w: headOffset / (target.distance + 2),
            h: headOffset / target.distance + 5
        }
    }
}

const getReactionTime = (difficulty: string) => {
    switch(difficulty){
        case 'easy': return 1000
        case 'medium': return 500
        case 'hard': return 220
    }
}

export const getRandomTarget = (targets: Target[]) => {
    const rndIndex = Math.floor(Math.random() * targets.length)
    console.log("Random index target :", rndIndex)
    return targets[rndIndex]
}

export const updateTimers = () => {
    delta_time = (Date.now() - last_update) / 1000
    last_update = Date.now()
}

export const updateTarget = (target: Target, difficulty: string) => {
    if (!target.idle){
        if (target.from.x < target.to.x){
            target.from.x += (speedMove * delta_time)
        } else if (target.from.x > target.to.x){
            target.from.x -= (speedMove * delta_time)
        }

        switch(target.come_from){
            case 'left':
                if (target.from.x > target.to.x){
                    target.from.x = target.to.x
                    target.idle = true
                    // setTimeout(()=>{
                    //     alert("Boom !")
                    // }, getReactionTime(difficulty))
                }
            break
            case 'right':
                if (target.from.x < target.to.x){
                    target.from.x = target.to.x
                    target.idle = true
                    // setTimeout(()=>{
                    //     alert("Boom !")
                    // }, getReactionTime(difficulty))
                }
            break
        }
    }
    return target
}

export const drawWeapon = (ctx: CanvasRenderingContext2D, 
                            weapon_img: ImageObject,
                            flame_img: ImageObject,
                            isFiring: boolean, 
                            updateFiringState: (state: boolean) => void) => 
{
    if (isFiring && current_weapon_frame < weapon_frames_count - 1){
        last_weapon_update += delta_time * speedShot

        if (last_weapon_update > weapon_update_delay){
            last_weapon_update = 0
            current_weapon_frame++
            if (current_weapon_frame >= weapon_frames_count - 1){
                updateFiringState(false)
                current_weapon_frame = 0
            }
        }
    }
    const frame_width = weapon_img.img.width / weapon_frames_count
    ctx.drawImage(
        weapon_img.img,
        current_weapon_frame * frame_width,
        0,
        frame_width,
        weapon_img.img.height,
        600,
        150,
        frame_width - 150,
        weapon_img.img.height - 150
    )
    if (current_weapon_frame == 2){
        ctx.drawImage(
            flame_img.img,
            0,
            0,
            flame_img.img.width,
            flame_img.img.height,
            470,
            320,
            flame_img.img.width / 2,
            flame_img.img.height / 2
        )
    }
}

export const drawTarget = (target: Target, screenOffset: Vector2, ctx: CanvasRenderingContext2D, image: ImageObject) => {
    ctx.drawImage(
        image.img,
        0,
        0,
        image.img.width,
        image.img.height,
        target.from.x + screenOffset.x,
        target.from.y + screenOffset.y,
        image.img.width / (target.distance + 2),
        image.img.height / target.distance
    )

    // const headCoordinates = getHeadCoordinates(target, screenOffset, image)
    // ctx.fillStyle = 'rgba(255, 0, 0, .5)'
    // ctx.fillRect(
    //     headCoordinates.position.x,
    //     headCoordinates.position.y,
    //     headCoordinates.scale.w,
    //     headCoordinates.scale.h    
    // )
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