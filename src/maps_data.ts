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
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 900, y: 547},
                    to: {x: 920, y: 547},
                    idle: false,
                    distance: 10.3,
                },
                {
                    character: 'terrorist_crouch_darken',
                    come_from: 'left',
                    from: {x: 880, y: 500},
                    to: {x: 925, y: 500},
                    idle: false,
                    distance: 14,
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 900, y: 498},
                    to: {x: 922, y: 498},
                    idle: false,
                    distance: 13,
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 895, y: 545},
                    to: {x: 915, y: 545},
                    idle: false,
                    distance: 8.5,
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'left',
                    from: {x: 900, y: 545},
                    to: {x: 918, y: 545},
                    idle: false,
                    distance: 10.5,
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'left',
                    from: {x: 820, y: 435},
                    to: {x: 845, y: 435},
                    idle: false,
                    distance: 7.5,
                },
                {
                    character: 'terrorist_crouch',
                    come_from: 'left',
                    from: {x: 800, y: 437},
                    to: {x: 845, y: 437},
                    idle: false,
                    distance: 7.8,
                },
                {
                    character: 'terrorist_standup',
                    come_from: 'right',
                    from: {x: 1000, y: 538},
                    to: {x: 955, y: 538},
                    idle: false,
                    distance: 6.5,
                },
                {
                    character: 'terrorist_standup_darken',
                    come_from: 'right',
                    from: {x: 980, y: 535},
                    to: {x: 930, y: 535},
                    idle: false,
                    distance: 3.2,
                },
            ] as Target[],
            initial_offset: {
                x: -420,
                y: -150
            }
        },
    }
}