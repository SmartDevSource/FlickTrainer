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
    current_frame: number,
    come_from: string,
    from: Vector2,
    to: Vector2,
    idle: boolean,
    distance: number,
    speed: number,
}