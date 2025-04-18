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
    ctside_ramp_to_tspawn: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 956, y: 540},
                to: {x: 868, y: 540},
                idle: false,
                distance: 5.799999999999995,
                speed: 180
            },
            {
                character: "terrorist_crouch",
                come_from: "right",
                from: {x: 1055, y: 357},
                to: {x: 1036, y: 357},
                idle: false,
                distance: 5.1999999999999975,
                speed: 96
            },
            {
                character: "terrorist_crouch_darken",
                come_from: "left",
                from: {x: 763, y: 546},
                to: {x: 813, y: 546},
                idle: false,
                distance: 3.4000000000000012,
                speed: 147
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 769, y: 546},
                to: {x: 828, y: 546},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 955, y: 541},
                to: {x: 924, y: 541},
                idle: false,
                distance: 5.899999999999995,
                speed: 127
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1067, y: 345},
                to: {x: 1026, y: 345},
                idle: false,
                distance: 5.099999999999998,
                speed: 147
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_palace: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1062, y: 523},
                to: {x: 1091, y: 523},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 974, y: 518},
                to: {x: 1014, y: 518},
                idle: false,
                distance: 4.5,
                speed: 167
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 806, y: 523},
                to: {x: 863, y: 523},
                idle: false,
                distance: 3.300000000000001,
                speed: 227
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 420, y: 505},
                to: {x: 495, y: 505},
                idle: false,
                distance: 2.7000000000000006,
                speed: 278
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_connector_to_short: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1019, y: 541},
                to: {x: 950, y: 541},
                idle: false,
                distance: 7.699999999999989,
                speed: 140
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1024, y: 641},
                to: {x: 948, y: 641},
                idle: false,
                distance: 5.299999999999997,
                speed: 170
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 799, y: 631},
                to: {x: 877, y: 631},
                idle: false,
                distance: 6.099999999999994,
                speed: 160
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1014, y: 639},
                to: {x: 985, y: 639},
                idle: false,
                distance: 5.299999999999997,
                speed: 145
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 802, y: 632},
                to: {x: 833, y: 632},
                idle: false,
                distance: 6.099999999999994,
                speed: 130
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 825, y: 547},
                to: {x: 862, y: 547},
                idle: false,
                distance: 10.999999999999977,
                speed: 110
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 813, y: 541},
                to: {x: 857, y: 541},
                idle: false,
                distance: 7.699999999999989,
                speed: 110
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1019, y: 541},
                to: {x: 979, y: 541},
                idle: false,
                distance: 7.699999999999989,
                speed: 110
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_window_to_mid: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1114, y: 550},
                to: {x: 1095, y: 550},
                idle: false,
                distance: 8.899999999999984,
                speed: 84
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 752, y: 546},
                to: {x: 776, y: 546},
                idle: false,
                distance: 13.599999999999968,
                speed: 55
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 1014, y: 543},
                to: {x: 1029, y: 543},
                idle: false,
                distance: 13.599999999999968,
                speed: 55
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 916, y: 543},
                to: {x: 897, y: 543},
                idle: false,
                distance: 13.599999999999968,
                speed: 55
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 914, y: 759},
                to: {x: 914, y: 720},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 1210, y: 757},
                to: {x: 1210, y: 709},
                idle: false,
                distance: 3.300000000000001,
                speed: 227
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 299, y: 531},
                to: {x: 339, y: 531},
                idle: false,
                distance: 4.4,
                speed: 170
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_top_mid_to_tvroom: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1179, y: 624},
                to: {x: 1135, y: 624},
                idle: false,
                distance: 7.799999999999988,
                speed: 120
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1179, y: 624},
                to: {x: 1153, y: 624},
                idle: false,
                distance: 7.799999999999988,
                speed: 96
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1177, y: 534},
                to: {x: 1154, y: 534},
                idle: false,
                distance: 9.199999999999983,
                speed: 82
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 977, y: 640},
                to: {x: 1004, y: 640},
                idle: false,
                distance: 6.8999999999999915,
                speed: 109
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 980, y: 611},
                to: {x: 1000, y: 611},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_kitchen: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1224, y: 525},
                to: {x: 1130, y: 525},
                idle: false,
                distance: 4.549999999999994,
                speed: 210
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 766, y: 531},
                to: {x: 796, y: 531},
                idle: false,
                distance: 7.009999999999941,
                speed: 107
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 739, y: 525},
                to: {x: 781, y: 525},
                idle: false,
                distance: 3.450000000000017,
                speed: 217
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1224, y: 525},
                to: {x: 1184, y: 525},
                idle: false,
                distance: 4.549999999999994,
                speed: 165
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 890, y: 530},
                to: {x: 834, y: 530},
                idle: false,
                distance: 7.29999999999999,
                speed: 125
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 890, y: 530},
                to: {x: 857, y: 530},
                idle: false,
                distance: 7.29999999999999,
                speed: 103
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_kitchen_to_b: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1214, y: 513},
                to: {x: 1170, y: 513},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 1058, y: 518},
                to: {x: 1090, y: 518},
                idle: false,
                distance: 7.499999999999989,
                speed: 100
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 650, y: 503},
                to: {x: 686, y: 503},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 770, y: 497},
                to: {x: 783, y: 497},
                idle: false,
                distance: 10.999999999999977,
                speed: 68
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 1120, y: 437},
                to: {x: 1133, y: 437},
                idle: false,
                distance: 11.999999999999973,
                speed: 63
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1191, y: 437},
                to: {x: 1168, y: 437},
                idle: false,
                distance: 11.999999999999973,
                speed: 63
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_kitchen_to_truck: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1175, y: 528},
                to: {x: 1113, y: 528},
                idle: false,
                distance: 2.4000000000000004,
                speed: 312
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1056, y: 533},
                to: {x: 1034, y: 533},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1019, y: 533},
                to: {x: 996, y: 533},
                idle: false,
                distance: 8.599999999999985,
                speed: 87
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 837, y: 532},
                to: {x: 860, y: 532},
                idle: false,
                distance: 6.299999999999994,
                speed: 119
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 957, y: 492},
                to: {x: 957, y: 480},
                idle: false,
                distance: 13.09999999999997,
                speed: 57
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 930, y: 490},
                to: {x: 930, y: 481},
                idle: false,
                distance: 12.599999999999971,
                speed: 60
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_bench_to_b: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1201, y: 531},
                to: {x: 1178, y: 531},
                idle: false,
                distance: 6.099999999999994,
                speed: 123
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1071, y: 535},
                to: {x: 1049, y: 535},
                idle: false,
                distance: 14.599999999999964,
                speed: 51
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 964, y: 538},
                to: {x: 988, y: 538},
                idle: false,
                distance: 10.499999999999979,
                speed: 71
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 910, y: 536},
                to: {x: 934, y: 536},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 572, y: 519},
                to: {x: 527, y: 519},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 507, y: 399},
                to: {x: 473, y: 399},
                idle: false,
                distance: 6.499999999999993,
                speed: 115
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_short_to_a: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 932, y: 601},
                to: {x: 932, y: 581},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 813, y: 602},
                to: {x: 813, y: 579},
                idle: false,
                distance: 8.599999999999985,
                speed: 87
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 805, y: 535},
                to: {x: 825, y: 535},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 811, y: 541},
                to: {x: 825, y: 541},
                idle: false,
                distance: 19.60000000000001,
                speed: 38
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 402, y: 511},
                to: {x: 456, y: 511},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 431, y: 529},
                to: {x: 469, y: 529},
                idle: false,
                distance: 6.999999999999991,
                speed: 107
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_truck_to_app: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1327, y: 702},
                to: {x: 1285, y: 702},
                idle: false,
                distance: 4.200000000000001,
                speed: 179
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1250, y: 628},
                to: {x: 1224, y: 628},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1256, y: 591},
                to: {x: 1240, y: 591},
                idle: false,
                distance: 13.09999999999997,
                speed: 57
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 870, y: 558},
                to: {x: 887, y: 558},
                idle: false,
                distance: 8.199999999999987,
                speed: 91
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 971, y: 557},
                to: {x: 955, y: 557},
                idle: false,
                distance: 10.399999999999979,
                speed: 72
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 769, y: 538},
                to: {x: 806, y: 538},
                idle: false,
                distance: 4.6,
                speed: 163
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ctside_b_app: {
        targets: [
            {
                character: "terrorist_crouch_darken",
                come_from: "right",
                from: {x: 1063, y: 545},
                to: {x: 1031, y: 545},
                idle: false,
                distance: 2.5000000000000004,
                speed: 200
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1075, y: 533},
                to: {x: 979, y: 533},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1075, y: 533},
                to: {x: 1042, y: 533},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 670, y: 529},
                to: {x: 775, y: 529},
                idle: false,
                distance: 3.300000000000001,
                speed: 275
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 670, y: 529},
                to: {x: 729, y: 529},
                idle: false,
                distance: 3.300000000000001,
                speed: 227
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ////////////////// TERRORIST CIRCUIT //////////////////
    tside_ramp_to_a: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 985, y: 403},
                to: {x: 931, y: 403},
                idle: false,
                distance: 8.299999999999986,
                speed: 130
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 985, y: 403},
                to: {x: 963, y: 403},
                idle: false,
                distance: 8.299999999999986,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 739, y: 526},
                to: {x: 758, y: 526},
                idle: false,
                distance: 8.699999999999985,
                speed: 86
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 860, y: 526},
                to: {x: 841, y: 526},
                idle: false,
                distance: 8.699999999999985,
                speed: 86
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 895, y: 497},
                to: {x: 878, y: 497},
                idle: false,
                distance: 5.599999999999996,
                speed: 134
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 655, y: 448},
                to: {x: 728, y: 448},
                idle: false,
                distance: 2.5000000000000004,
                speed: 300
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_tetris_to_a: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 331, y: 257},
                to: {x: 390, y: 257},
                idle: false,
                distance: 3.9000000000000017,
                speed: 192
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1224, y: 551},
                to: {x: 1251, y: 551},
                idle: false,
                distance: 7.699999999999989,
                speed: 97
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1147, y: 544},
                to: {x: 1115, y: 544},
                idle: false,
                distance: 6.8999999999999915,
                speed: 109
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 981, y: 542},
                to: {x: 1017, y: 542},
                idle: false,
                distance: 6.299999999999994,
                speed: 119
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 597, y: 523},
                to: {x: 638, y: 523},
                idle: false,
                distance: 3.8000000000000016,
                speed: 197
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 847, y: 542},
                to: {x: 826, y: 542},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_palace_to_stairs: {
        targets: [
            {
                character: "ct_standup",
                come_from: "down",
                from: {x: 833, y: 693},
                to: {x: 833, y: 672},
                idle: false,
                distance: 6.299999999999994,
                speed: 119
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1069, y: 621},
                to: {x: 1049, y: 621},
                idle: false,
                distance: 8.799999999999985,
                speed: 85
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 801, y: 584},
                to: {x: 817, y: 584},
                idle: false,
                distance: 11.399999999999975,
                speed: 66
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 869, y: 589},
                to: {x: 847, y: 589},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 791, y: 601},
                to: {x: 810, y: 601},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 955, y: 550},
                to: {x: 934, y: 530},
                idle: false,
                distance: 9.99999999999998,
                speed: 75
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_under_palace: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 714, y: 534},
                to: {x: 691, y: 534},
                idle: false,
                distance: 9.99999999999998,
                speed: 75
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 632, y: 534},
                to: {x: 650, y: 534},
                idle: false,
                distance: 9.99999999999998,
                speed: 75
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 220, y: 525},
                to: {x: 335, y: 525},
                idle: false,
                distance: 2.7000000000000006,
                speed: 278
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 467, y: 525},
                to: {x: 508, y: 525},
                idle: false,
                distance: 4.4,
                speed: 170
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1427, y: 398},
                to: {x: 1401, y: 398},
                idle: false,
                distance: 6.8999999999999915,
                speed: 109
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1345, y: 525},
                to: {x: 1326, y: 525},
                idle: false,
                distance: 9.499999999999982,
                speed: 79
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 926, y: 541},
                to: {x: 944, y: 541},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_a_to_stairs: {
        targets: [
            {
                character: "ct_standup",
                come_from: "down",
                from: {x: 1010, y: 530},
                to: {x: 1010, y: 507},
                idle: false,
                distance: 9.299999999999983,
                speed: 81
            },
            {
                character: "ct_standup",
                come_from: "down",
                from: {x: 988, y: 530},
                to: {x: 988, y: 517},
                idle: false,
                distance: 9.299999999999983,
                speed: 81
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1069, y: 587},
                to: {x: 1129, y: 587},
                idle: false,
                distance: 5.999999999999995,
                speed: 135
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1054, y: 578},
                to: {x: 1109, y: 578},
                idle: false,
                distance: 4.000000000000002,
                speed: 187
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 671, y: 581},
                to: {x: 622, y: 581},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_top_mid_to_connector: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1023, y: 575},
                to: {x: 1002, y: 575},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 989, y: 586},
                to: {x: 999, y: 586},
                idle: false,
                distance: 16.19999999999996,
                speed: 46
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 738, y: 663},
                to: {x: 707, y: 663},
                idle: false,
                distance: 6.399999999999993,
                speed: 117
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 804, y: 588},
                to: {x: 827, y: 588},
                idle: false,
                distance: 12.399999999999972,
                speed: 60
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_top_mid_to_short: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 790, y: 601},
                to: {x: 839, y: 601},
                idle: false,
                distance: 8.999999999999984,
                speed: 110
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 790, y: 601},
                to: {x: 811, y: 601},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 931, y: 620},
                to: {x: 914, y: 605},
                idle: false,
                distance: 12.69999999999997,
                speed: 59
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 840, y: 534},
                to: {x: 862, y: 534},
                idle: false,
                distance: 13.09999999999997,
                speed: 57
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 944, y: 534},
                to: {x: 927, y: 534},
                idle: false,
                distance: 13.09999999999997,
                speed: 57
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1081, y: 532},
                to: {x: 1059, y: 532},
                idle: false,
                distance: 10.599999999999978,
                speed: 71
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_connector_to_a: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1028, y: 535},
                to: {x: 1006, y: 535},
                idle: false,
                distance: 10.999999999999977,
                speed: 68
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1118, y: 434},
                to: {x: 1056, y: 434},
                idle: false,
                distance: 2.3000000000000003,
                speed: 326
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 743, y: 538},
                to: {x: 779, y: 538},
                idle: false,
                distance: 10.899999999999977,
                speed: 95
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 682, y: 354},
                to: {x: 712, y: 354},
                idle: false,
                distance: 6.099999999999994,
                speed: 123
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 739, y: 532},
                to: {x: 759, y: 532},
                idle: false,
                distance: 6.999999999999991,
                speed: 107
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 824, y: 539},
                to: {x: 803, y: 539},
                idle: false,
                distance: 10.19999999999998,
                speed: 74
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 936, y: 539},
                to: {x: 963, y: 539},
                idle: false,
                distance: 10.19999999999998,
                speed: 74
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_short_to_a: {
        targets: [
            {
                character: "ct_standup",
                come_from: "down",
                from: {x: 932, y: 601},
                to: {x: 932, y: 581},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 813, y: 602},
                to: {x: 813, y: 579},
                idle: false,
                distance: 8.599999999999985,
                speed: 87
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 805, y: 535},
                to: {x: 825, y: 535},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 811, y: 541},
                to: {x: 825, y: 541},
                idle: false,
                distance: 19.60000000000001,
                speed: 38
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 402, y: 511},
                to: {x: 456, y: 511},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 431, y: 529},
                to: {x: 469, y: 529},
                idle: false,
                distance: 6.999999999999991,
                speed: 107
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_short_to_b: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 674, y: 533},
                to: {x: 695, y: 533},
                idle: false,
                distance: 13.499999999999968,
                speed: 75
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 636, y: 525},
                to: {x: 648, y: 525},
                idle: false,
                distance: 8.699999999999985,
                speed: 86
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 787, y: 522},
                to: {x: 739, y: 522},
                idle: false,
                distance: 8.299999999999986,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 378, y: 517},
                to: {x: 427, y: 517},
                idle: false,
                distance: 4.300000000000001,
                speed: 174
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1267, y: 504},
                to: {x: 1219, y: 504},
                idle: false,
                distance: 2.6000000000000005,
                speed: 288
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1159, y: 432},
                to: {x: 1137, y: 432},
                idle: false,
                distance: 9.299999999999983,
                speed: 81
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1084, y: 438},
                to: {x: 1064, y: 438},
                idle: false,
                distance: 9.299999999999983,
                speed: 81
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_b_to_kitchen: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1431, y: 533},
                to: {x: 1467, y: 533},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1216, y: 518},
                to: {x: 1170, y: 518},
                idle: false,
                distance: 5.4999999999999964,
                speed: 136
            },
            {
                character: "ct_standup",
                come_from: "down",
                from: {x: 1071, y: 561},
                to: {x: 1071, y: 533},
                idle: false,
                distance: 9.89999999999998,
                speed: 76
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1013, y: 523},
                to: {x: 1033, y: 523},
                idle: false,
                distance: 5.599999999999996,
                speed: 134
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 747, y: 529},
                to: {x: 723, y: 529},
                idle: false,
                distance: 7.699999999999989,
                speed: 97
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 745, y: 529},
                to: {x: 695, y: 529},
                idle: false,
                distance: 5.699999999999996,
                speed: 132
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 570, y: 529},
                to: {x: 600, y: 529},
                idle: false,
                distance: 7.699999999999989,
                speed: 97
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_app_to_under: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1101, y: 514},
                to: {x: 1114, y: 514},
                idle: false,
                distance: 12.499999999999972,
                speed: 60
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1056, y: 529},
                to: {x: 1076, y: 529},
                idle: false,
                distance: 8.199999999999987,
                speed: 91
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 840, y: 790},
                to: {x: 898, y: 790},
                idle: false,
                distance: 7.099999999999991,
                speed: 125
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 840, y: 790},
                to: {x: 862, y: 790},
                idle: false,
                distance: 7.099999999999991,
                speed: 106
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_app_to_short: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1009, y: 693},
                to: {x: 987, y: 693},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 963, y: 663},
                to: {x: 947, y: 663},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 916, y: 593},
                to: {x: 898, y: 593},
                idle: false,
                distance: 11.199999999999976,
                speed: 67
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 776, y: 658},
                to: {x: 804, y: 658},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_app_to_b: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1389, y: 681},
                to: {x: 1421, y: 681},
                idle: false,
                distance: 4.899999999999999,
                speed: 153
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1063, y: 615},
                to: {x: 1027, y: 615},
                idle: false,
                distance: 7.19999999999999,
                speed: 104
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 889, y: 615},
                to: {x: 925, y: 615},
                idle: false,
                distance: 7.19999999999999,
                speed: 104
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 751, y: 649},
                to: {x: 784, y: 649},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 534, y: 642},
                to: {x: 501, y: 642},
                idle: false,
                distance: 4.5,
                speed: 167
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}