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
    ctside_ctspawn_to_main: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 924, y: 535},
                to: {x: 892, y: 535},
                idle: false,
                distance: 12,
                speed: 80
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 813, y: 535},
                to: {x: 842, y: 535},
                idle: false,
                distance: 12,
                speed: 80
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 993, y: 486},
                to: {x: 966, y: 486},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 924, y: 535},
                to: {x: 903, y: 535},
                idle: false,
                distance: 12,
                speed: 70
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 813, y: 535},
                to: {x: 829, y: 535},
                idle: false,
                distance: 12,
                speed: 60
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 669, y: 522},
                to: {x: 713, y: 522},
                idle: false,
                distance: 4.200000000000001,
                speed: 179
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 695, y: 531},
                to: {x: 719, y: 531},
                idle: false,
                distance: 8.799999999999985,
                speed: 85
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_to_ivy: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1016, y: 533},
                to: {x: 1000, y: 533},
                idle: false,
                distance: 6.499999999999993,
                speed: 115
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 988, y: 540},
                to: {x: 956, y: 540},
                idle: false,
                distance: 9.99999999999998,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 988, y: 540},
                to: {x: 970, y: 540},
                idle: false,
                distance: 9.99999999999998,
                speed: 75
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 853, y: 540},
                to: {x: 888, y: 540},
                idle: false,
                distance: 10.19999999999998,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 851, y: 537},
                to: {x: 871, y: 537},
                idle: false,
                distance: 10.19999999999998,
                speed: 74
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 860, y: 506},
                to: {x: 874, y: 506},
                idle: false,
                distance: 12.099999999999973,
                speed: 62
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_connector_to_electric: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1094, y: 567},
                to: {x: 1035, y: 567},
                idle: false,
                distance: 5.799999999999995,
                speed: 160
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1088, y: 552},
                to: {x: 1055, y: 552},
                idle: false,
                distance: 4.5,
                speed: 167
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 921, y: 560},
                to: {x: 949, y: 560},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 943, y: 475},
                to: {x: 943, y: 426},
                idle: false,
                distance: 8.699999999999985,
                speed: 110
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 878, y: 568},
                to: {x: 843, y: 568},
                idle: false,
                distance: 8.699999999999985,
                speed: 90
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 868, y: 561},
                to: {x: 850, y: 561},
                idle: false,
                distance: 6.099999999999994,
                speed: 123
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 648, y: 560},
                to: {x: 682, y: 560},
                idle: false,
                distance: 6.699999999999992,
                speed: 112
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_popdog_to_a_main: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 666, y: 534},
                to: {x: 714, y: 534},
                idle: false,
                distance: 7.39999999999999,
                speed: 110
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1444, y: 530},
                to: {x: 1492, y: 530},
                idle: false,
                distance: 6.419999999999979,
                speed: 117
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 852, y: 504},
                to: {x: 828, y: 504},
                idle: false,
                distance: 9.079999999999922,
                speed: 83
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 878, y: 532},
                to: {x: 820, y: 532},
                idle: false,
                distance: 5.619999999999996,
                speed: 133
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 670, y: 534},
                to: {x: 698, y: 534},
                idle: false,
                distance: 7.459999999999956,
                speed: 101
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_a_main_to_popdog: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1372, y: 620},
                to: {x: 1222, y: 620},
                idle: false,
                distance: 2.4000000000000004,
                speed: 312
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1372, y: 620},
                to: {x: 1312, y: 620},
                idle: false,
                distance: 2.4000000000000004,
                speed: 312
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 948, y: 562},
                to: {x: 928, y: 562},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 866, y: 562},
                to: {x: 892, y: 562},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 752, y: 580},
                to: {x: 794, y: 580},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_popdog: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1036, y: 508},
                to: {x: 986, y: 508},
                idle: false,
                distance: 2,
                speed: 375
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 884, y: 472},
                to: {x: 955, y: 472},
                idle: false,
                distance: 8.999999999999984,
                speed: 140
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 884, y: 472},
                to: {x: 932, y: 472},
                idle: false,
                distance: 8.999999999999984,
                speed: 120
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 884, y: 472},
                to: {x: 908, y: 472},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_connector_to_b: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 824, y: 614},
                to: {x: 856, y: 614},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 422, y: 488},
                to: {x: 398, y: 488},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 472, y: 696},
                to: {x: 550, y: 696},
                idle: false,
                distance: 2.2,
                speed: 341
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 524, y: 672},
                to: {x: 566, y: 672},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 564, y: 624},
                to: {x: 592, y: 624},
                idle: false,
                distance: 10.559999999999961,
                speed: 85
            },
            {
                character: "terrorist_standup_darken",
                come_from: "up",
                from: {x: 954, y: 516},
                to: {x: 954, y: 560},
                idle: false,
                distance: 11.999999999999973,
                speed: 90
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_middle_to_b: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1290, y: 502},
                to: {x: 1324, y: 502},
                idle: false,
                distance: 5.939999999999996,
                speed: 126
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1090, y: 546},
                to: {x: 1062, y: 546},
                idle: false,
                distance: 8.899999999999933,
                speed: 84
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 992, y: 542},
                to: {x: 1018, y: 542},
                idle: false,
                distance: 7.859999999999955,
                speed: 95
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 806, y: 542},
                to: {x: 764, y: 542},
                idle: false,
                distance: 7.859999999999955,
                speed: 95
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 644, y: 534},
                to: {x: 668, y: 534},
                idle: false,
                distance: 6.719999999999979,
                speed: 112
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 692, y: 422},
                to: {x: 672, y: 422},
                idle: false,
                distance: 9.719999999999915,
                speed: 77
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_left_to_heaven: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1426, y: 766},
                to: {x: 1390, y: 766},
                idle: false,
                distance: 6.999999999999991,
                speed: 107
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 1014, y: 858},
                to: {x: 1070, y: 858},
                idle: false,
                distance: 4.4,
                speed: 170
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 950, y: 792},
                to: {x: 950, y: 770},
                idle: false,
                distance: 6.399999999999993,
                speed: 117
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 676, y: 560},
                to: {x: 722, y: 560},
                idle: false,
                distance: 4.799999999999999,
                speed: 156
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 822, y: 564},
                to: {x: 806, y: 564},
                idle: false,
                distance: 9.599999999999982,
                speed: 78
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_heaven_to_tspawn: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 816, y: 490},
                to: {x: 870, y: 490},
                idle: false,
                distance: 9.599999999999982,
                speed: 105
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 816, y: 490},
                to: {x: 836, y: 490},
                idle: false,
                distance: 9.599999999999982,
                speed: 78
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1008, y: 492},
                to: {x: 978, y: 492},
                idle: false,
                distance: 10.139999999999867,
                speed: 95
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1008, y: 492},
                to: {x: 992, y: 492},
                idle: false,
                distance: 10.139999999999867,
                speed: 74
            },
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 954, y: 468},
                to: {x: 954, y: 454},
                idle: false,
                distance: 14.399999999999965,
                speed: 52
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
}