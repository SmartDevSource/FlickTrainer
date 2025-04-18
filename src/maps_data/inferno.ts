import { MapStruct, Target } from "@/types"

export const inferno: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////
    long_to_mid: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 759, y: 538},
                to: {x: 776, y: 538},
                idle: false,
                distance: 9.89999999999998,
                speed: 76
            },
            {
                character: "terrorist_crouch_darken",
                come_from: "left",
                from: {x: 754, y: 538},
                to: {x: 775, y: 538},
                idle: false,
                distance: 8.899999999999984,
                speed: 56
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 756, y: 538},
                to: {x: 778, y: 538},
                idle: false,
                distance: 8.899999999999984,
                speed: 84
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 950, y: 545},
                to: {x: 920, y: 545},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 950, y: 545},
                to: {x: 937, y: 545},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1030, y: 563},
                to: {x: 985, y: 563},
                idle: false,
                distance: 6.299999999999994,
                speed: 130
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1030, y: 563},
                to: {x: 1009, y: 563},
                idle: false,
                distance: 6.299999999999994,
                speed: 119
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    mid_to_ramp: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 1011, y: 565},
                to: {x: 1011, y: 556},
                idle: false,
                distance: 18.699999999999996,
                speed: 40
            },
            {
                character: "terrorist_crouch_darken",
                come_from: "down",
                from: {x: 984, y: 570},
                to: {x: 984, y: 561},
                idle: false,
                distance: 10.999999999999977,
                speed: 70
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1129, y: 530},
                to: {x: 1093, y: 530},
                idle: false,
                distance: 4.899999999999999,
                speed: 153
            },
            {
                character: "terrorist_crouch",
                come_from: "left",
                from: {x: 771, y: 526},
                to: {x: 814, y: 526},
                idle: false,
                distance: 4.3,
                speed: 120
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 771, y: 526},
                to: {x: 814, y: 526},
                idle: false,
                distance: 3.9,
                speed: 192
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    top_mid_to_second_mid: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 999, y: 573},
                to: {x: 973, y: 573},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
            {
                character: "terrorist_crouch_darken",
                come_from: "left",
                from: {x: 808, y: 560},
                to: {x: 838, y: 560},
                idle: false,
                distance: 6.399999999999993,
                speed: 78
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 801, y: 560},
                to: {x: 858, y: 560},
                idle: false,
                distance: 6.399999999999993,
                speed: 117
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 801, y: 560},
                to: {x: 837, y: 560},
                idle: false,
                distance: 6.399999999999993,
                speed: 117
            },
            {
                character: "terrorist_crouch",
                come_from: "right",
                from: {x: 1006, y: 574},
                to: {x: 990, y: 574},
                idle: false,
                distance: 8.999999999999984,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1006, y: 574},
                to: {x: 950, y: 574},
                idle: false,
                distance: 8.999999999999984,
                speed: 110
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1006, y: 574},
                to: {x: 975, y: 574},
                idle: false,
                distance: 8.999999999999984,
                speed: 100
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1006, y: 574},
                to: {x: 990, y: 574},
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
    low_mid_to_banana: {
        targets: [
            {
                character: "terrorist_crouch_darken",
                come_from: "down",
                from: {x: 678, y: 588},
                to: {x: 730, y: 538},
                idle: false,
                distance: 3.5000000000000013,
                speed: 110
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1129, y: 524},
                to: {x: 1090, y: 524},
                idle: false,
                distance: 7.39999999999999,
                speed: 110
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1129, y: 524},
                to: {x: 1111, y: 524},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 993, y: 525},
                to: {x: 1033, y: 525},
                idle: false,
                distance: 7.999999999999988,
                speed: 110
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 993, y: 525},
                to: {x: 1015, y: 525},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
            {
                character: "terrorist_standup_darken",
                come_from: "down",
                from: {x: 664, y: 574},
                to: {x: 724, y: 516},
                idle: false,
                distance: 3.000000000000001,
                speed: 170
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    pit_to_short: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1155, y: 518},
                to: {x: 1069, y: 518},
                idle: false,
                distance: 3.200000000000001,
                speed: 234
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1155, y: 518},
                to: {x: 1126, y: 518},
                idle: false,
                distance: 3.200000000000001,
                speed: 234
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1046, y: 551},
                to: {x: 1025, y: 551},
                idle: false,
                distance: 11.099999999999977,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1046, y: 551},
                to: {x: 1036, y: 551},
                idle: false,
                distance: 11.099999999999977,
                speed: 68
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 899, y: 540},
                to: {x: 943, y: 540},
                idle: false,
                distance: 6.999999999999991,
                speed: 120
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 899, y: 540},
                to: {x: 924, y: 540},
                idle: false,
                distance: 6.999999999999991,
                speed: 107
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 649, y: 391},
                to: {x: 700, y: 391},
                idle: false,
                distance: 6.999999999999991,
                speed: 125
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 649, y: 391},
                to: {x: 679, y: 391},
                idle: false,
                distance: 6.999999999999991,
                speed: 115
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    short_to_mid: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1093, y: 535},
                to: {x: 1030, y: 535},
                idle: false,
                distance: 5.599999999999996,
                speed: 150
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1093, y: 535},
                to: {x: 1063, y: 535},
                idle: false,
                distance: 5.599999999999996,
                speed: 134
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1079, y: 508},
                to: {x: 1039, y: 508},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 923, y: 529},
                to: {x: 972, y: 529},
                idle: false,
                distance: 5.959999999999987,
                speed: 145
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 923, y: 529},
                to: {x: 951, y: 529},
                idle: false,
                distance: 5.959999999999987,
                speed: 126
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 786, y: 517},
                to: {x: 863, y: 517},
                idle: false,
                distance: 4.300000000000001,
                speed: 190
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 792, y: 516},
                to: {x: 828, y: 516},
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
    app_to_second_mid: {
        targets: [
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1001, y: 731},
                to: {x: 968, y: 731},
                idle: false,
                distance: 4.4,
                speed: 170
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 928, y: 592},
                to: {x: 914, y: 592},
                idle: false,
                distance: 14.099999999999966,
                speed: 53
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 976, y: 530},
                to: {x: 956, y: 530},
                idle: false,
                distance: 8.799999999999985,
                speed: 85
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 934, y: 518},
                to: {x: 897, y: 518},
                idle: false,
                distance: 11.299999999999976,
                speed: 90
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 934, y: 518},
                to: {x: 914, y: 518},
                idle: false,
                distance: 11.299999999999976,
                speed: 66
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 789, y: 518},
                to: {x: 818, y: 518},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 789, y: 518},
                to: {x: 804, y: 518},
                idle: false,
                distance: 11.599999999999975,
                speed: 65
            },
            {
                character: "terrorist_standup",
                come_from: "down",
                from: {x: 728, y: 784},
                to: {x: 728, y: 745},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 610, y: 637},
                to: {x: 637, y: 637},
                idle: false,
                distance: 6.399999999999993,
                speed: 117
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    antiboiler_to_second_mid: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1075, y: 601},
                to: {x: 971, y: 601},
                idle: false,
                distance: 2.6000000000000005,
                speed: 288
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1075, y: 601},
                to: {x: 1033, y: 601},
                idle: false,
                distance: 2.6000000000000005,
                speed: 288
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 752, y: 619},
                to: {x: 859, y: 619},
                idle: false,
                distance: 2.5000000000000004,
                speed: 300
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 752, y: 619},
                to: {x: 821, y: 619},
                idle: false,
                distance: 2.5000000000000004,
                speed: 300
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 991, y: 543},
                to: {x: 936, y: 543},
                idle: false,
                distance: 7.39999999999999,
                speed: 120
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 991, y: 543},
                to: {x: 963, y: 543},
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
    ctspawn_to_b: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1083, y: 526},
                to: {x: 1025, y: 526},
                idle: false,
                distance: 5.399999999999997,
                speed: 140
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1083, y: 526},
                to: {x: 1053, y: 526},
                idle: false,
                distance: 5.399999999999997,
                speed: 139
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 981, y: 525},
                to: {x: 1001, y: 525},
                idle: false,
                distance: 10.599999999999978,
                speed: 71
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 921, y: 525},
                to: {x: 909, y: 525},
                idle: false,
                distance: 10.599999999999978,
                speed: 71
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 832, y: 517},
                to: {x: 873, y: 517},
                idle: false,
                distance: 8.199999999999987,
                speed: 110
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 832, y: 517},
                to: {x: 851, y: 517},
                idle: false,
                distance: 8.199999999999987,
                speed: 91
            },
            {
                character: "terrorist_crouch",
                come_from: "left",
                from: {x: 725, y: 523},
                to: {x: 761, y: 523},
                idle: false,
                distance: 5.099999999999998,
                speed: 98
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 723, y: 523},
                to: {x: 761, y: 523},
                idle: false,
                distance: 4.5,
                speed: 167
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    car_to_banana: {
        targets: [
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 949, y: 523},
                to: {x: 925, y: 523},
                idle: false,
                distance: 11.199999999999976,
                speed: 90
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 949, y: 523},
                to: {x: 940, y: 523},
                idle: false,
                distance: 11.199999999999976,
                speed: 67
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1064, y: 519},
                to: {x: 1018, y: 519},
                idle: false,
                distance: 7.29999999999999,
                speed: 110
            },
            {
                character: "terrorist_standup_darken",
                come_from: "right",
                from: {x: 1064, y: 519},
                to: {x: 1043, y: 519},
                idle: false,
                distance: 7.29999999999999,
                speed: 103
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 868, y: 519},
                to: {x: 910, y: 519},
                idle: false,
                distance: 7.29999999999999,
                speed: 103
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 868, y: 519},
                to: {x: 890, y: 519},
                idle: false,
                distance: 7.29999999999999,
                speed: 103
            },
            {
                character: "terrorist_standup_darken",
                come_from: "left",
                from: {x: 640, y: 499},
                to: {x: 694, y: 499},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },

        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ////////////////// TERRORIST CIRCUIT //////////////////
    tramp_to_mid: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1103, y: 551},
                to: {x: 1050, y: 551},
                idle: false,
                distance: 6.5999999999999925,
                speed: 140
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1103, y: 551},
                to: {x: 1072, y: 551},
                idle: false,
                distance: 6.5999999999999925,
                speed: 70
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1103, y: 551},
                to: {x: 1065, y: 551},
                idle: false,
                distance: 6.5999999999999925,
                speed: 120
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1103, y: 551},
                to: {x: 1078, y: 551},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1008, y: 556},
                to: {x: 995, y: 556},
                idle: false,
                distance: 12.69999999999997,
                speed: 60
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1008, y: 556},
                to: {x: 980, y: 556},
                idle: false,
                distance: 12.69999999999997,
                speed: 80
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1008, y: 556},
                to: {x: 992, y: 556},
                idle: false,
                distance: 12.69999999999997,
                speed: 65
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 897, y: 554},
                to: {x: 910, y: 554},
                idle: false,
                distance: 12.199999999999973,
                speed: 60
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 897, y: 554},
                to: {x: 930, y: 554},
                idle: false,
                distance: 12.199999999999973,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 897, y: 554},
                to: {x: 920, y: 554},
                idle: false,
                distance: 12.199999999999973,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 897, y: 554},
                to: {x: 912, y: 554},
                idle: false,
                distance: 12.199999999999973,
                speed: 70
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    mid_to_second_mid: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 257, y: 524},
                to: {x: 359, y: 524},
                idle: false,
                distance: 4.6,
                speed: 220
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1432, y: 582},
                to: {x: 1396, y: 582},
                idle: false,
                distance: 5.599999999999996,
                speed: 134
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1432, y: 582},
                to: {x: 1409, y: 582},
                idle: false,
                distance: 5.599999999999996,
                speed: 134
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1361, y: 574},
                to: {x: 1344, y: 574},
                idle: false,
                distance: 10.899999999999977,
                speed: 69
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1278, y: 571},
                to: {x: 1297, y: 571},
                idle: false,
                distance: 11.999999999999973,
                speed: 63
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1156, y: 422},
                to: {x: 1178, y: 422},
                idle: false,
                distance: 7.599999999999989,
                speed: 99
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1110, y: 417},
                to: {x: 1134, y: 417},
                idle: false,
                distance: 7.599999999999989,
                speed: 99
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 515, y: 524},
                to: {x: 491, y: 524},
                idle: false,
                distance: 5.299999999999997,
                speed: 95
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 515, y: 524},
                to: {x: 476, y: 524},
                idle: false,
                distance: 5.299999999999997,
                speed: 142
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 515, y: 524},
                to: {x: 495, y: 524},
                idle: false,
                distance: 5.299999999999997,
                speed: 142
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    top_mid_to_long: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 858, y: 527},
                to: {x: 940, y: 527},
                idle: false,
                distance: 3.100000000000001,
                speed: 242
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 858, y: 527},
                to: {x: 899, y: 527},
                idle: false,
                distance: 3.100000000000001,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 858, y: 527},
                to: {x: 899, y: 527},
                idle: false,
                distance: 3.100000000000001,
                speed: 242
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 897, y: 531},
                to: {x: 951, y: 531},
                idle: false,
                distance: 6.499999999999993,
                speed: 130
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 897, y: 531},
                to: {x: 932, y: 531},
                idle: false,
                distance: 6.499999999999993,
                speed: 115
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 897, y: 531},
                to: {x: 918, y: 531},
                idle: false,
                distance: 6.499999999999993,
                speed: 115
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1042, y: 545},
                to: {x: 1020, y: 545},
                idle: false,
                distance: 5.8,
                speed: 80
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1042, y: 545},
                to: {x: 1005, y: 545},
                idle: false,
                distance: 5.8,
                speed: 130
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1042, y: 545},
                to: {x: 990, y: 545},
                idle: false,
                distance: 5.8,
                speed: 150
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1042, y: 545},
                to: {x: 1018, y: 545},
                idle: false,
                distance: 5.8,
                speed: 110
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    long_to_library: {
        targets: [
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 1113, y: 560},
                to: {x: 1098, y: 560},
                idle: false,
                distance: 8.899999999999984,
                speed: 64
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1113, y: 560},
                to: {x: 1085, y: 560},
                idle: false,
                distance: 8.899999999999984,
                speed: 94
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1113, y: 560},
                to: {x: 1098, y: 560},
                idle: false,
                distance: 8.899999999999984,
                speed: 84
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 981, y: 560},
                to: {x: 1016, y: 560},
                idle: false,
                distance: 10.499999999999979,
                speed: 90
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 981, y: 560},
                to: {x: 999, y: 560},
                idle: false,
                distance: 10.499999999999979,
                speed: 71
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 594, y: 529},
                to: {x: 634, y: 529},
                idle: false,
                distance: 3.6000000000000014,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 592, y: 529},
                to: {x: 638, y: 529},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    long_to_a: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1073, y: 567},
                to: {x: 1090, y: 567},
                idle: false,
                distance: 10,
                speed: 68
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1053, y: 491},
                to: {x: 1027, y: 491},
                idle: false,
                distance: 11,
                speed: 85
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1053, y: 491},
                to: {x: 1039, y: 491},
                idle: false,
                distance: 11,
                speed: 60
            },
            {
                character: "ct_crouch",
                come_from: "down",
                from: {x: 928, y: 580},
                to: {x: 928, y: 573},
                idle: false,
                distance: 12.599999999999971,
                speed: 40
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 748, y: 583},
                to: {x: 780, y: 583},
                idle: false,
                distance: 11.299999999999976,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 748, y: 583},
                to: {x: 765, y: 583},
                idle: false,
                distance: 11.299999999999976,
                speed: 66
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 597, y: 475},
                to: {x: 630, y: 475},
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
    top_mid_to_short: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 999, y: 536},
                to: {x: 945, y: 536},
                idle: false,
                distance: 2.6000000000000005,
                speed: 288
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 999, y: 536},
                to: {x: 962, y: 536},
                idle: false,
                distance: 2.6000000000000005,
                speed: 288
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1010, y: 549},
                to: {x: 973, y: 549},
                idle: false,
                distance: 5.799999999999995,
                speed: 140
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1010, y: 549},
                to: {x: 989, y: 549},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 917, y: 546},
                to: {x: 939, y: 546},
                idle: false,
                distance: 5.899999999999995,
                speed: 90
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 917, y: 546},
                to: {x: 939, y: 546},
                idle: false,
                distance: 5.899999999999995,
                speed: 127
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 819, y: 544},
                to: {x: 895, y: 544},
                idle: false,
                distance: 5.699999999999996,
                speed: 160
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 819, y: 544},
                to: {x: 875, y: 544},
                idle: false,
                distance: 5.699999999999996,
                speed: 160
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 807, y: 546},
                to: {x: 874, y: 546},
                idle: false,
                distance: 4.999999999999998,
                speed: 170
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 807, y: 546},
                to: {x: 853, y: 546},
                idle: false,
                distance: 4.999999999999998,
                speed: 160
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 807, y: 546},
                to: {x: 837, y: 546},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    short_to_pit: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 848, y: 604},
                to: {x: 819, y: 604},
                idle: false,
                distance: 6.099999999999994,
                speed: 123
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 842, y: 609},
                to: {x: 824, y: 609},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 639, y: 604},
                to: {x: 710, y: 604},
                idle: false,
                distance: 5.099999999999998,
                speed: 175
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 639, y: 604},
                to: {x: 675, y: 604},
                idle: false,
                distance: 5.099999999999998,
                speed: 147
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 485, y: 607},
                to: {x: 411, y: 607},
                idle: false,
                distance: 4.6,
                speed: 190
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 485, y: 607},
                to: {x: 449, y: 607},
                idle: false,
                distance: 4.6,
                speed: 163
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1325, y: 248},
                to: {x: 1263, y: 248},
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
    second_mid_bridge: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1037, y: 619},
                to: {x: 1009, y: 619},
                idle: false,
                distance: 10.599999999999978,
                speed: 80
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1037, y: 619},
                to: {x: 1020, y: 619},
                idle: false,
                distance: 10.599999999999978,
                speed: 71
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 809, y: 626},
                to: {x: 842, y: 626},
                idle: false,
                distance: 9.699999999999982,
                speed: 95
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 809, y: 626},
                to: {x: 829, y: 626},
                idle: false,
                distance: 9.699999999999982,
                speed: 77
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 977, y: 536},
                to: {x: 1005, y: 536},
                idle: false,
                distance: 13.799999999999967,
                speed: 80
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 980, y: 536},
                to: {x: 990, y: 536},
                idle: false,
                distance: 13.799999999999967,
                speed: 70
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 961, y: 536},
                to: {x: 947, y: 536},
                idle: false,
                distance: 13.799999999999967,
                speed: 70
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 901, y: 536},
                to: {x: 917, y: 536},
                idle: false,
                distance: 13.799999999999967,
                speed: 70
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 841, y: 533},
                to: {x: 855, y: 533},
                idle: false,
                distance: 13.799999999999967,
                speed: 70
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 882, y: 533},
                to: {x: 871, y: 533},
                idle: false,
                distance: 13.799999999999967,
                speed: 70
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    app_to_boiler: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1313, y: 399},
                to: {x: 1193, y: 399},
                idle: false,
                distance: 1.7999999999999998,
                speed: 417
            },
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 1286, y: 399},
                to: {x: 1228, y: 399},
                idle: false,
                distance: 1.7999999999999998,
                speed: 278
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1303, y: 390},
                to: {x: 1244, y: 390},
                idle: false,
                distance: 1.7999999999999998,
                speed: 417
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 657, y: 474},
                to: {x: 730, y: 474},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 657, y: 473},
                to: {x: 692, y: 473},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 857, y: 600},
                to: {x: 857, y: 581},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 792, y: 599},
                to: {x: 792, y: 579},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 828, y: 601},
                to: {x: 828, y: 586},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    balcony_to_pit: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 525, y: 708},
                to: {x: 594, y: 708},
                idle: false,
                distance: 2.5000000000000004,
                speed: 300
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1294, y: 684},
                to: {x: 1246, y: 684},
                idle: false,
                distance: 5.299999999999997,
                speed: 142
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1294, y: 684},
                to: {x: 1268, y: 684},
                idle: false,
                distance: 5.299999999999997,
                speed: 142
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1179, y: 657},
                to: {x: 1207, y: 657},
                idle: false,
                distance: 6.099999999999994,
                speed: 123
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1027, y: 647},
                to: {x: 1001, y: 647},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "ct_standup",
                come_from: "down",
                from: {x: 757, y: 730},
                to: {x: 757, y: 701},
                idle: false,
                distance: 4.7,
                speed: 150
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 577, y: 632},
                to: {x: 616, y: 632},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 583, y: 515},
                to: {x: 606, y: 515},
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
    pit_to_a: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1172, y: 539},
                to: {x: 1148, y: 539},
                idle: false,
                distance: 11.899999999999974,
                speed: 90
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1175, y: 536},
                to: {x: 1161, y: 536},
                idle: false,
                distance: 11.899999999999974,
                speed: 63
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1014, y: 543},
                to: {x: 1045, y: 543},
                idle: false,
                distance: 12.199999999999973,
                speed: 90
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1014, y: 543},
                to: {x: 1032, y: 543},
                idle: false,
                distance: 12.199999999999973,
                speed: 61
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 884, y: 530},
                to: {x: 917, y: 530},
                idle: false,
                distance: 9.299999999999983,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 876, y: 515},
                to: {x: 906, y: 515},
                idle: false,
                distance: 7.19999999999999,
                speed: 104
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 779, y: 500},
                to: {x: 717, y: 500},
                idle: false,
                distance: 6,
                speed: 140
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 779, y: 500},
                to: {x: 735, y: 500},
                idle: false,
                distance: 6,
                speed: 140
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 779, y: 500},
                to: {x: 752, y: 500},
                idle: false,
                distance: 6,
                speed: 121
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 526, y: 518},
                to: {x: 580, y: 518},
                idle: false,
                distance: 4.6,
                speed: 163
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 526, y: 518},
                to: {x: 565, y: 518},
                idle: false,
                distance: 4.6,
                speed: 163
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    banana_to_car: {
        targets: [
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 1029, y: 453},
                to: {x: 1008, y: 453},
                idle: false,
                distance: 8.2,
                speed: 64
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 999, y: 531},
                to: {x: 973, y: 531},
                idle: false,
                distance: 7.699999999999989,
                speed: 97
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 999, y: 531},
                to: {x: 982, y: 531},
                idle: false,
                distance: 7.699999999999989,
                speed: 97
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 949, y: 538},
                to: {x: 923, y: 538},
                idle: false,
                distance: 9.699999999999982,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 949, y: 538},
                to: {x: 933, y: 538},
                idle: false,
                distance: 9.699999999999982,
                speed: 80
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1213, y: 510},
                to: {x: 1053, y: 510},
                idle: false,
                distance: 1.9,
                speed: 410
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1213, y: 510},
                to: {x: 1123, y: 510},
                idle: false,
                distance: 1.9,
                speed: 395
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 483, y: 510},
                to: {x: 544, y: 510},
                idle: false,
                distance: 2.2,
                speed: 341
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    top_banana_to_sandbag: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1119, y: 539},
                to: {x: 1053, y: 539},
                idle: false,
                distance: 4.200000000000001,
                speed: 179
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1119, y: 539},
                to: {x: 1081, y: 539},
                idle: false,
                distance: 4.200000000000001,
                speed: 179
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1209, y: 485},
                to: {x: 1142, y: 485},
                idle: false,
                distance: 1.5999999999999996,
                speed: 469
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 739, y: 552},
                to: {x: 781, y: 552},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 729, y: 545},
                to: {x: 794, y: 545},
                idle: false,
                distance: 4.799999999999999,
                speed: 156
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 729, y: 545},
                to: {x: 763, y: 545},
                idle: false,
                distance: 4.799999999999999,
                speed: 156
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 405, y: 517},
                to: {x: 337, y: 517},
                idle: false,
                distance: 2.5000000000000004,
                speed: 300
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 579, y: 521},
                to: {x: 640, y: 521},
                idle: false,
                distance: 2.6000000000000005,
                speed: 288
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    banana_to_b: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1385, y: 525},
                to: {x: 1300, y: 525},
                idle: false,
                distance: 2.3000000000000003,
                speed: 326
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1385, y: 525},
                to: {x: 1327, y: 525},
                idle: false,
                distance: 2.3000000000000003,
                speed: 326
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 585, y: 526},
                to: {x: 655, y: 526},
                idle: false,
                distance: 8.399999999999986,
                speed: 110
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 585, y: 526},
                to: {x: 629, y: 526},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 516, y: 526},
                to: {x: 538, y: 526},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 705, y: 527},
                to: {x: 672, y: 527},
                idle: false,
                distance: 10.19999999999998,
                speed: 95
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 705, y: 527},
                to: {x: 690, y: 527},
                idle: false,
                distance: 10.19999999999998,
                speed: 74
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 944, y: 492},
                to: {x: 944, y: 476},
                idle: false,
                distance: 8.499999999999986,
                speed: 88
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 922, y: 493},
                to: {x: 922, y: 478},
                idle: false,
                distance: 8.499999999999986,
                speed: 88
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 921, y: 521},
                to: {x: 906, y: 521},
                idle: false,
                distance: 8.499999999999986,
                speed: 88
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    pool_to_triple: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1413, y: 447},
                to: {x: 1295, y: 447},
                idle: false,
                distance: 2.3000000000000003,
                speed: 326
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1408, y: 517},
                to: {x: 1365, y: 517},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1238, y: 520},
                to: {x: 1289, y: 520},
                idle: false,
                distance: 6.399999999999993,
                speed: 130
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1238, y: 520},
                to: {x: 1267, y: 520},
                idle: false,
                distance: 6.399999999999993,
                speed: 117
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1231, y: 520},
                to: {x: 1195, y: 520},
                idle: false,
                distance: 6.299999999999994,
                speed: 130
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1231, y: 520},
                to: {x: 1208, y: 520},
                idle: false,
                distance: 6.299999999999994,
                speed: 119
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 954, y: 523},
                to: {x: 995, y: 523},
                idle: false,
                distance: 6.799999999999992,
                speed: 130
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 954, y: 523},
                to: {x: 984, y: 523},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 855, y: 521},
                to: {x: 820, y: 521},
                idle: false,
                distance: 7.29999999999999,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 855, y: 521},
                to: {x: 838, y: 521},
                idle: false,
                distance: 7.29999999999999,
                speed: 103
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 584, y: 505},
                to: {x: 652, y: 505},
                idle: false,
                distance: 4.799999999999999,
                speed: 190
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 584, y: 505},
                to: {x: 615, y: 505},
                idle: false,
                distance: 4.799999999999999,
                speed: 156
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 385, y: 495},
                to: {x: 450, y: 495},
                idle: false,
                distance: 3.7,
                speed: 200
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 385, y: 495},
                to: {x: 424, y: 495},
                idle: false,
                distance: 3.7,
                speed: 187
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    triple_to_ct: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 485, y: 529},
                to: {x: 525, y: 529},
                idle: false,
                distance: 6.499999999999993,
                speed: 125
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 485, y: 529},
                to: {x: 512, y: 529},
                idle: false,
                distance: 6.499999999999993,
                speed: 115
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 612, y: 530},
                to: {x: 565, y: 530},
                idle: false,
                distance: 7.599999999999989,
                speed: 120
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 612, y: 530},
                to: {x: 589, y: 530},
                idle: false,
                distance: 7.599999999999989,
                speed: 99
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1305, y: 560},
                to: {x: 1275, y: 560},
                idle: false,
                distance: 12.499999999999972,
                speed: 90
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1305, y: 560},
                to: {x: 1294, y: 560},
                idle: false,
                distance: 12.499999999999972,
                speed: 60
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1186, y: 562},
                to: {x: 1220, y: 562},
                idle: false,
                distance: 9.599999999999982,
                speed: 95
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1186, y: 562},
                to: {x: 1204, y: 562},
                idle: false,
                distance: 9.599999999999982,
                speed: 78
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    dark_to_ct: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 798, y: 566},
                to: {x: 828, y: 566},
                idle: false,
                distance: 8.999999999999984,
                speed: 100
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 798, y: 566},
                to: {x: 814, y: 566},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1102, y: 569},
                to: {x: 1030, y: 569},
                idle: false,
                distance: 8.099999999999987,
                speed: 125
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1102, y: 569},
                to: {x: 1050, y: 569},
                idle: false,
                distance: 8.099999999999987,
                speed: 115
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1102, y: 569},
                to: {x: 1082, y: 569},
                idle: false,
                distance: 8.099999999999987,
                speed: 93
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 471, y: 531},
                to: {x: 588, y: 531},
                idle: false,
                distance: 2.5000000000000004,
                speed: 300
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 471, y: 531},
                to: {x: 530, y: 531},
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
}