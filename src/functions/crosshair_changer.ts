import { ScreenSize } from "@/types"

export const canvasCrosshairScreen: ScreenSize = {w:240, h: 240}
export interface crosshairData {
    gap: number,
    length: number,
    thickness: number,
    outline: number,
    red: number,
    green: number,
    blue: number,
    opacity: number,
    show_dot: number
}

// export const updateCrosshair = (type: string, value: number) => {
//     crosshairData[type as keyof typeof crosshairData] = value
//     console.log(value)
// }

export const drawCrosshair = (ctx: CanvasRenderingContext2D, crosshairData: crosshairData) => {
    ctx.clearRect(0, 0, canvasCrosshairScreen.w, canvasCrosshairScreen.h)
    ctx.fillStyle = '#374151'
    ctx.fillRect(0, 0, canvasCrosshairScreen.w, canvasCrosshairScreen.h)
    ctx.fillStyle = `rgba(${crosshairData.red}, ${crosshairData.green}, ${crosshairData.blue}, ${crosshairData.opacity})`

    // CENTRAL DOT //
    if (crosshairData.show_dot){
        ctx.fillRect(
            (canvasCrosshairScreen.w / 2) - (crosshairData.thickness / 2),
            (canvasCrosshairScreen.h / 2) - (crosshairData.thickness / 2),
            crosshairData.thickness,
            crosshairData.thickness
        )
    }

    // LEFT //
    ctx.fillRect(
        ((canvasCrosshairScreen.w / 2) - (crosshairData.length)) - (crosshairData.gap / 2),
        (canvasCrosshairScreen.h / 2) - (crosshairData.thickness / 2),
        crosshairData.length,
        crosshairData.thickness
    )
    // RIGHT //
    ctx.fillRect(
        (canvasCrosshairScreen.w / 2) + (crosshairData.gap / 2),
        (canvasCrosshairScreen.h / 2) - (crosshairData.thickness / 2),
        crosshairData.length,
        crosshairData.thickness
    )
    // UP //
    ctx.fillRect(
        (canvasCrosshairScreen.w / 2) - (crosshairData.thickness / 2),
        (canvasCrosshairScreen.h / 2) - (crosshairData.length) - (crosshairData.gap / 2),
        crosshairData.thickness,
        crosshairData.length
    )
    // DOWN //
    ctx.fillRect(
        (canvasCrosshairScreen.w / 2) - (crosshairData.thickness / 2),
        (canvasCrosshairScreen.h / 2) + (crosshairData.gap / 2),
        crosshairData.thickness,
        crosshairData.length
    )

    // STROKED PART //
    if (crosshairData.outline > 0){
        ctx.strokeStyle = `rgba(0, 0, 0, ${crosshairData.opacity}`
        ctx.lineWidth = crosshairData.outline

         // CENTRAL DOT //
        if (crosshairData.show_dot){
            ctx.strokeRect(
                (canvasCrosshairScreen.w / 2) - (crosshairData.thickness / 2),
                (canvasCrosshairScreen.h / 2) - (crosshairData.thickness / 2),
                crosshairData.thickness,
                crosshairData.thickness
            )
        }
        // LEFT //
        ctx.strokeRect(
            ((canvasCrosshairScreen.w / 2) - (crosshairData.length)) - (crosshairData.gap / 2),
            (canvasCrosshairScreen.h / 2) - (crosshairData.thickness / 2),
            crosshairData.length,
            crosshairData.thickness
        )
        // RIGHT //
        ctx.strokeRect(
            (canvasCrosshairScreen.w / 2) + (crosshairData.gap / 2),
            (canvasCrosshairScreen.h / 2) - (crosshairData.thickness / 2),
            crosshairData.length,
            crosshairData.thickness
        )
        // UP //
        ctx.strokeRect(
            (canvasCrosshairScreen.w / 2) - (crosshairData.thickness / 2),
            (canvasCrosshairScreen.h / 2) - (crosshairData.length) - (crosshairData.gap / 2),
            crosshairData.thickness,
            crosshairData.length
        )
        // DOWN //
        ctx.strokeRect(
            (canvasCrosshairScreen.w / 2) - (crosshairData.thickness / 2),
            (canvasCrosshairScreen.h / 2) + (crosshairData.gap / 2),
            crosshairData.thickness,
            crosshairData.length
        )
    }

    requestAnimationFrame(() => drawCrosshair(ctx, crosshairData))
}