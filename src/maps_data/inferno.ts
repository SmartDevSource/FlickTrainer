import { MapStruct, Target } from "@/types"

export const inferno: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////
    tramp_to_mid: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 824, y: 450},
                to: {x: 855, y: 450},
                idle: false,
                distance: 11.599999999999975,
                speed: 90
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ////////////////// TERRORIST CIRCUIT //////////////////
}