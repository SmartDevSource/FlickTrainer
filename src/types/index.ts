export interface Vector2 {
    x: number,
    y: number
}

export interface ImageObject {
    path: string,
    img: HTMLImageElement,
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
    difficulty: string
}

export interface Statistics {
    kills: number,
    deaths: number
}