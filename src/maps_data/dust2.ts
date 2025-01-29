import { MapStruct, Target } from "@/types"

export const dust2: MapStruct = {
    ////////////////// CT CIRCUIT //////////////////

    ////////////////// TERRORIST CIRCUIT //////////////////
    tspawn_to_mid: {
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
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 942, y: 565},
                to: {x: 950, y: 565},
                idle: false,
                distance: 22.800000000000068,
                speed: 32
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 942, y: 553},
                to: {x: 950, y: 553},
                idle: false,
                distance: 23.800000000000068,
                speed: 32
            },
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 980, y: 569},
                to: {x: 970, y: 560},
                idle: false,
                distance: 15.389999999999926,
                speed: 33
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 960, y: 569},
                to: {x: 970, y: 560},
                idle: false,
                distance: 15.389999999999926,
                speed: 33
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 929, y: 569},
                to: {x: 929, y: 560},
                idle: false,
                distance: 15.389999999999926,
                speed: 33
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1025, y: 525},
                to: {x: 1007, y: 525},
                idle: false,
                distance: 7.799999999999988,
                speed: 96
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1026, y: 527},
                to: {x: 992, y: 527},
                idle: false,
                distance: 5.399999999999997,
                speed: 139
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1021, y: 524},
                to: {x: 1003, y: 524},
                idle: false,
                distance: 6.999999999999991,
                speed: 107
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 849, y: 525},
                to: {x: 869, y: 525},
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
    top_mid_to_short: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 773, y: 644},
                to: {x: 807, y: 644},
                idle: false,
                distance: 7.499999999999989,
                speed: 100
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 753, y: 615},
                to: {x: 788, y: 615},
                idle: false,
                distance: 4.5,
                speed: 120
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 753, y: 642},
                to: {x: 788, y: 608},
                idle: false,
                distance: 4.5,
                speed: 120
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 951, y: 561},
                to: {x: 910, y: 561},
                idle: false,
                distance: 11.299999999999976,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 951, y: 561},
                to: {x: 923, y: 561},
                idle: false,
                distance: 11.299999999999976,
                speed: 100
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 951, y: 561},
                to: {x: 933, y: 561},
                idle: false,
                distance: 11.299999999999976,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 951, y: 561},
                to: {x: 933, y: 561},
                idle: false,
                distance: 11.299999999999976,
                speed: 66
            },

        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tmid_to_ctmid: {
        targets: [
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 975, y: 584},
                to: {x: 975, y: 572},
                idle: false,
                distance: 10.799999999999978,
                speed: 46
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 902, y: 586},
                to: {x: 913, y: 586},
                idle: false,
                distance: 17.69999999999998,
                speed: 42
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 938, y: 597},
                to: {x: 923, y: 597},
                idle: false,
                distance: 14.799999999999963,
                speed: 51
            },
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 863, y: 644},
                to: {x: 842, y: 644},
                idle: false,
                distance: 7.39999999999999,
                speed: 75
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 863, y: 644},
                to: {x: 842, y: 644},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1135, y: 538},
                to: {x: 1112, y: 538},
                idle: false,
                distance: 7.39999999999999,
                speed: 75
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1135, y: 538},
                to: {x: 1112, y: 538},
                idle: false,
                distance: 7.39999999999999,
                speed: 101
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 782, y: 625},
                to: {x: 798, y: 625},
                idle: false,
                distance: 9.199999999999983,
                speed: 60
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 782, y: 625},
                to: {x: 798, y: 625},
                idle: false,
                distance: 9.199999999999983,
                speed: 82
            },

        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    short_to_lower: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 503, y: 711},
                to: {x: 465, y: 673},
                idle: false,
                distance: 3.100000000000001,
                speed: 242
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 887, y: 664},
                to: {x: 887, y: 610},
                idle: false,
                distance: 2.3000000000000003,
                speed: 217
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1431, y: 692},
                to: {x: 1403, y: 692},
                idle: false,
                distance: 4.6,
                speed: 163
            },
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 1077, y: 651},
                to: {x: 1054, y: 651},
                idle: false,
                distance: 5.1999999999999975,
                speed: 100
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1077, y: 651},
                to: {x: 1054, y: 651},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 906, y: 583},
                to: {x: 920, y: 583},
                idle: false,
                distance: 9.199999999999983,
                speed: 60
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 906, y: 583},
                to: {x: 930, y: 583},
                idle: false,
                distance: 9.199999999999983,
                speed: 82
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 906, y: 583},
                to: {x: 923, y: 583},
                idle: false,
                distance: 9.199999999999983,
                speed: 82
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 901, y: 610},
                to: {x: 924, y: 610},
                idle: false,
                distance: 7.39999999999999,
                speed: 75
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 901, y: 610},
                to: {x: 924, y: 610},
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
    short_to_a_1: {
        targets: [
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 905, y: 458},
                to: {x: 885, y: 458},
                idle: false,
                distance: 6.299999999999994,
                speed: 79
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 707, y: 503},
                to: {x: 730, y: 503},
                idle: false,
                distance: 7.19999999999999,
                speed: 104
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 689, y: 466},
                to: {x: 722, y: 466},
                idle: false,
                distance: 5.099999999999998,
                speed: 147
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 834, y: 529},
                to: {x: 805, y: 529},
                idle: false,
                distance: 8.299999999999986,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 834, y: 529},
                to: {x: 819, y: 529},
                idle: false,
                distance: 8.299999999999986,
                speed: 90
            },

        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    short_to_a_2: {
        targets: [
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 470, y: 617},
                to: {x: 470, y: 569},
                idle: false,
                distance: 3.100000000000001,
                speed: 200
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1161, y: 711},
                to: {x: 1182, y: 688},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1041, y: 696},
                to: {x: 1041, y: 671},
                idle: false,
                distance: 5.799999999999995,
                speed: 129
            },
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 1277, y: 635},
                to: {x: 1260, y: 635},
                idle: false,
                distance: 9.099999999999984,
                speed: 62
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1277, y: 635},
                to: {x: 1260, y: 635},
                idle: false,
                distance: 9.099999999999984,
                speed: 82
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 1247, y: 621},
                to: {x: 1247, y: 608},
                idle: false,
                distance: 14.499999999999964,
                speed: 60
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 600, y: 530},
                to: {x: 625, y: 530},
                idle: false,
                distance: 9,
                speed: 100
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 600, y: 530},
                to: {x: 615, y: 530},
                idle: false,
                distance: 9,
                speed: 60
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 600, y: 530},
                to: {x: 615, y: 530},
                idle: false,
                distance: 9,
                speed: 88
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 805, y: 548},
                to: {x: 930, y: 548},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 805, y: 548},
                to: {x: 775, y: 548},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 805, y: 548},
                to: {x: 785, y: 548},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 805, y: 548},
                to: {x: 795, y: 548},
                idle: false,
                distance: 8.399999999999986,
                speed: 89
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 1034, y: 613},
                to: {x: 1050, y: 613},
                idle: false,
                distance: 9.799999999999981,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1034, y: 613},
                to: {x: 1050, y: 613},
                idle: false,
                distance: 9.799999999999981,
                speed: 77
            },

        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}