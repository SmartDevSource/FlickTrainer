import { MapStruct, Target } from "@/types"

export const train: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////
    under_heaven_to_ramp: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 1452, y: 663},
                to: {x: 1452, y: 649},
                idle: false,
                distance: 5.4999999999999964,
                speed: 100
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
}