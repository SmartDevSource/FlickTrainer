import { MapStruct, Target } from "@/types"

export const dust2: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////

    ////////////////// TERRORIST CIRCUIT //////////////////
    tspawn_to_mid: {
        targets: [
            {
                character: 'ct_crouch',
                come_from: 'left',
                from: {x: 895, y: 545},
                to: {x: 915, y: 545},
                idle: false,
                distance: 8.5,
                speed: 50
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}