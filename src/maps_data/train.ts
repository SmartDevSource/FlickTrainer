import { MapStruct, Target } from "@/types"

export const train: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////
    ctside_ctspawn_to_electric: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 282, y: 495},
                to: {x: 422, y: 495},
                idle: false,
                distance: 2,
                speed: 375
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1224, y: 535},
                to: {x: 1209, y: 535},
                idle: false,
                distance: 7.29999999999999,
                speed: 103
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1197, y: 512},
                to: {x: 1189, y: 512},
                idle: false,
                distance: 11.199999999999976,
                speed: 67
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1100, y: 534},
                to: {x: 1113, y: 534},
                idle: false,
                distance: 13.499999999999968,
                speed: 56
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 925, y: 535},
                to: {x: 900, y: 535},
                idle: false,
                distance: 11.399999999999975,
                speed: 66
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 829, y: 533},
                to: {x: 847, y: 533},
                idle: false,
                distance: 10.699999999999978,
                speed: 70
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 795, y: 533},
                to: {x: 775, y: 533},
                idle: false,
                distance: 10.699999999999978,
                speed: 70
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 695, y: 534},
                to: {x: 714, y: 534},
                idle: false,
                distance: 11.899999999999974,
                speed: 63
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
}