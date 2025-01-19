import { Target, Vector2 } from "./types"

type MapsData = {
    [mapName: string]: { 
        [spotName: string]: {
            targets: Target[],
            initial_offset: Vector2
        }
    }
}

export const mapsData: MapsData = {
    vertigo: {
        ctspawn_to_mid: {
            targets: [
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 900, y: 545},
                    to: {x: 918, y: 545},
                    idle: false,
                    distance: 8.5,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 900, y: 547},
                    to: {x: 920, y: 547},
                    idle: false,
                    distance: 10.3,
                    speed: 100
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
                    from: {x: 820, y: 435},
                    to: {x: 845, y: 435},
                    idle: false,
                    distance: 7.5,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 800, y: 437},
                    to: {x: 845, y: 437},
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
                    to: {x: 935, y: 535},
                    idle: false,
                    distance: 3.2,
                    speed: 130
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            }
        },
        ctspawn_to_short: {
            targets: [
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 805, y: 555},
                    to: {x: 840, y: 555},
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
                    to: {x: 840, y: 555},
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
            }
        },
        connector_to_mid: {
            targets: [
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'down',
                    from: {x: 815, y: 500},
                    to: {x: 815, y: 410},
                    idle: false,
                    distance: 5.4,
                    speed: 200
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'down',
                    from: {x: 795, y: 500},
                    to: {x: 795, y: 410},
                    idle: false,
                    distance: 5.4,
                    speed: 200
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
            }
        },
        ctspawn_to_b: {
            targets: [
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 730, y: 530},
                    to: {x: 697, y: 530},
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
                    to: {x: 840, y: 520},
                    idle: false,
                    distance: 3.3,
                    speed: 100
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'right',
                    from: {x: 875, y: 522},
                    to: {x: 840, y: 522},
                    idle: false,
                    distance: 3.3,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 1300, y: 565},
                    to: {x: 1340, y: 565},
                    idle: false,
                    distance: 3.4,
                    speed: 100
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
                    from: {x: 750, y: 525},
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
                    to: {x: 595, y: 525},
                    idle: false,
                    distance: 4.4,
                    speed: 100
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 530, y: 490},
                    to: {x: 580, y: 490},
                    idle: false,
                    distance: 1.8,
                    speed: 130
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
            }
        },
    }
}