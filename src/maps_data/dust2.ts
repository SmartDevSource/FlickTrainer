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
}