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
    tside_b_site: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1558, y: 570},
                to: {x: 1515, y: 570},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1482, y: 572},
                to: {x: 1464, y: 572},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1298, y: 572},
                to: {x: 1326, y: 572},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 888, y: 580},
                to: {x: 868, y: 580},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 782, y: 580},
                to: {x: 818, y: 580},
                idle: false,
                distance: 9.799999999999981,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 782, y: 580},
                to: {x: 804, y: 580},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1098, y: 550},
                to: {x: 1140, y: 550},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 892, y: 550},
                to: {x: 840, y: 550},
                idle: false,
                distance: 3.6000000000000014,
                speed: 208
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 638, y: 550},
                to: {x: 696, y: 550},
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
    tside_b_to_long: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 996, y: 590},
                to: {x: 1044, y: 590},
                idle: false,
                distance: 8.999999999999984,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 992, y: 590},
                to: {x: 1014, y: 590},
                idle: false,
                distance: 9.199999999999983,
                speed: 82
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 938, y: 572},
                to: {x: 948, y: 572},
                idle: false,
                distance: 16.599999999999966,
                speed: 45
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 840, y: 552},
                to: {x: 882, y: 552},
                idle: false,
                distance: 4.799999999999999,
                speed: 156
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_heaven_to_redroom: {
        targets: [

            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1088, y: 646},
                to: {x: 1028, y: 646},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1074, y: 530},
                to: {x: 1035, y: 530},
                idle: false,
                distance: 11.199999999999976,
                speed: 120
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1074, y: 530},
                to: {x: 1058, y: 530},
                idle: false,
                distance: 11.199999999999976,
                speed: 67
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 612, y: 588},
                to: {x: 640, y: 588},
                idle: false,
                distance: 7.799999999999988,
                speed: 96
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_b_cave: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 762, y: 580},
                to: {x: 862, y: 580},
                idle: false,
                distance: 4.200000000000001,
                speed: 240
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1008, y: 592},
                to: {x: 980, y: 592},
                idle: false,
                distance: 4.4,
                speed: 170
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1012, y: 574},
                to: {x: 958, y: 574},
                idle: false,
                distance: 6.399999999999993,
                speed: 130
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1012, y: 574},
                to: {x: 986, y: 574},
                idle: false,
                distance: 6.399999999999993,
                speed: 117
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 778, y: 574},
                to: {x: 816, y: 574},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 752, y: 582},
                to: {x: 800, y: 582},
                idle: false,
                distance: 3.8000000000000016,
                speed: 197
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_cave_to_b: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1054, y: 572},
                to: {x: 1014, y: 572},
                idle: false,
                distance: 6.999999999999991,
                speed: 120
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1060, y: 578},
                to: {x: 1024, y: 578},
                idle: false,
                distance: 5.999999999999995,
                speed: 125
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1184, y: 580},
                to: {x: 1114, y: 580},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 732, y: 578},
                to: {x: 838, y: 578},
                idle: false,
                distance: 3.4000000000000012,
                speed: 240
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 732, y: 578},
                to: {x: 788, y: 578},
                idle: false,
                distance: 3.4000000000000012,
                speed: 221
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 776, y: 574},
                to: {x: 836, y: 574},
                idle: false,
                distance: 7.599999999999989,
                speed: 160
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 776, y: 574},
                to: {x: 808, y: 574},
                idle: false,
                distance: 7.599999999999989,
                speed: 99
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_mid_to_heaven: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 1072, y: 492},
                to: {x: 1072, y: 480},
                idle: false,
                distance: 11.999999999999973,
                speed: 63
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 1096, y: 492},
                to: {x: 1096, y: 472},
                idle: false,
                distance: 11.999999999999973,
                speed: 63
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1036, y: 462},
                to: {x: 1066, y: 462},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 500, y: 522},
                to: {x: 570, y: 522},
                idle: false,
                distance: 5.1999999999999975,
                speed: 180
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 488, y: 522},
                to: {x: 542, y: 522},
                idle: false,
                distance: 4.000000000000002,
                speed: 187
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 618, y: 520},
                to: {x: 578, y: 520},
                idle: false,
                distance: 7.39999999999999,
                speed: 140
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 622, y: 520},
                to: {x: 600, y: 520},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_mid_to_redroom: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1348, y: 534},
                to: {x: 1318, y: 534},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 946, y: 534},
                to: {x: 946, y: 520},
                idle: false,
                distance: 13.399999999999968,
                speed: 56
            },
            {
                character: "ct_standup_darken",
                come_from: "down",
                from: {x: 922, y: 534},
                to: {x: 922, y: 522},
                idle: false,
                distance: 13.399999999999968,
                speed: 56
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 882, y: 490},
                to: {x: 902, y: 490},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 996, y: 490},
                to: {x: 976, y: 490},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 550, y: 544},
                to: {x: 588, y: 544},
                idle: false,
                distance: 5.1999999999999975,
                speed: 96
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 534, y: 532},
                to: {x: 596, y: 532},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_redroom: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1044, y: 574},
                to: {x: 1010, y: 574},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 872, y: 554},
                to: {x: 886, y: 554},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 912, y: 534},
                to: {x: 894, y: 534},
                idle: false,
                distance: 10.999999999999977,
                speed: 68
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 964, y: 540},
                to: {x: 952, y: 540},
                idle: false,
                distance: 14.799999999999963,
                speed: 51
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 472, y: 576},
                to: {x: 550, y: 576},
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
    tside_mid_to_donut: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1238, y: 520},
                to: {x: 1146, y: 520},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1238, y: 520},
                to: {x: 1204, y: 520},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1060, y: 548},
                to: {x: 1130, y: 548},
                idle: false,
                distance: 4.999999999999998,
                speed: 200
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1060, y: 548},
                to: {x: 1098, y: 548},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 792, y: 548},
                to: {x: 760, y: 548},
                idle: false,
                distance: 4.999999999999998,
                speed: 150
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 600, y: 540},
                to: {x: 700, y: 540},
                idle: false,
                distance: 3.200000000000001,
                speed: 280
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 600, y: 540},
                to: {x: 646, y: 540},
                idle: false,
                distance: 3.200000000000001,
                speed: 234
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_donut_to_a: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1256, y: 598},
                to: {x: 1228, y: 598},
                idle: false,
                distance: 7.2,
                speed: 114
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1248, y: 606},
                to: {x: 1212, y: 606},
                idle: false,
                distance: 4.000000000000002,
                speed: 187
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1078, y: 618},
                to: {x: 1048, y: 618},
                idle: false,
                distance: 5.799999999999995,
                speed: 86
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1076, y: 618},
                to: {x: 1050, y: 618},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 606, y: 626},
                to: {x: 650, y: 626},
                idle: false,
                distance: 4.000000000000002,
                speed: 187
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 740, y: 614},
                to: {x: 718, y: 614},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 634, y: 614},
                to: {x: 670, y: 614},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}