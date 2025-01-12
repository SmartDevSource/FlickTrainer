import { Target, Vector2 } from "./types"

type MapsData = {
    [mapName: string]: { 
        [spotName: string]: {
            targets: Target[],
            initial_offset: Vector2
        }
    }
}

export const mapsData: MapsData = {
    vertigo: {
        ctspawn_to_mid: {
            targets: [
                {
                    character: 'terrorist_crouch_left_to_right',
                    current_frame: 4,
                    come_from: 'left',
                    from: {x: 880, y: 545},
                    to: {x: 912, y: 545},
                    idle: false,
                    distance: 8.5,
                    speed: 3,
                }
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            }
        },
    }
}