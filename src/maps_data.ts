import { SpotStruct, CircuitTeams, Target } from "./types"

type MapsData = {
    [mapName: string]: { 
        [spotName: string]: SpotStruct
    }
}

export const getMapCircuits = (map_name: string) => {
    const circuit_data: CircuitTeams = {
        ct_circuit: [],
        terrorist_circuit: []
    }

    for (const key in mapsData[map_name]){
        const circuit_type = mapsData[map_name][key].circuit
        if (circuit_type === 'ct_circuit' || circuit_type === 'terrorist_circuit')
            circuit_data[circuit_type].push({...mapsData[map_name][key], name: key})
    }
    return circuit_data
}

export const mapsData: MapsData = {
    vertigo: {
        ctspawn_to_mid: {
            targets: [
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 895, y: 545},
                    to: {x: 915, y: 545},
                    idle: false,
                    distance: 8.5,
                    speed: 50
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 900, y: 547},
                    to: {x: 918, y: 547},
                    idle: false,
                    distance: 10.3,
                    speed: 50
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 880, y: 500},
                    to: {x: 925, y: 500},
                    idle: false,
                    distance: 14,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 900, y: 498},
                    to: {x: 922, y: 498},
                    idle: false,
                    distance: 13,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 895, y: 545},
                    to: {x: 915, y: 545},
                    idle: false,
                    distance: 8.5,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 900, y: 545},
                    to: {x: 918, y: 545},
                    idle: false,
                    distance: 10.5,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 815, y: 435},
                    to: {x: 838, y: 435},
                    idle: false,
                    distance: 7.5,
                    speed: 80
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 800, y: 437},
                    to: {x: 836, y: 437},
                    idle: false,
                    distance: 7.8,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1000, y: 538},
                    to: {x: 955, y: 538},
                    idle: false,
                    distance: 6.5,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 970, y: 535},
                    to: {x: 930, y: 535},
                    idle: false,
                    distance: 3.2,
                    speed: 130
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        ctspawn_to_short: {
            targets: [
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 805, y: 555},
                    to: {x: 832, y: 555},
                    idle: false,
                    distance: 6.09,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 872, y: 555},
                    to: {x: 880, y: 555},
                    idle: false,
                    distance: 11.59,
                    speed: 30
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 890, y: 550},
                    to: {x: 895, y: 550},
                    idle: false,
                    distance: 12.79,
                    speed: 15
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 960, y: 550},
                    to: {x: 947, y: 550},
                    idle: false,
                    distance: 8.29,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 975, y: 552},
                    to: {x: 955, y: 552},
                    idle: false,
                    distance: 13.39,
                    speed: 60
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1040, y: 555},
                    to: {x: 1020 , y: 555},
                    idle: false,
                    distance: 6.09,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 805, y: 555},
                    to: {x: 832, y: 555},
                    idle: false,
                    distance: 6.09,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 872, y: 555},
                    to: {x: 880, y: 555},
                    idle: false,
                    distance: 11.59,
                    speed: 30
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 890, y: 550},
                    to: {x: 895, y: 550},
                    idle: false,
                    distance: 12.79,
                    speed: 15
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 960, y: 550},
                    to: {x: 947, y: 550},
                    idle: false,
                    distance: 8.29,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 975, y: 552},
                    to: {x: 955, y: 552},
                    idle: false,
                    distance: 13.39,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1040, y: 555},
                    to: {x: 1020 , y: 555},
                    idle: false,
                    distance: 6.09,
                    speed: 60
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        ctspawn_short_to_a: {
            targets: [
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 805, y: 555},
                    to: {x: 832, y: 555},
                    idle: false,
                    distance: 6.09,
                    speed: 100
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        connector_to_mid: {
            targets: [
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'down',
                    from: {x: 800, y: 500},
                    to: {x: 800, y: 410},
                    idle: false,
                    distance: 5.6,
                    speed: 150
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'down',
                    from: {x: 788, y: 500},
                    to: {x: 788, y: 410},
                    idle: false,
                    distance: 5.6,
                    speed: 150
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 910, y: 560},
                    to: {x: 940, y: 560},
                    idle: false,
                    distance: 6.4,
                    speed: 50
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 920, y: 555},
                    to: {x: 945, y: 555},
                    idle: false,
                    distance: 6.29,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 920, y: 525},
                    to: {x: 945, y: 525},
                    idle: false,
                    distance: 8.10,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1010, y: 535},
                    to: {x: 985, y: 535},
                    idle: false,
                    distance: 7.59,
                    speed: 70
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1010, y: 535},
                    to: {x: 985, y: 535},
                    idle: false,
                    distance: 7.59,
                    speed: 50
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 850, y: 600},
                    to: {x: 780, y: 600},
                    idle: false,
                    distance: 3.5,
                    speed: 130
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
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 730, y: 530},
                    to: {x: 690, y: 530},
                    idle: false,
                    distance: 5.39,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 730, y: 525},
                    to: {x: 697, y: 525},
                    idle: false,
                    distance: 5.39,
                    speed: 70
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 875, y: 520},
                    to: {x: 820, y: 520},
                    idle: false,
                    distance: 3.3,
                    speed: 120
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 875, y: 522},
                    to: {x: 825, y: 522},
                    idle: false,
                    distance: 3.3,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 1250, y: 565},
                    to: {x: 1320, y: 565},
                    idle: false,
                    distance: 3.4,
                    speed: 120
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 1300, y: 565},
                    to: {x: 1340, y: 565},
                    idle: false,
                    distance: 3.4,
                    speed: 80
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 740, y: 525},
                    to: {x: 695, y: 525},
                    idle: false,
                    distance: 5.59,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 540, y: 520},
                    to: {x: 600, y: 520},
                    idle: false,
                    distance: 5.1,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 540, y: 520},
                    to: {x: 600, y: 520},
                    idle: false,
                    distance: 5.1,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 555, y: 525},
                    to: {x: 590, y: 525},
                    idle: false,
                    distance: 4.4,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 465, y: 490},
                    to: {x: 565, y: 490},
                    idle: false,
                    distance: 1.8,
                    speed: 240
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 750, y: 530},
                    to: {x: 700, y: 530},
                    idle: false,
                    distance: 7.79,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 750, y: 530},
                    to: {x: 700, y: 530},
                    idle: false,
                    distance: 7.79,
                    speed: 80
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        b_to_stairs_1: {
            targets: [
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 1170, y: 433},
                    to: {x: 1202, y: 433},
                    idle: false,
                    distance: 3.9,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 1180, y: 518},
                    to: {x: 1212, y: 518},
                    idle: false,
                    distance: 3.8,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 1180, y: 518},
                    to: {x: 1212, y: 518},
                    idle: false,
                    distance: 3.8,
                    speed: 80
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 1280, y: 508},
                    to: {x: 1317, y: 508},
                    idle: false,
                    distance: 5,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 1280, y: 508},
                    to: {x: 1317, y: 508},
                    idle: false,
                    distance: 5,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 840, y: 527},
                    to: {x: 890, y: 527},
                    idle: false,
                    distance: 8.1,
                    speed: 70
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 840, y: 527},
                    to: {x: 890, y: 527},
                    idle: false,
                    distance: 8.1,
                    speed: 90
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'down',
                    from: {x: 850, y: 600},
                    to: {x: 900, y: 550},
                    idle: false,
                    distance: 11.8,
                    speed: 70
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 870, y: 570},
                    to: {x: 900, y: 570},
                    idle: false,
                    distance: 11.8,
                    speed: 70
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1050, y: 520},
                    to: {x: 1020, y: 520},
                    idle: false,
                    distance: 4,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1050, y: 520},
                    to: {x: 1020, y: 520},
                    idle: false,
                    distance: 4,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1065, y: 527},
                    to: {x: 1036, y: 527},
                    idle: false,
                    distance: 5.8,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1065, y: 527},
                    to: {x: 1036, y: 527},
                    idle: false,
                    distance: 5.8,
                    speed: 100
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        b_to_stairs_2: {
            targets: [
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 700, y: 519},
                    to: {x: 670, y: 519},
                    idle: false,
                    distance: 4.76,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 700, y: 519},
                    to: {x: 670, y: 519},
                    idle: false,
                    distance: 4.76,
                    speed: 110
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 790, y: 519},
                    to: {x: 816, y: 519},
                    idle: false,
                    distance: 4.76,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 790, y: 519},
                    to: {x: 816, y: 519},
                    idle: false,
                    distance: 4.76,
                    speed: 110
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1022, y: 511},
                    to: {x: 1002, y: 511},
                    idle: false,
                    distance: 7.06,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 885, y: 519},
                    to: {x: 901, y: 519},
                    idle: false,
                    distance: 9.43,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'down',
                    from: {x: 908, y: 560},
                    to: {x: 908, y: 555},
                    idle: false,
                    distance: 16,
                    speed: 20
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'down',
                    from: {x: 945, y: 560},
                    to: {x: 945, y: 555},
                    idle: false,
                    distance: 16,
                    speed: 20
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'down',
                    from: {x: 960, y: 560},
                    to: {x: 960, y: 555},
                    idle: false,
                    distance: 16,
                    speed: 20
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        under_b_stairs_to_tspawn: {
            targets: [
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 830, y: 526},
                    to: {x: 875, y: 526},
                    idle: false,
                    distance: 6.12,
                    speed: 150
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 830, y: 526},
                    to: {x: 862, y: 526},
                    idle: false,
                    distance: 6.12,
                    speed: 130
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1045, y: 525},
                    to: {x: 995, y: 525},
                    idle: false,
                    distance: 5,
                    speed: 150
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1045, y: 525},
                    to: {x: 1010, y: 525},
                    idle: false,
                    distance: 5,
                    speed: 120
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1045, y: 525},
                    to: {x: 1022, y: 525},
                    idle: false,
                    distance: 5,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1045, y: 525},
                    to: {x: 1022, y: 525},
                    idle: false,
                    distance: 5,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 830, y: 526},
                    to: {x: 850, y: 526},
                    idle: false,
                    distance: 6.12,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 830, y: 526},
                    to: {x: 850, y: 526},
                    idle: false,
                    distance: 6.12,
                    speed: 80
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        under_to_a_ramp: {
            targets: [
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1090, y: 528},
                    to: {x: 1050, y: 528},
                    idle: false,
                    distance: 3.5,
                    speed: 120
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1090, y: 520},
                    to: {x: 1050, y: 520},
                    idle: false,
                    distance: 3.5,
                    speed: 160
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1065, y: 511},
                    to: {x: 1000, y: 511},
                    idle: false,
                    distance: 1.7,
                    speed: 160
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1065, y: 511},
                    to: {x: 1000, y: 511},
                    idle: false,
                    distance: 1.7,
                    speed: 260
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 575, y: 517},
                    to: {x: 635, y: 517},
                    idle: false,
                    distance: 2.3,
                    speed: 160
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 575, y: 517},
                    to: {x: 635, y: 517},
                    idle: false,
                    distance: 2.3,
                    speed: 260
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 625, y: 533},
                    to: {x: 660, y: 533},
                    idle: false,
                    distance: 4.2,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 625, y: 533},
                    to: {x: 660, y: 533},
                    idle: false,
                    distance: 4.2,
                    speed: 130
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 917, y: 528},
                    to: {x: 900, y: 528},
                    idle: false,
                    distance: 9,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 917, y: 528},
                    to: {x: 900, y: 528},
                    idle: false,
                    distance: 9,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 730, y: 528},
                    to: {x: 765, y: 528},
                    idle: false,
                    distance: 6.3,
                    speed: 80
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 915, y: 533},
                    to: {x: 895, y: 533},
                    idle: false,
                    distance: 6.1,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 915, y: 533},
                    to: {x: 895, y: 533},
                    idle: false,
                    distance: 6.1,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 730, y: 528},
                    to: {x: 750, y: 528},
                    idle: false,
                    distance: 6.3,
                    speed: 100
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 730, y: 500},
                    to: {x: 750, y: 500},
                    idle: false,
                    distance: 6.6,
                    speed: 100
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        ctmid_to_tmid: {
            targets: [
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 675, y: 540},
                    to: {x: 693, y: 540},
                    idle: false,
                    distance: 7.5,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 685, y: 540},
                    to: {x: 708, y: 540},
                    idle: false,
                    distance: 7.5,
                    speed: 80
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 685, y: 540},
                    to: {x: 700, y: 540},
                    idle: false,
                    distance: 7.5,
                    speed: 40
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 664, y: 536},
                    to: {x: 684, y: 536},
                    idle: false,
                    distance: 5.2,
                    speed: 110
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 664, y: 536},
                    to: {x: 684, y: 536},
                    idle: false,
                    distance: 5.2,
                    speed: 110
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 663, y: 536},
                    to: {x: 700, y: 536},
                    idle: false,
                    distance: 5.2,
                    speed: 110
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 663, y: 536},
                    to: {x: 715, y: 536},
                    idle: false,
                    distance: 5.2,
                    speed: 115
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 663, y: 536},
                    to: {x: 700, y: 536},
                    idle: false,
                    distance: 5.2,
                    speed: 90
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 915, y: 539},
                    to: {x: 897, y: 539},
                    idle: false,
                    distance: 7.5,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 915, y: 539},
                    to: {x: 898, y: 539},
                    idle: false,
                    distance: 7.5,
                    speed: 60
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 915, y: 539},
                    to: {x: 877, y: 539},
                    idle: false,
                    distance: 7.5,
                    speed: 110
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 915, y: 539},
                    to: {x: 900, y: 539},
                    idle: false,
                    distance: 7.5,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 900, y: 539},
                    to: {x: 878, y: 539},
                    idle: false,
                    distance: 8.9,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 900, y: 539},
                    to: {x: 888, y: 539},
                    idle: false,
                    distance: 8.9,
                    speed: 80
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 910, y: 539},
                    to: {x: 890, y: 539},
                    idle: false,
                    distance: 8.9,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 910, y: 539},
                    to: {x: 897, y: 539},
                    idle: false,
                    distance: 8.9,
                    speed: 60
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        mid_to_ladder: {
            targets: [
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1250, y: 547},
                    to: {x: 1230, y: 547},
                    idle: false,
                    distance: 5.81,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1250, y: 547},
                    to: {x: 1230, y: 547},
                    idle: false,
                    distance: 5.81,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1250, y: 547},
                    to: {x: 1210, y: 547},
                    idle: false,
                    distance: 5.81,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1250, y: 547},
                    to: {x: 1210, y: 547},
                    idle: false,
                    distance: 5.81,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1250, y: 547},
                    to: {x: 1215, y: 547},
                    idle: false,
                    distance: 4.49,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1250, y: 547},
                    to: {x: 1215, y: 547},
                    idle: false,
                    distance: 4.49,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 878, y: 550},
                    to: {x: 895, y: 550},
                    idle: false,
                    distance: 6.38,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 878, y: 550},
                    to: {x: 895, y: 550},
                    idle: false,
                    distance: 6.38,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 870, y: 550},
                    to: {x: 892, y: 550},
                    idle: false,
                    distance: 6.29,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 870, y: 550},
                    to: {x: 892, y: 550},
                    idle: false,
                    distance: 6.29,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 885, y: 550},
                    to: {x: 910, y: 550},
                    idle: false,
                    distance: 6.29,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 885, y: 550},
                    to: {x: 910, y: 550},
                    idle: false,
                    distance: 6.29,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 950, y: 550},
                    to: {x: 925, y: 550},
                    idle: false,
                    distance: 6.29,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 950, y: 550},
                    to: {x: 925, y: 550},
                    idle: false,
                    distance: 6.29,
                    speed: 80
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        under_ladder_to_ramp: {
            targets: [
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1065, y: 526},
                    to: {x: 1030, y: 526},
                    idle: false,
                    distance: 5.6,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1065, y: 526},
                    to: {x: 1030, y: 526},
                    idle: false,
                    distance: 5.6,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1065, y: 526},
                    to: {x: 1043, y: 526},
                    idle: false,
                    distance: 5.6,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1065, y: 526},
                    to: {x: 1043, y: 526},
                    idle: false,
                    distance: 5.6,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 790, y: 530},
                    to: {x: 815, y: 530},
                    idle: false,
                    distance: 8,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 790, y: 530},
                    to: {x: 815, y: 530},
                    idle: false,
                    distance: 8,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 760, y: 519},
                    to: {x: 800, y: 519},
                    idle: false,
                    distance: 4.03,
                    speed: 180
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 760, y: 519},
                    to: {x: 800, y: 519},
                    idle: false,
                    distance: 4.03,
                    speed: 120
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 700, y: 508},
                    to: {x: 779, y: 508},
                    idle: false,
                    distance: 2.11,
                    speed: 240
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 700, y: 508},
                    to: {x: 779, y: 508},
                    idle: false,
                    distance: 2.11,
                    speed: 180
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        heaven_to_b_1: {
            targets: [
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 1100, y: 550},
                    to: {x: 1114, y: 550},
                    idle: false,
                    distance: 17.2,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1180, y: 550},
                    to: {x: 1160, y: 550},
                    idle: false,
                    distance: 17.2,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1180, y: 550},
                    to: {x: 1160, y: 550},
                    idle: false,
                    distance: 17.2,
                    speed: 40
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1151, y: 568},
                    to: {x: 1143, y: 560},
                    idle: false,
                    distance: 14.18,
                    speed: 20
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1151, y: 568},
                    to: {x: 1143, y: 560},
                    idle: false,
                    distance: 14.18,
                    speed: 40
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1165, y: 547},
                    to: {x: 1155, y: 547},
                    idle: false,
                    distance: 10.20,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 1090, y: 546},
                    to: {x: 1110, y: 546},
                    idle: false,
                    distance: 7.49,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 1090, y: 546},
                    to: {x: 1110, y: 546},
                    idle: false,
                    distance: 7.49,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 634, y: 471},
                    to: {x: 594, y: 471},
                    idle: false,
                    distance: 3.5,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 634, y: 471},
                    to: {x: 594, y: 471},
                    idle: false,
                    distance: 3.5,
                    speed: 120
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 619, y: 510},
                    to: {x: 570, y: 510},
                    idle: false,
                    distance: 2.69,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 619, y: 510},
                    to: {x: 570, y: 510},
                    idle: false,
                    distance: 2.69,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 619, y: 510},
                    to: {x: 589, y: 510},
                    idle: false,
                    distance: 2.69,
                    speed: 80
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 619, y: 510},
                    to: {x: 589, y: 510},
                    idle: false,
                    distance: 2.69,
                    speed: 100
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        heaven_to_b_2: {
            targets: [
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1020, y: 530},
                    to: {x: 1000, y: 530},
                    idle: false,
                    distance: 15,
                    speed: 30
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1020, y: 530},
                    to: {x: 1000, y: 530},
                    idle: false,
                    distance: 15,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 989, y: 574},
                    to: {x: 977, y: 562},
                    idle: false,
                    distance: 11.7,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 875, y: 530},
                    to: {x: 900, y: 530},
                    idle: false,
                    distance: 15,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 875, y: 530},
                    to: {x: 850, y: 530},
                    idle: false,
                    distance: 15,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 795, y: 553},
                    to: {x: 826, y: 553},
                    idle: false,
                    distance: 9.2,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 795, y: 553},
                    to: {x: 808, y: 553},
                    idle: false,
                    distance: 9.2,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 1230, y: 578},
                    to: {x: 1213, y: 578},
                    idle: false,
                    distance: 5.8,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1230, y: 578},
                    to: {x: 1213, y: 578},
                    idle: false,
                    distance: 5.8,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'down',
                    from: {x: 942, y: 588},
                    to: {x: 942, y: 566},
                    idle: false,
                    distance: 8,
                    speed: 70
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 810, y: 596},
                    to: {x: 832, y: 596},
                    idle: false,
                    distance: 6,
                    speed: 60
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 810, y: 596},
                    to: {x: 840, y: 596},
                    idle: false,
                    distance: 6,
                    speed: 100
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        kenny_to_short: {
            targets: [
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 1054, y: 562},
                    to: {x: 1074, y: 562},
                    idle: false,
                    distance: 7.7,
                    speed: 40
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 1054, y: 562},
                    to: {x: 1074, y: 562},
                    idle: false,
                    distance: 7.7,
                    speed: 60
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 750, y: 544},
                    to: {x: 761, y: 544},
                    idle: false,
                    distance: 10.5,
                    speed: 40
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 840, y: 544},
                    to: {x: 810, y: 544},
                    idle: false,
                    distance: 10.5,
                    speed: 40
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 840, y: 544},
                    to: {x: 810, y: 544},
                    idle: false,
                    distance: 10.5,
                    speed: 60
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 750, y: 544},
                    to: {x: 761, y: 544},
                    idle: false,
                    distance: 10.5,
                    speed: 60
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 1040, y: 549},
                    to: {x: 1075, y: 549},
                    idle: false,
                    distance: 9,
                    speed: 80
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 690, y: 565},
                    to: {x: 724, y: 565},
                    idle: false,
                    distance: 8,
                    speed: 90
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 1160, y: 640},
                    to: {x: 1280, y: 640},
                    idle: false,
                    distance: 3,
                    speed: 260
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 680, y: 590},
                    to: {x: 710, y: 590},
                    idle: false,
                    distance: 4.2,
                    speed: 120
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 1040, y: 549},
                    to: {x: 1075, y: 549},
                    idle: false,
                    distance: 9,
                    speed: 60
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 1040, y: 549},
                    to: {x: 1075, y: 549},
                    idle: false,
                    distance: 9,
                    speed: 80
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'right',
                    from: {x: 1210, y: 549},
                    to: {x: 1192, y: 549},
                    idle: false,
                    distance: 9,
                    speed: 60
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 1210, y: 549},
                    to: {x: 1192, y: 549},
                    idle: false,
                    distance: 9,
                    speed: 80
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        a_site_to_ramp: {
            targets: [
                {
                    character: "terrorist_crouch",
                    come_from: "right",
                    from: {x: 1018, y: 521},
                    to: {x: 990, y: 521},
                    idle: false,
                    distance: 6.999999999999991,
                    speed: 71
                },
                {
                    character: "terrorist_standup",
                    come_from: "right",
                    from: {x: 1018, y: 521},
                    to: {x: 990, y: 521},
                    idle: false,
                    distance: 6.999999999999991,
                    speed: 107
                },
                {
                    character: "terrorist_crouch",
                    come_from: "right",
                    from: {x: 650, y: 522},
                    to: {x: 629, y: 522},
                    idle: false,
                    distance: 6.499999999999993,
                    speed: 90
                },
                {
                    character: "terrorist_standup",
                    come_from: "right",
                    from: {x: 650, y: 522},
                    to: {x: 629, y: 522},
                    idle: false,
                    distance: 6.499999999999993,
                    speed: 115
                },
                {
                    character: "terrorist_crouch",
                    come_from: "left",
                    from: {x: 744, y: 526},
                    to: {x: 766, y: 526},
                    idle: false,
                    distance: 7.999999999999988,
                    speed: 63
                },
                {
                    character: "terrorist_standup",
                    come_from: "left",
                    from: {x: 744, y: 526},
                    to: {x: 766, y: 526},
                    idle: false,
                    distance: 7.999999999999988,
                    speed: 94
                },
                {
                    character: "terrorist_crouch",
                    come_from: "right",
                    from: {x: 1014, y: 520},
                    to: {x: 979, y: 520},
                    idle: false,
                    distance: 4.350000000000003,
                    speed: 115
                },
                {
                    character: "terrorist_standup",
                    come_from: "right",
                    from: {x: 1014, y: 520},
                    to: {x: 979, y: 520},
                    idle: false,
                    distance: 4.350000000000003,
                    speed: 172
                },
                {
                    character: "terrorist_crouch",
                    come_from: "right",
                    from: {x: 951, y: 613},
                    to: {x: 903, y: 568},
                    idle: false,
                    distance: 5.490000000000002,
                    speed: 80
                },
                {
                    character: "terrorist_standup",
                    come_from: "right",
                    from: {x: 951, y: 613},
                    to: {x: 903, y: 568},
                    idle: false,
                    distance: 5.490000000000002,
                    speed: 137
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 972, y: 610},
                    to: {x: 952, y: 589},
                    idle: false,
                    distance: 5.4,
                    speed: 130
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
        a_to_ramp: {
            targets: [
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 805, y: 555},
                    to: {x: 832, y: 555},
                    idle: false,
                    distance: 6.09,
                    speed: 100
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            },
            circuit: 'ct_circuit'
        },
    }
}