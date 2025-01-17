import { ImageObject, Target, Vector2 } from "@/types"

let lastUpdate: number = Date.now()
let deltaTime: number = 0

const headOffset: number = 55
const verticalOffset: {standup: number, crouch: number} = {standup: .4, crouch: 2}

export const screenBoundaries = {left: 0, top: 0, right: -890, bottom: -295}

const getReactionTime = (difficulty: string) => {
    switch(difficulty){
        case 'easy': return 1000
        case 'medium': return 500
        case 'hard': return 220
    }
}

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

export const getRandomTarget = (targets: Target[]) => {
    const rndIndex = Math.floor(Math.random() * targets.length)
    console.log("Random index target :", rndIndex)
    return targets[rndIndex]
}

export const updateTarget = (target: Target, difficulty: string) => {
    deltaTime = (Date.now() - lastUpdate) / 1000
    lastUpdate = Date.now()

    if (!target.idle){
        if (target.from.x < target.to.x){
            target.from.x += (target.speed * deltaTime)
        } else if (target.from.x > target.to.x){
            target.from.x -= (target.speed * deltaTime)
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