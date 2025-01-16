export interface Vector2 {
    x: number,
    y: number
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

export interface CanvasParams {
    map_name: string,
    spot_name: string,
    difficulty: string,
    mouse_sensitivity: number
}

export interface Statistics {
    kills: number,
    deaths: number
}

export interface RecoilSettings {
    start_position: {x: number, y: number},
    current_position: {x: number, y: number},
    end_position: {x: number, y: number},
    y_offset: number,
    x_offset: number,
    x_direction: string,
    reverse: boolean,
    speed: number
}