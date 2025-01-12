import { ImageObject, Target, Vector2 } from "./types"

const character_size: Vector2 = {
    x: 430,
    y: 500
}

let last_update = Date.now()

const getReactionTime = (difficulty: string) => {
    switch(difficulty){
        case 'easy': return 1000
        case 'middle': return 500
        case 'hard': return 200
    }
}

export const getRandomTarget = (targets: Target[]) => {
    const rndIndex = Math.floor(Math.random() * targets.length)
    return targets[rndIndex]
}

export const updateTarget = (target: Target, difficulty: string) => {
    if (!target.idle){
        const current_time = Date.now()
        const delta_time = (current_time - last_update) / 1000

        // if (target.current_frame < character_frames){
        //     if ((current_time - last_update) > speed_anim){
        //         last_update = Date.now()
        //         target.current_frame++
        //     }
        // }

        if (target.from.x < target.to.x){
            target.from.x += (target.speed * delta_time)
        } else if (target.from.x > target.to.x){
            target.from.x -= (target.speed * delta_time)
        }
        switch(target.come_from){
            case 'left':
                if (target.from.x > target.to.x){
                    target.idle = true
                    // setTimeout(()=>{
                    //     alert("Boom !")
                    // }, getReactionTime(difficulty))
                }
            break
            case 'right':
                if (target.from.x < target.to.x){
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
        target.current_frame * character_size.x,
        0,
        character_size.x,
        character_size.y,
        target.from.x + screenOffset.x,
        target.from.y + screenOffset.y,
        character_size.x / target.distance,
        character_size.y / target.distance
    )
}