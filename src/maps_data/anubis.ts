import { MapStruct, Target } from "@/types"

export const anubis: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////
    ctside_ctspawn_to_b: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1000, y: 568},
                to: {x: 965, y: 568},
                idle: false,
                distance: 9.99999999999998,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 994, y: 576},
                to: {x: 976, y: 576},
                idle: false,
                distance: 7.799999999999988,
                speed: 96
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1000, y: 568},
                to: {x: 978, y: 568},
                idle: false,
                distance: 9.99999999999998,
                speed: 75
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 914, y: 570},
                to: {x: 922, y: 570},
                idle: false,
                distance: 11.799999999999974,
                speed: 64
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 880, y: 578},
                to: {x: 896, y: 578},
                idle: false,
                distance: 9.599999999999982,
                speed: 78
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 788, y: 586},
                to: {x: 834, y: 586},
                idle: false,
                distance: 7.39999999999999,
                speed: 150
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 788, y: 586},
                to: {x: 810, y: 586},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_temple_to_b: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1288, y: 624},
                to: {x: 1244, y: 624},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1308, y: 552},
                to: {x: 1270, y: 552},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1198, y: 576},
                to: {x: 1180, y: 576},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 1060, y: 576},
                to: {x: 1090, y: 576},
                idle: false,
                distance: 9.799999999999981,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 1028, y: 596},
                to: {x: 1078, y: 596},
                idle: false,
                distance: 4.4,
                speed: 170
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 772, y: 604},
                to: {x: 740, y: 604},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 520, y: 644},
                to: {x: 550, y: 644},
                idle: false,
                distance: 5.399999999999997,
                speed: 139
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_pillar_to_b_main: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1078, y: 610},
                to: {x: 1044, y: 610},
                idle: false,
                distance: 4.799999999999999,
                speed: 156
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1078, y: 546},
                to: {x: 1060, y: 546},
                idle: false,
                distance: 7.799999999999988,
                speed: 96
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 456, y: 650},
                to: {x: 504, y: 650},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 686, y: 608},
                to: {x: 720, y: 608},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 786, y: 578},
                to: {x: 814, y: 578},
                idle: false,
                distance: 9.399999999999983,
                speed: 80
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 794, y: 540},
                to: {x: 814, y: 540},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 874, y: 534},
                to: {x: 862, y: 534},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_connector_to_water: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 824, y: 596},
                to: {x: 864, y: 596},
                idle: false,
                distance: 11.199999999999976,
                speed: 110
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 828, y: 592},
                to: {x: 846, y: 592},
                idle: false,
                distance: 13.599999999999968,
                speed: 80
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1002, y: 596},
                to: {x: 968, y: 596},
                idle: false,
                distance: 10.999999999999977,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1002, y: 596},
                to: {x: 984, y: 596},
                idle: false,
                distance: 10.999999999999977,
                speed: 80
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 824, y: 596},
                to: {x: 840, y: 596},
                idle: false,
                distance: 10.999999999999977,
                speed: 80
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 600, y: 614},
                to: {x: 700, y: 614},
                idle: false,
                distance: 2,
                speed: 375
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_b_main: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 1128, y: 510},
                to: {x: 1128, y: 490},
                idle: false,
                distance: 9.99999999999998,
                speed: 75
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 992, y: 562},
                to: {x: 974, y: 562},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1000, y: 530},
                to: {x: 984, y: 530},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 898, y: 530},
                to: {x: 916, y: 530},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 764, y: 550},
                to: {x: 816, y: 550},
                idle: false,
                distance: 3.8000000000000016,
                speed: 197
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ////////////////// T CIRCUIT //////////////////
}