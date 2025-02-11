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
    ctside_mid_1: {
        targets: [
            {
                character: "terrorist_crouch_darken",
                come_from: "up",
                from: {x: 1102, y: 518},
                to: {x: 1074, y: 542},
                idle: false,
                distance: 5.999999999999995,
                speed: 83
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1116, y: 526},
                to: {x: 1076, y: 526},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 950, y: 558},
                to: {x: 932, y: 558},
                idle: false,
                distance: 9.599999999999982,
                speed: 78
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 398, y: 516},
                to: {x: 566, y: 516},
                idle: false,
                distance: 2.2,
                speed: 341
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 398, y: 516},
                to: {x: 490, y: 516},
                idle: false,
                distance: 2.2,
                speed: 341
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_mid_2: {
        targets: [
            {
                character: "terrorist_crouch_darken",
                come_from: "left",
                from: {x: 826, y: 568},
                to: {x: 850, y: 568},
                idle: false,
                distance: 11.599999999999975,
                speed: 55
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1018, y: 568},
                to: {x: 992, y: 568},
                idle: false,
                distance: 11.599999999999975,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1016, y: 568},
                to: {x: 982, y: 568},
                idle: false,
                distance: 9.799999999999981,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1016, y: 568},
                to: {x: 1000, y: 568},
                idle: false,
                distance: 9.799999999999981,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 828, y: 568},
                to: {x: 866, y: 568},
                idle: false,
                distance: 9.799999999999981,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 828, y: 568},
                to: {x: 850, y: 568},
                idle: false,
                distance: 9.799999999999981,
                speed: 90
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 496, y: 558},
                to: {x: 582, y: 558},
                idle: false,
                distance: 3.200000000000001,
                speed: 234
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_mid_to_window: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 1074, y: 638},
                to: {x: 1106, y: 638},
                idle: false,
                distance: 9.399999999999983,
                speed: 80
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 874, y: 640},
                to: {x: 902, y: 640},
                idle: false,
                distance: 8.799999999999985,
                speed: 85
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1138, y: 718},
                to: {x: 1110, y: 718},
                idle: false,
                distance: 4.799999999999999,
                speed: 156
            },
            {
                character: "terrorist_standup",
                come_from: "up",
                from: {x: 1156, y: 608},
                to: {x: 1126, y: 636},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1040, y: 632},
                to: {x: 1016, y: 632},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 882, y: 628},
                to: {x: 912, y: 628},
                idle: false,
                distance: 10.999999999999977,
                speed: 68
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 774, y: 762},
                to: {x: 820, y: 762},
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
    ctside_mid_to_b: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1126, y: 542},
                to: {x: 1056, y: 542},
                idle: false,
                distance: 3.4,
                speed: 221
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1028, y: 514},
                to: {x: 1000, y: 514},
                idle: false,
                distance: 10.599999999999978,
                speed: 71
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 870, y: 514},
                to: {x: 886, y: 514},
                idle: false,
                distance: 10.599999999999978,
                speed: 71
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 878, y: 526},
                to: {x: 910, y: 526},
                idle: false,
                distance: 13.399999999999968,
                speed: 56
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_mid_to_a: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1006, y: 564},
                to: {x: 978, y: 564},
                idle: false,
                distance: 9.99999999999998,
                speed: 100
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1010, y: 562},
                to: {x: 992, y: 562},
                idle: false,
                distance: 8.399999999999986,
                speed: 90
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 830, y: 566},
                to: {x: 872, y: 566},
                idle: false,
                distance: 9.799999999999981,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 836, y: 566},
                to: {x: 856, y: 566},
                idle: false,
                distance: 7.19999999999999,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 652, y: 536},
                to: {x: 716, y: 536},
                idle: false,
                distance: 3.000000000000001,
                speed: 250
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_a_camera: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1338, y: 624},
                to: {x: 1306, y: 624},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1304, y: 548},
                to: {x: 1278, y: 548},
                idle: false,
                distance: 9.399999999999983,
                speed: 80
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1030, y: 618},
                to: {x: 1070, y: 618},
                idle: false,
                distance: 7.599999999999989,
                speed: 99
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 910, y: 634},
                to: {x: 910, y: 616},
                idle: false,
                distance: 10.399999999999979,
                speed: 72
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 676, y: 516},
                to: {x: 704, y: 516},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 306, y: 476},
                to: {x: 350, y: 476},
                idle: false,
                distance: 4.200000000000001,
                speed: 179
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_a_heaven: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 924, y: 584},
                to: {x: 880, y: 584},
                idle: false,
                distance: 10.19999999999998,
                speed: 105
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 860, y: 722},
                to: {x: 778, y: 722},
                idle: false,
                distance: 3.6000000000000014,
                speed: 210
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 988, y: 722},
                to: {x: 1072, y: 722},
                idle: false,
                distance: 4.000000000000002,
                speed: 210
            },
            {
                character: "terrorist_standup_darken",
                come_from: "up",
                from: {x: 1268, y: 582},
                to: {x: 1230, y: 616},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 924, y: 584},
                to: {x: 906, y: 584},
                idle: false,
                distance: 10.19999999999998,
                speed: 74
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 710, y: 608},
                to: {x: 736, y: 608},
                idle: false,
                distance: 7.19999999999999,
                speed: 104
            },
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 656, y: 572},
                to: {x: 632, y: 550},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_pilar_to_a_main: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1280, y: 658},
                to: {x: 1336, y: 658},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1044, y: 658},
                to: {x: 986, y: 658},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1038, y: 590},
                to: {x: 1010, y: 590},
                idle: false,
                distance: 6.999999999999991,
                speed: 107
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1034, y: 588},
                to: {x: 1006, y: 588},
                idle: false,
                distance: 9.199999999999983,
                speed: 82
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_a_main_to_water: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 730, y: 598},
                to: {x: 766, y: 598},
                idle: false,
                distance: 7.19999999999999,
                speed: 104
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1156, y: 606},
                to: {x: 1138, y: 606},
                idle: false,
                distance: 9.799999999999981,
                speed: 90
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1120, y: 582},
                to: {x: 1108, y: 582},
                idle: false,
                distance: 9.799999999999981,
                speed: 90
            },
            {
                character: "terrorist_standup_darken",
                come_from: "up",
                from: {x: 936, y: 554},
                to: {x: 956, y: 574},
                idle: false,
                distance: 9.799999999999981,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 678, y: 568},
                to: {x: 732, y: 568},
                idle: false,
                distance: 3.200000000000001,
                speed: 234
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