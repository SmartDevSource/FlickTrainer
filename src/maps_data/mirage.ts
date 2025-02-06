import { MapStruct, Target } from "@/types"

export const mirage: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////
    ctside_ct_to_a: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1007, y: 559},
                to: {x: 1023, y: 559},
                idle: false,
                distance: 9.699999999999982,
                speed: 77
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1130, y: 471},
                to: {x: 1107, y: 471},
                idle: false,
                distance: 9.699999999999982,
                speed: 77
            },
            {
                character: "terrorist_crouch",
                come_from: "right",
                from: {x: 1139, y: 558},
                to: {x: 1119, y: 558},
                idle: false,
                distance: 7.499999999999989,
                speed: 67
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 1003, y: 558},
                to: {x: 1023, y: 558},
                idle: false,
                distance: 7.499999999999989,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 929, y: 558},
                to: {x: 912, y: 558},
                idle: false,
                distance: 7.499999999999989,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 600, y: 561},
                to: {x: 571, y: 561},
                idle: false,
                distance: 3.8000000000000016,
                speed: 197
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 604, y: 563},
                to: {x: 585, y: 563},
                idle: false,
                distance: 8.099999999999987,
                speed: 93
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 811, y: 567},
                to: {x: 833, y: 567},
                idle: false,
                distance: 12.499999999999972,
                speed: 60
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 864, y: 567},
                to: {x: 852, y: 567},
                idle: false,
                distance: 13.09999999999997,
                speed: 57
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 794, y: 560},
                to: {x: 820, y: 560},
                idle: false,
                distance: 5.2,
                speed: 129
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_jungle_to_a: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1086, y: 556},
                to: {x: 1069, y: 556},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 898, y: 558},
                to: {x: 921, y: 558},
                idle: false,
                distance: 7.099999999999991,
                speed: 106
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 904, y: 560},
                to: {x: 924, y: 560},
                idle: false,
                distance: 9.199999999999983,
                speed: 82
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1060, y: 488},
                to: {x: 1043, y: 488},
                idle: false,
                distance: 11.099999999999977,
                speed: 68
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 730, y: 453},
                to: {x: 748, y: 453},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_close_stairs_to_a: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1133, y: 575},
                to: {x: 1105, y: 575},
                idle: false,
                distance: 4.200000000000001,
                speed: 179
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 990, y: 581},
                to: {x: 972, y: 581},
                idle: false,
                distance: 8.199999999999987,
                speed: 91
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 901, y: 581},
                to: {x: 927, y: 581},
                idle: false,
                distance: 8.599999999999985,
                speed: 87
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 489, y: 456},
                to: {x: 489, y: 426},
                idle: false,
                distance: 5.399999999999997,
                speed: 139
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 691, y: 578},
                to: {x: 724, y: 578},
                idle: false,
                distance: 5.399999999999997,
                speed: 139
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 736, y: 515},
                to: {x: 751, y: 515},
                idle: false,
                distance: 14.499999999999964,
                speed: 52
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_stairs_to_ramp: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 737, y: 825},
                to: {x: 737, y: 776},
                idle: false,
                distance: 3.000000000000001,
                speed: 250
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 881, y: 669},
                to: {x: 912, y: 669},
                idle: false,
                distance: 5.699999999999996,
                speed: 132
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 741, y: 636},
                to: {x: 774, y: 636},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 951, y: 636},
                to: {x: 929, y: 636},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 885, y: 637},
                to: {x: 917, y: 637},
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
    ctside_ninja_to_ramp: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1274, y: 341},
                to: {x: 1220, y: 341},
                idle: false,
                distance: 4.300000000000001,
                speed: 174
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 638, y: 515},
                to: {x: 638, y: 479},
                idle: false,
                distance: 7.699999999999989,
                speed: 97
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1134, y: 578},
                to: {x: 1078, y: 578},
                idle: false,
                distance: 8.049999999999892,
                speed: 120
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 821, y: 560},
                to: {x: 873, y: 560},
                idle: false,
                distance: 4.2899999999999725,
                speed: 175
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1279, y: 566},
                to: {x: 1229, y: 566},
                idle: false,
                distance: 3.559999999999988,
                speed: 211
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