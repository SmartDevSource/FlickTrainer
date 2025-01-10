interface Vector {
    x: number,
    y: number
}

export interface ImageObject {
    path: string,
    img: HTMLImageElement,
}

export interface Target {
    team: string,
    from: Vector,
    to: Vector,
    idle: boolean,
    crouched: boolean,
    distance: number,
    speed: number
}