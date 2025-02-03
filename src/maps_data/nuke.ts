import { MapStruct, Target } from "@/types"

export const nuke: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////
    ctspawn_to_long: {
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
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 1017, y: 479},
                to: {x: 1017, y: 471},
                idle: false,
                distance: 14,
                speed: 56
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 715, y: 370},
                to: {x: 731, y: 352},
                idle: false,
                distance: 8,
                speed: 104
            },
            {
                character: "terrorist_crouch",
                come_from: "right",
                from: {x: 1000, y: 472},
                to: {x: 978, y: 472},
                idle: false,
                distance: 16.99999999999997,
                speed: 55
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 824, y: 447},
                to: {x: 840, y: 447},
                idle: false,
                distance: 13,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 824, y: 450},
                to: {x: 840, y: 450},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1040, y: 459},
                to: {x: 1029, y: 459},
                idle: false,
                distance: 11.699999999999974,
                speed: 64
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ////////////////// TERRORIST CIRCUIT //////////////////
    top_mid_to_mid: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1027, y: 510},
                to: {x: 1019, y: 510},
                idle: false,
                distance: 15.499999999999961,
                speed: 48
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}