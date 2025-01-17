import { ImageObject, Target, Vector2 } from "@/types"

const headOffset: number = 55
const timer: {last_update: number, delta_time: number} = {last_update: Date.now(), delta_time: 0}
const verticalOffset: {standup: number, crouch: number} = {standup: .4, crouch: 2}

export const screenBoundaries = {left: 0, top: 0, right: -890, bottom: -295}
let shotTimeout: ReturnType<typeof setTimeout> | null = null

const getReactionTime = (difficulty: string) => {
    switch(difficulty){
        case 'easy': return 1000
        case 'medium': return 750
        case 'hard': return 500
    }
}

const shotPlayer = (target: Target) => {
    if (target.idle){
        // alert(target.idle)
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
    if (shotTimeout){
        clearTimeout(shotTimeout)

    }
    console.log("Random index target :", rndIndex)
    return targets[rndIndex]
}

export const updateTarget = (target: Target, difficulty: string) => {
    timer.delta_time = (Date.now() - timer.last_update) / 1000
    timer.last_update = Date.now()

    if (!target.idle){
        if (target.from.x < target.to.x){
            target.from.x += (target.speed * timer.delta_time)
        } else if (target.from.x > target.to.x){
            target.from.x -= (target.speed * timer.delta_time)
        }

        switch(target.come_from){
            case 'left':
                if (target.from.x > target.to.x){
                    target.from.x = target.to.x
                    target.idle = true
                    shotTimeout = setTimeout(()=>{
                        shotPlayer(target)
                    }, getReactionTime(difficulty))
                }
            break
            case 'right':
                if (target.from.x < target.to.x){
                    target.from.x = target.to.x
                    target.idle = true
                    shotTimeout = setTimeout(()=>{
                        shotPlayer(target)
                    }, getReactionTime(difficulty))
                }
            break
        }
    }
    return target
}