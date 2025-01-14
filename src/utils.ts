import { ImageObject, Target, Vector2 } from "./types"

let last_update = Date.now()
const speedMove: number = 100
const headOffset: number = 55
const verticalOffset: {standup: number, crouch: number} = {standup: .4, crouch: 2}

export const getHeadCoordinates = (target: Target, screenOffset: Vector2, image: ImageObject) => {
    return {
        position: {
            x: (target.from.x + screenOffset.x) +
                (((image.img.width / 2) -
                ((headOffset + (headOffset / 2)) / 2)) /
                (target.distance + 2)),
            y:  (target.from.y + screenOffset.y) +
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
        case 'middle': return 500
        case 'hard': return 200
    }
}

export const getRandomTarget = (targets: Target[]) => {
    const rndIndex = Math.floor(Math.random() * targets.length)
    console.log("Random index target :", rndIndex)
    return targets[rndIndex]
}

export const updateTarget = (target: Target, difficulty: string) => {
    const current_time = Date.now()
    const delta_time = (current_time - last_update) / 1000
    last_update = Date.now()

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

export const drawTarget = (target: Target, screenOffset: Vector2, ctx: CanvasRenderingContext2D, image: ImageObject) => {
    const headCoordinates = getHeadCoordinates(target, screenOffset, image)
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
    ctx.fillStyle = 'rgba(255, 0, 0, .5)'
    ctx.fillRect(
        headCoordinates.position.x,
        headCoordinates.position.y,
        headCoordinates.scale.w,
        headCoordinates.scale.h    
    )
}