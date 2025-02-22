import { ImageObject, Target, Vector2, Timer } from "@/types"

const headOffset: number = 55
const targetTimer: Timer = {last_update: performance.now(), delta_time: 0}
const verticalOffset: {standup: number, crouch: number} = {standup: .4, crouch: 2}
let lastTargetIndex = -1

export let shotTimeout: ReturnType<typeof setTimeout> | null = null

export const getRandomTarget = (targets: Target[]) => {
    let rndIndex = Math.floor(Math.random() * targets.length)

    while(rndIndex === lastTargetIndex){
        rndIndex = Math.floor(Math.random() * targets.length)
    }

    lastTargetIndex = rndIndex
    // console.log("Random index target :", rndIndex)

    if (shotTimeout){
        clearTimeout(shotTimeout)
    }
    return targets[rndIndex]
}

const getReactionTime = (difficulty: string) => {
    switch(difficulty){
        case 'easy': return 1200
        case 'medium': return 1000
        case 'hard': return 800
        case 'faceit_peek': return 650
    }
}

const shotPlayer = (target: Target, killPlayer: () => void) => {
    if (target.idle){
        killPlayer()
    }
}

export const getHeadCoordinates = (target: Target, screenOffset: Vector2, image: ImageObject) => {
    return {
        position: {
            x: (target.from.x + screenOffset.x) +
               (((image.img.width / 2) -
               ((headOffset + (headOffset / 2)) / 2)) /
               (target.distance)),
            y: (target.from.y + screenOffset.y) +
               (target.character.includes('crouch') ? verticalOffset.crouch : verticalOffset.standup) *
               (headOffset / target.distance),
        },
        scale: {
            w: headOffset / (target.distance),
            h: headOffset / target.distance + 5
        }
    }
}

export const updateTargetTimer = () => {
    const now = performance.now()
    targetTimer.delta_time = (now - targetTimer.last_update) / 1000
    targetTimer.last_update = now
}

export const updateTarget = (target: Target, difficulty: string, isFullscreen: boolean, killPlayer: () => void) => {
    if (!target.idle && isFullscreen){
        if (target.from.x < target.to.x){
            target.from.x += (target.speed * targetTimer.delta_time)
        } else if (target.from.x > target.to.x){
            target.from.x -= (target.speed * targetTimer.delta_time)
        }
        if (target.from.y > target.to.y){
            target.from.y -= (target.speed * targetTimer.delta_time)
        } else if (target.from.y < target.to.y){
            target.from.y += (target.speed * targetTimer.delta_time)
        }

        switch(target.come_from){
            case 'left':
                if (target.from.x > target.to.x){
                    target.from.x = target.to.x
                    target.idle = true
                    shotTimeout = setTimeout(()=>{
                        shotPlayer(target, killPlayer)
                    }, getReactionTime(difficulty))
                }
            break
            case 'right':
                if (target.from.x < target.to.x){
                    target.from.x = target.to.x
                    target.idle = true
                    shotTimeout = setTimeout(()=>{
                        shotPlayer(target, killPlayer)
                    }, getReactionTime(difficulty))
                }
            break
            case 'down':
                if (target.from.y < target.to.y){
                    target.from.y = target.to.y
                    target.idle = true
                    shotTimeout = setTimeout(()=>{
                        shotPlayer(target, killPlayer)
                    }, getReactionTime(difficulty))
                }
            break
            case 'up':
                if (target.from.y > target.to.y){
                    target.from.y = target.to.y
                    target.idle = true
                    shotTimeout = setTimeout(()=>{
                        shotPlayer(target, killPlayer)
                    }, getReactionTime(difficulty))
                }
            break
        }
    }
    return target
}