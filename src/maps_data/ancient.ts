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
    tside_b_ramp_to_site: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1326, y: 518},
                to: {x: 1255, y: 518},
                idle: false,
                distance: 5.999999999999995,
                speed: 190
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1326, y: 518},
                to: {x: 1282, y: 518},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1032, y: 530},
                to: {x: 1018, y: 530},
                idle: false,
                distance: 8.799999999999985,
                speed: 85
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 896, y: 522},
                to: {x: 928, y: 522},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 756, y: 510},
                to: {x: 722, y: 510},
                idle: false,
                distance: 5.399999999999997,
                speed: 139
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 330, y: 488},
                to: {x: 404, y: 488},
                idle: false,
                distance: 3.000000000000001,
                speed: 250
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}