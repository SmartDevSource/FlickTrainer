import { Target } from "./types"

type MapsData = {
    [key: string]: { targets: Target[]}
}

export const mapsData: MapsData = {
    vertigo: {
        targets: [
            {
                team: 'terro',
                from: {x: 750, y: 500},
                to: {x: 940, y: 500},
                idle: false,
                crouched: false,
                distance: 100,
                speed: 1
            }
        ] as Target[]
    }
}