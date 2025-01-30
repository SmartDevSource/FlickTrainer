import { MapStruct, Target } from "@/types"

export const dust2: MapStruct = {
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
                come_from: "left",
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
    ctside_a_to_short: {
        targets: [
            {
                character: "terrorist_crouch",
                come_from: "left",
                from: {x: 701, y: 526},
                to: {x: 759, y: 526},
                idle: false,
                distance: 2.5000000000000004,
                speed: 150
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 734, y: 549},
                to: {x: 749, y: 549},
                idle: false,
                distance: 11,
                speed: 75
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 734, y: 549},
                to: {x: 765, y: 549},
                idle: false,
                distance: 11,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1265, y: 542},
                to: {x: 1220, y: 542},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "terrorist_crouch",
                come_from: "right",
                from: {x: 1265, y: 542},
                to: {x: 1239, y: 542},
                idle: false,
                distance: 5.1999999999999975,
                speed: 90
            },
            {
                character: "terrorist_standup",
                come_from: "right",
                from: {x: 1265, y: 542},
                to: {x: 1239, y: 542},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "terrorist_standup",
                come_from: "left",
                from: {x: 635, y: 527},
                to: {x: 665, y: 527},
                idle: false,
                distance: 3.9000000000000017,
                speed: 192
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
    ramp_a_to_long: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 999, y: 527},
                to: {x: 980, y: 527},
                idle: false,
                distance: 13.699999999999967,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 997, y: 531},
                to: {x: 983, y: 531},
                idle: false,
                distance: 10.699999999999978,
                speed: 70
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 935, y: 570},
                to: {x: 935, y: 563},
                idle: false,
                distance: 16.29999999999996,
                speed: 31
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 906, y: 569},
                to: {x: 906, y: 565},
                idle: false,
                distance: 16.29999999999996,
                speed: 31
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 870, y: 570},
                to: {x: 870, y: 564},
                idle: false,
                distance: 16.29999999999996,
                speed: 31
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 737, y: 532},
                to: {x: 753, y: 532},
                idle: false,
                distance: 9.699999999999982,
                speed: 77
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 737, y: 532},
                to: {x: 770, y: 532},
                idle: false,
                distance: 9.699999999999982,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 737, y: 532},
                to: {x: 753, y: 532},
                idle: false,
                distance: 9.699999999999982,
                speed: 100
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'ct_circuit'
    },
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
    doors_to_ctmid: {
        targets: [
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 522, y: 525},
                to: {x: 564, y: 525},
                idle: false,
                distance: 4.8,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 522, y: 525},
                to: {x: 564, y: 525},
                idle: false,
                distance: 4.8,
                speed: 167
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 485, y: 532},
                to: {x: 538, y: 532},
                idle: false,
                distance: 2.8000000000000007,
                speed: 140
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 485, y: 532},
                to: {x: 555, y: 532},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 485, y: 532},
                to: {x: 538, y: 532},
                idle: false,
                distance: 2.8000000000000007,
                speed: 268
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1358, y: 549},
                to: {x: 1275, y: 549},
                idle: false,
                distance: 3.9000000000000017,
                speed: 192
            },
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 1358, y: 549},
                to: {x: 1309, y: 549},
                idle: false,
                distance: 3.9000000000000017,
                speed: 120
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1358, y: 549},
                to: {x: 1309, y: 549},
                idle: false,
                distance: 3.9000000000000017,
                speed: 192
            },
            {
                character: "ct_crouch_darken",
                come_from: "right",
                from: {x: 1357, y: 533},
                to: {x: 1298, y: 533},
                idle: false,
                distance: 4.200000000000001,
                speed: 120
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1357, y: 533},
                to: {x: 1298, y: 533},
                idle: false,
                distance: 4.200000000000001,
                speed: 179
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1239, y: 528},
                to: {x: 1239, y: 499},
                idle: false,
                distance: 6.5999999999999925,
                speed: 114
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
    taxi_t_spawn: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 586, y: 551},
                to: {x: 615, y: 551},
                idle: false,
                distance: 10.19999999999998,
                speed: 74
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 586, y: 551},
                to: {x: 605, y: 551},
                idle: false,
                distance: 10.19999999999998,
                speed: 74
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 655, y: 545},
                to: {x: 630, y: 545},
                idle: false,
                distance: 8.999999999999984,
                speed: 60
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 655, y: 545},
                to: {x: 630, y: 545},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 655, y: 545},
                to: {x: 642, y: 545},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 655, y: 545},
                to: {x: 642, y: 545},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1248, y: 556},
                to: {x: 1230, y: 556},
                idle: false,
                distance: 9.399999999999983,
                speed: 80
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tspawn_to_long: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1042, y: 544},
                to: {x: 1000, y: 544},
                idle: false,
                distance: 7.19999999999999,
                speed: 140
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 572, y: 502},
                to: {x: 677, y: 502},
                idle: false,
                distance: 1.5999999999999996,
                speed: 350
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1037, y: 540},
                to: {x: 1001, y: 540},
                idle: false,
                distance: 4.200000000000001,
                speed: 150
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1042, y: 544},
                to: {x: 1022, y: 544},
                idle: false,
                distance: 7.19999999999999,
                speed: 104
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 896, y: 548},
                to: {x: 922, y: 548},
                idle: false,
                distance: 9.699999999999982,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 896, y: 548},
                to: {x: 927, y: 548},
                idle: false,
                distance: 9.699999999999982,
                speed: 97
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 896, y: 548},
                to: {x: 914, y: 548},
                idle: false,
                distance: 9.699999999999982,
                speed: 47
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 896, y: 548},
                to: {x: 914, y: 548},
                idle: false,
                distance: 9.699999999999982,
                speed: 77
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 902, y: 544},
                to: {x: 915, y: 544},
                idle: false,
                distance: 11.099999999999977,
                speed: 40
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 902, y: 544},
                to: {x: 915, y: 544},
                idle: false,
                distance: 11.099999999999977,
                speed: 68
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
                from: {x: 853, y: 500},
                to: {x: 865, y: 500},
                idle: false,
                distance: 15.99999999999996,
                speed: 60
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 847, y: 550},
                to: {x: 864, y: 550},
                idle: false,
                distance: 11.399999999999975,
                speed: 66
            },
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 1158, y: 555},
                to: {x: 1158, y: 543},
                idle: false,
                distance: 10.399999999999979,
                speed: 48
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1143, y: 552},
                to: {x: 1123, y: 552},
                idle: false,
                distance: 9.399999999999983,
                speed: 53
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1240, y: 551},
                to: {x: 1221, y: 551},
                idle: false,
                distance: 7.599999999999989,
                speed: 99
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 842, y: 555},
                to: {x: 878, y: 555},
                idle: false,
                distance: 10.09999999999998,
                speed: 85
            },
            {
                character: "ct_crouch_darken",
                come_from: "left",
                from: {x: 842, y: 555},
                to: {x: 862, y: 555},
                idle: false,
                distance: 10.09999999999998,
                speed: 60
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 842, y: 555},
                to: {x: 862, y: 555},
                idle: false,
                distance: 10.09999999999998,
                speed: 85
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    car_to_ct: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 842, y: 632},
                to: {x: 827, y: 632},
                idle: false,
                distance: 14.799999999999963,
                speed: 51
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 776, y: 620},
                to: {x: 756, y: 620},
                idle: false,
                distance: 17.59999999999998,
                speed: 65
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 690, y: 620},
                to: {x: 706, y: 620},
                idle: false,
                distance: 17.59999999999998,
                speed: 65
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 931, y: 570},
                to: {x: 895, y: 570},
                idle: false,
                distance: 8.299999999999986,
                speed: 110
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 931, y: 570},
                to: {x: 913, y: 570},
                idle: false,
                distance: 8.299999999999986,
                speed: 70
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 931, y: 570},
                to: {x: 913, y: 570},
                idle: false,
                distance: 8.299999999999986,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 999, y: 503},
                to: {x: 999, y: 491},
                idle: false,
                distance: 9.499999999999982,
                speed: 79
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1245, y: 460},
                to: {x: 1264, y: 460},
                idle: false,
                distance: 7.899999999999988,
                speed: 95
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1168, y: 468},
                to: {x: 1145, y: 468},
                idle: false,
                distance: 8.099999999999987,
                speed: 93
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1003, y: 500},
                to: {x: 966, y: 500},
                idle: false,
                distance: 11.599999999999975,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 676, y: 518},
                to: {x: 705, y: 518},
                idle: false,
                distance: 12.199999999999973,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 676, y: 518},
                to: {x: 692, y: 518},
                idle: false,
                distance: 12.199999999999973,
                speed: 90
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tside_a_to_short: {
        targets: [
            {
                character: "ct_crouch",
                come_from: "left",
                from: {x: 701, y: 526},
                to: {x: 759, y: 526},
                idle: false,
                distance: 2.5000000000000004,
                speed: 150
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 734, y: 549},
                to: {x: 749, y: 549},
                idle: false,
                distance: 11,
                speed: 75
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 734, y: 549},
                to: {x: 765, y: 549},
                idle: false,
                distance: 11,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1265, y: 542},
                to: {x: 1220, y: 542},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1265, y: 542},
                to: {x: 1239, y: 542},
                idle: false,
                distance: 5.1999999999999975,
                speed: 90
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1265, y: 542},
                to: {x: 1239, y: 542},
                idle: false,
                distance: 5.1999999999999975,
                speed: 144
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 635, y: 527},
                to: {x: 665, y: 527},
                idle: false,
                distance: 3.9000000000000017,
                speed: 192
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    tunnel_to_lower: {
        targets: [
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 971, y: 479},
                to: {x: 943, y: 479},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 794, y: 500},
                to: {x: 833, y: 500},
                idle: false,
                distance: 5.599999999999996,
                speed: 134
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 881, y: 542},
                to: {x: 881, y: 513},
                idle: false,
                distance: 5.599999999999996,
                speed: 134
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 904, y: 614},
                to: {x: 969, y: 614},
                idle: false,
                distance: 2.5000000000000004,
                speed: 300
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 931, y: 606},
                to: {x: 995, y: 606},
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
    lower_to_short: {
        targets: [
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 895, y: 483},
                to: {x: 895, y: 476},
                idle: false,
                distance: 13.699999999999967,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 915, y: 483},
                to: {x: 915, y: 476},
                idle: false,
                distance: 13.699999999999967,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 933, y: 483},
                to: {x: 933, y: 476},
                idle: false,
                distance: 13.699999999999967,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1017, y: 464},
                to: {x: 980, y: 464},
                idle: false,
                distance: 9.699999999999982,
                speed: 100
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1017, y: 464},
                to: {x: 998, y: 464},
                idle: false,
                distance: 9.699999999999982,
                speed: 77
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1019, y: 552},
                to: {x: 996, y: 552},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 850, y: 551},
                to: {x: 865, y: 551},
                idle: false,
                distance: 6.799999999999992,
                speed: 110
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 840, y: 553},
                to: {x: 865, y: 553},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1022, y: 553},
                to: {x: 991, y: 553},
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
    tunnel_to_b: {
        targets: [
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 1012, y: 543},
                to: {x: 995, y: 543},
                idle: false,
                distance: 13.599999999999968,
                speed: 37
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 1017, y: 547},
                to: {x: 1017, y: 535},
                idle: false,
                distance: 13.599999999999968,
                speed: 55
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1013, y: 546},
                to: {x: 1005, y: 546},
                idle: false,
                distance: 13.599999999999968,
                speed: 55
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 899, y: 554},
                to: {x: 899, y: 548},
                idle: false,
                distance: 17.799999999999983,
                speed: 42
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 835, y: 578},
                to: {x: 866, y: 578},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 835, y: 578},
                to: {x: 854, y: 578},
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
    b_site_to_doors: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1094, y: 572},
                to: {x: 1079, y: 572},
                idle: false,
                distance: 10.699999999999978,
                speed: 70
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 1029, y: 562},
                to: {x: 1051, y: 562},
                idle: false,
                distance: 8.999999999999984,
                speed: 83
            },
            {
                character: "ct_crouch",
                come_from: "right",
                from: {x: 433, y: 516},
                to: {x: 411, y: 522},
                idle: false,
                distance: 5.699999999999996,
                speed: 88
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 435, y: 516},
                to: {x: 415, y: 516},
                idle: false,
                distance: 5.699999999999996,
                speed: 132
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 697, y: 546},
                to: {x: 681, y: 546},
                idle: false,
                distance: 7.999999999999988,
                speed: 94
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1508, y: 549},
                to: {x: 1475, y: 549},
                idle: false,
                distance: 2.900000000000001,
                speed: 259
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1508, y: 549},
                to: {x: 1445, y: 549},
                idle: false,
                distance: 2.900000000000001,
                speed: 259
            },

        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
    window_to_ct: {
        targets: [
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1127, y: 628},
                to: {x: 1100, y: 628},
                idle: false,
                distance: 10.499999999999979,
                speed: 85
            },
            {
                character: "ct_standup",
                come_from: "right",
                from: {x: 1196, y: 701},
                to: {x: 1157, y: 701},
                idle: false,
                distance: 3.8000000000000016,
                speed: 197
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1127, y: 628},
                to: {x: 1117, y: 628},
                idle: false,
                distance: 10.499999999999979,
                speed: 71
            },
            {
                character: "ct_standup",
                come_from: "left",
                from: {x: 892, y: 695},
                to: {x: 922, y: 695},
                idle: false,
                distance: 6.199999999999994,
                speed: 121
            },
            {
                character: "ct_standup_darken",
                come_from: "left",
                from: {x: 907, y: 600},
                to: {x: 921, y: 600},
                idle: false,
                distance: 17.799999999999983,
                speed: 42
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1127, y: 655},
                to: {x: 1100, y: 655},
                idle: false,
                distance: 10,
                speed: 100
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 1127, y: 655},
                to: {x: 1113, y: 655},
                idle: false,
                distance: 10,
                speed: 66
            },
            {
                character: "ct_standup_darken",
                come_from: "right",
                from: {x: 979, y: 617},
                to: {x: 968, y: 617},
                idle: false,
                distance: 16.89999999999997,
                speed: 44
            },
        ] as Target[],
        initial_offset: {
            x: -420,
            y: -150
        },
        circuit: 'terrorist_circuit'
    },
}