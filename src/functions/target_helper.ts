import { Vector2, ImageObject } from "@/types"

export const drawTargetHelper = (
    ctx: CanvasRenderingContext2D,
    images: { [key:string]: ImageObject},
    screenOffset: Vector2,
    testPosition: Vector2,
    testDistance: number,
    testCharacter: number,
) => {
    const currentCharacter = Object.keys(images)[testCharacter]
    ctx.drawImage(
        images[currentCharacter].img,
        0,
        0,
        images[currentCharacter].img.width,
        images[currentCharacter].img.height,
        testPosition.x + screenOffset.x,
        testPosition.y + screenOffset.y,
        images[currentCharacter].img.width / testDistance,
        images[currentCharacter].img.height / testDistance
    )
}

export const drawHelperData = (
    ctx: CanvasRenderingContext2D,
    testDistance: number,
    testStartPosition: Vector2,
    testPosition: Vector2,
    testSpeedPosition: number,
    testSpeedScale: number,
    testComeFrom: string
) => {
    ctx.save()
    ctx.fillStyle = 'white'
    ctx.font = '24px Arial'
    ctx.fillText(`Distance x : ${testDistance.toFixed(2)}`,
        20,
        100
    )
    ctx.fillText(`Position (x, y) : ${testPosition.x} | ${testPosition.y}`,
        20,
        130
    )
    ctx.fillText(`[a] Toggle Character Type`,
        20,
        200
    )
    ctx.fillText(`[z] Speed Position : ${testSpeedPosition === 1 ? 'slow' : testSpeedPosition === 10 ? 'medium': 'fast'}`,
        20,
        225
    )
    ctx.fillText(`[e] Speed Scale : ${testSpeedScale === .01 ? 'slow' : testSpeedScale === .1 ? 'medium' : 'fast'}`,
        20,
        250
    )
    ctx.fillText(`[f] Come from : ${testComeFrom}`,
        20,
        325
    )
    ctx.fillText(`[g] Start position (x, y): ${testStartPosition.x}, y: ${testStartPosition.y}`,
        20,
        350
    )
    ctx.fillText(`[S] Save Data`,
        20,
        400
    )
    ctx.restore()
}

export const getHelperCoords = (
    character: string,
    come_from: string,
    start_position: Vector2,
    end_position: Vector2,
    distance: number
) => {
    const speed_factor = Math.round(750 / distance)
    const speed = character.includes('crouch') ? speed_factor - Math.round(speed_factor / 3) : speed_factor

    return `{\n    character: "${character}",\n    come_from: "${come_from}",\n    from: {x: ${start_position.x}, y: ${start_position.y}},\n    to: {x: ${end_position.x}, y: ${end_position.y}},\n    idle: false,\n    distance: ${distance},\n    speed: ${speed}\n},`
}