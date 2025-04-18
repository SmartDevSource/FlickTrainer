import { drawCrosshair, crosshairData } from "@/functions/crosshair_changer"
import { useEffect, useRef, useState } from "react"
import { canvasCrosshairScreen } from "@/functions/crosshair_changer"
import { getCrosshairStorage, getSensitivityStorage } from "@/functions/utils"

interface UserSettingsParams {
    onClose: () => void,
    onSave: () => void
}

export const UserSettingsModal: React.FC<UserSettingsParams> = ({onClose, onSave}) => {
    const canvasCrosshair = useRef<HTMLCanvasElement | null>(null)
    const ctx = useRef<CanvasRenderingContext2D | null>(null)

    const [crosshairSettings, setCrosshairSettings] = useState<crosshairData>(getCrosshairStorage())
    const [sensitivity, setSensitivity] = useState<number>(getSensitivityStorage())

    const handleClose = () => {
        onClose()
    }
    const handleSave = () => {
        localStorage.setItem('crosshair', JSON.stringify(crosshairSettings))
        localStorage.setItem('sensitivity', sensitivity.toString())
        onSave()
    }
    const handleSensitivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSensitivity(parseFloat(e.currentTarget.value))
    }
    const updateCrosshair = (type: string, value: number) => {
        if (crosshairSettings){
            const prevCrosshairSettings = {...crosshairSettings}
            prevCrosshairSettings[type as keyof crosshairData] = value
            setCrosshairSettings(prevCrosshairSettings)
        }
    }

    useEffect(()=>{
        if (canvasCrosshair.current){
            canvasCrosshair.current.width = canvasCrosshairScreen.w
            canvasCrosshair.current.height = canvasCrosshairScreen.h
            ctx.current = canvasCrosshair.current.getContext('2d')
            if (ctx.current && crosshairSettings){
                drawCrosshair(ctx.current, crosshairSettings)
            }
        }
    }, [])

    useEffect(()=>{
        if (ctx.current)
            drawCrosshair(ctx.current, crosshairSettings)
    }, [crosshairSettings])

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-2xl select-none">
                <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-white">
                            Settings
                        </h3>
                    </div>
                    <div className="flex flex-col py-3">
                        <div className="flex flex-col items-center pb-3 max-h-[550px] overflow-y-auto">
                            <label className="text-base leading-relaxed text-white px-3">
                                Mouse sensitivity : {sensitivity.toFixed(2)}
                            </label>
                            <input
                                type="range" 
                                className="w-48 accent-orange-400" 
                                min={0}
                                max={5}
                                step={.05}
                                value={sensitivity}
                                onChange={handleSensitivityChange}
                            />
                            <p className="text-base leading-relaxed text-white pt-3">
                                Crosshair
                            </p>
                            <div className="flex flex-col border rounded-md border-gray-600 justify-center items-center p-2">
                                <canvas
                                    ref={canvasCrosshair}
                                    className="bg-black w-32 h-32 justify-center"
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Central dot
                                </label>
                                <label
                                    className="relative flex cursor-pointer items-center rounded-full"
                                >
                                <input
                                    id="ripple-on"
                                    type="checkbox"
                                    onChange={(e) => updateCrosshair('show_dot', e.currentTarget.checked ? 1 : 0)}
                                    className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                                />
                                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                                </label>
                                <label className="text-base leading-relaxed text-white px-3 pt-1">
                                    Gap
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={150}
                                    step={1}
                                    value={crosshairSettings.gap}
                                    onChange={(e) => updateCrosshair('gap', parseFloat(e.currentTarget.value))}
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Length
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={crosshairSettings.length}
                                    onChange={(e) => updateCrosshair('length', parseFloat(e.currentTarget.value))}
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Thickness
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={20}
                                    step={1}
                                    value={crosshairSettings.thickness}
                                    onChange={(e) => updateCrosshair('thickness', parseFloat(e.currentTarget.value))}
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Outline
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={8}
                                    step={1}
                                    value={crosshairSettings.outline}
                                    onChange={(e) => updateCrosshair('outline', parseFloat(e.currentTarget.value))}
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Red
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={255}
                                    step={1}
                                    value={crosshairSettings.red}
                                    onChange={(e) => updateCrosshair('red', parseFloat(e.currentTarget.value))}
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Green
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={255}
                                    step={1}
                                    value={crosshairSettings.green}
                                    onChange={(e) => updateCrosshair('green', parseFloat(e.currentTarget.value))}
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Blue
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={255}
                                    step={1}
                                    value={crosshairSettings.blue}
                                    onChange={(e) => updateCrosshair('blue', parseFloat(e.currentTarget.value))}
                                />
                                <label className="text-base leading-relaxed text-white px-3">
                                    Opacity
                                </label>
                                <input
                                    type="range" 
                                    className="w-48 accent-orange-400" 
                                    min={0}
                                    max={1}
                                    step={.1}
                                    value={crosshairSettings.opacity}
                                    onChange={(e) => updateCrosshair('opacity', parseFloat(e.currentTarget.value))}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-4 md:p-5 border-t">
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-gray-600 focus:outline-none
                                    bg-green-400 rounded-lg  hover:bg-green-300 min-w-24"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                    bg-red-500 rounded-lg  hover:bg-red-400 min-w-24"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}