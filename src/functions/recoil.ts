import { RecoilSettings, Vector2 } from "@/types"
import { screenBoundaries } from "./target"

const recoilSettings: RecoilSettings = {
        start_position: {x: 0, y: 0},
        end_position: {x: 0, y: 0},
        current_offset: {x: 0, y: 0},
        offset_step: {x: 1, y: 3},
        offset_max: {x: 4, y: 18},
        x_direction: '',
        reverse: false,
        is_running: false,
}

export const initRecoil = (screenOffset: Vector2) => {
    recoilSettings.start_position = {
        x: screenOffset.x,
        y: screenOffset.y
    }
    recoilSettings.end_position = {
        x: screenOffset.x + recoilSettings.offset_max.x,
        y: screenOffset.y + recoilSettings.offset_max.y
    }
    recoilSettings.is_running = true
    const rndDirection = Math.round(Math.random() * 1)
    recoilSettings.x_direction = rndDirection === 0 ? 'left': 'right'
}


export const updateRecoil = (screenOffset: Vector2) => {
    if (recoilSettings.is_running){
        if (!recoilSettings.reverse){
            if (recoilSettings.current_offset.y < recoilSettings.offset_max.y){
                recoilSettings.current_offset.y += recoilSettings.offset_step.y
                switch(recoilSettings.x_direction){
                    case 'left':
                        if (recoilSettings.current_offset.x > -recoilSettings.offset_max.x){
                            recoilSettings.current_offset.x += recoilSettings.offset_step.x
                        }
                    break
                    case 'right':
                        if (recoilSettings.current_offset.x < recoilSettings.offset_max.x){
                            recoilSettings.current_offset.x -= recoilSettings.offset_step.x
                        }
                    break
                }
                if (screenOffset.x + recoilSettings.current_offset.x < screenBoundaries.left &&
                    screenOffset.x - recoilSettings.current_offset.x > screenBoundaries.right
                ){
                    screenOffset.x += recoilSettings.current_offset.x
                }
                if (screenOffset.y + recoilSettings.current_offset.y < screenBoundaries.top &&
                    screenOffset.y - recoilSettings.current_offset.y > screenBoundaries.bottom
                )
                {
                    screenOffset.y += recoilSettings.current_offset.y
                }
            } else {
                recoilSettings.reverse = true
            }
        }
        if (recoilSettings.reverse){
            if (recoilSettings.current_offset.y > 0){
                recoilSettings.current_offset.y -= recoilSettings.offset_step.y
                switch(recoilSettings.x_direction){
                    case 'left':
                        if (recoilSettings.current_offset.x < -recoilSettings.offset_max.x){
                            recoilSettings.current_offset.x -= recoilSettings.offset_step.x
                        }
                    break
                    case 'right':
                        if (recoilSettings.current_offset.x > recoilSettings.offset_max.x){
                            recoilSettings.current_offset.x += recoilSettings.offset_step.x
                        }
                    break
                }
                if (screenOffset.x - recoilSettings.current_offset.x < screenBoundaries.left &&
                    screenOffset.x - recoilSettings.current_offset.x > screenBoundaries.right
                ){
                    screenOffset.x -= recoilSettings.current_offset.x
                }
                if (screenOffset.y + recoilSettings.current_offset.y < screenBoundaries.top &&
                    screenOffset.y - recoilSettings.current_offset.y > screenBoundaries.bottom
                )
                {
                    screenOffset.y -= recoilSettings.current_offset.y
                }
            } else {
                recoilSettings.reverse = false
                recoilSettings.current_offset = {x: 0, y: 0}
                recoilSettings.is_running = false
            }
        }
    }
}