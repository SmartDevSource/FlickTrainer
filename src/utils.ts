import { Target } from "./types"

export const getRandomTarget = (targets: Target[]) => {
    const rndIndex = Math.floor(Math.random() * targets.length)
    return targets[rndIndex]
}

export const updateTarget = (target: Target) => {
    if (target.from.x < target.to.x){
        target.from.x += target.speed
    } else if (target.from.x > target.to.x){
        target.from.x -= target.speed
    } else {
        if (!target.idle){
            target.idle = true

        }
    }
    return target
}