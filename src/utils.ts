import { ImageObject, Target, Vector2 } from "./types"

let last_update = Date.now()
const speedMove: number = 100

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
                    setTimeout(()=>{
                        alert("Boom !")
                    }, getReactionTime(difficulty))
                }
            break
            case 'right':
                if (target.from.x < target.to.x){
                    target.from.x = target.to.x
                    target.idle = true
                    setTimeout(()=>{
                        alert("Boom !")
                    }, getReactionTime(difficulty))
                }
            break
        }
    }
    return target
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
}