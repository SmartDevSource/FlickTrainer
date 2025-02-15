export interface Timer {
    last_update: number, 
    delta_time: number
}

export interface Vector2 {
    x: number,
    y: number
}

export interface ScreenSize {
    w: number,
    h: number
}

export interface ImageObject {
    path: string,
    img: HTMLImageElement,
}

export interface AudioObject {
    path: string,
    volume: number,
    audio: HTMLAudioElement,
}

export interface Target {
    character: string,
    come_from: string,
    from: Vector2,
    to: Vector2,
    idle: boolean,
    distance: number,
    speed: number,
}

export interface Statistics {
    kills: number,
    deaths: number,
    time_elapsed: number,
    kd: number,
    shots: number,
    precision?: number
}

export interface RecoilSettings {
    start_position: {x: number, y: number},
    end_position: {x: number, y: number},
    current_offset: {x: number, y: number},
    offset_step: {x: number, y: number},
    offset_max: {x: number, y:number},
    x_direction: string,
    reverse: boolean,
    is_running: boolean,
    speed: number
}

export interface CrosshairData {
    gap: number,
    length: number,
    thickness: number,
    outline: number,
    red: number,
    green: number,
    blue: number,
    opacity: number,
    show_dot: 0
}

export interface GameSettings {
    mode: string,
    map_name: string,
    circuit: string,
    spot: string,
    difficulty: string,
    spot_objective: number
}

export interface SpotStruct {
    targets: Target[],
    initial_offset: Vector2,
    circuit: string,
    name?: string
}

export interface CircuitTeams {
    ct_circuit: SpotStruct[],
    terrorist_circuit: SpotStruct[],
}

export interface CircuitStates {
    current_kills: number,
    kills_goal: number,
    current_spot_index: number,
    last_spot_index: number,
    is_accomplished: boolean
}

export interface SpotStates {
    current_kills: number,
    kills_goal: number,
    is_accomplished: boolean
}

export interface MapSpotStruct {
    background: ImageObject,
    layer: ImageObject
}

export interface MapStruct {
    [spotName: string]: SpotStruct
}

export interface Weapon {
    fire_rate: number,
    frames_count: number,
    spreads: Record<number, Vector2>,
}

export interface WeaponsStruct {
    [weapon: string]: Weapon
}

export interface SpraySettings {
    index: number,
    bullets_amount: number,
    current_weapon: Weapon,
    is_spraying: boolean,
    spray_offset: Vector2,
    next_spread: Vector2,
    angle: number,
    distance: number,
    isRecovering: boolean
}

export interface RecoilBackground {
    index: number,
    image: ImageObject
}
