import { MapStruct, Target } from "@/types"

export const inferno: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////

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
}