import { MapStruct, Target } from "@/types"

export const ancient: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////


    ////////////////// TERRORIST CIRCUIT //////////////////
    tside_b_ramp_to_heaven: {
        targets: [
            {
                character: "ct_standup",
                come_from: "down",
                from: {x: 950, y: 556},
                to: {x: 950, y: 544},
                idle: false,
                distance: 13.399999999999968,
                speed: 65
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 948, y: 564},
                to: {x: 920, y: 540},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 934, y: 558},
                to: {x: 956, y: 542},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1000, y: 504},
                to: {x: 960, y: 504},
                idle: false,
                distance: 8.599999999999985,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1000, y: 504},
                to: {x: 978, y: 504},
                idle: false,
                distance: 8.599999999999985,
                speed: 87
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}