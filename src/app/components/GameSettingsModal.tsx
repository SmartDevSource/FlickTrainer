import { useState } from "react"
import { ImageModal } from "./ImageModal"
import { GameSettings } from "@/types"
import { getMapCircuits } from "@/functions/Flick/maps"

interface SettingsParams {
    onClose: () => void,
    onValid: (params: GameSettings) => void,
    selectedMap: string
}

export const GameSettingsModal: React.FC<SettingsParams> = ({onClose, onValid, selectedMap}) => {
    const spots = [...getMapCircuits(selectedMap).ct_circuit, ...getMapCircuits(selectedMap).terrorist_circuit]
    const [selectedMode, setSelectedMode] = useState<'circuit' | 'spot'>('circuit')
    const [showSpots, setShowSpots] = useState<boolean>(false)
    const [showImageModal, setShowImageModal] = useState<string>('')
    const [selectedCircuit, setSelectedCircuit] = useState<string>('ct_circuit')
    const [selectedSpot, setSelectedSpot] = useState<string>(spots[0]?.name ?? '')
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('easy')
    const [spotObjective, setSpotObjective] = useState<number>(25)

    const normalizeCircuitName = (circuit_name: string) => {
        const firstWord = circuit_name.split('_')[0]
        return firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
    }

    const normalizeSpotName = (spot_name: string) => {
        return spot_name.split('_').join(' ').toUpperCase()
    }

    const handleClose = () => {
        onClose()
    }

    const handleLaunchTraining = () => {
        onValid({
            mode: selectedMode,
            map_name: selectedMap,
            circuit: selectedCircuit,
            spot: selectedSpot,
            difficulty: selectedDifficulty,
            spot_objective: spotObjective
        })
    }

    const updateModeSelection = () => {
        setSelectedMode((prev:string) => prev === 'circuit' ? 'spot' : 'circuit')
    }

    const handleCircuitSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCircuit(e.target.value)
    }

    const handleDifficultySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDifficulty(e.target.value)
    }

    const handleSpotObjective = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSpotObjective(parseInt(e.target.value))
    }

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
            {showImageModal &&
                <ImageModal
                    onClose={() => setShowImageModal('')}
                    image_path={showImageModal}
                    selectedMap={selectedMap}
                />
            }

            <div className="relative p-4 w-full max-w-2xl select-none">
                <div className="relative bg-gray-700 rounded-lg shadow">
                    <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-white">
                            Settings for {selectedMap} map
                        </h3>
                    </div>

                    {!showSpots &&
                    <>
                        <div className="flex flex-col">
                            <div className="p-4 flex flex-row justify-between items-center">
                                <p className="text-base leading-relaxed text-white">
                                    Game mode
                                </p>
                                <div>
                                    <button
                                        className={`px-4 py-1 rounded-tl-lg rounded-bl-lg min-w-24
                                            ${selectedMode === 'circuit' ? "bg-gray-300" : "bg-gray-500"}`}
                                        onClick={() => updateModeSelection()}
                                    >
                                        Circuit
                                    </button>
                                    <button
                                        className={`px-4 py-1 rounded-tr-lg rounded-br-lg min-w-24
                                            ${selectedMode === 'spot' ? "bg-gray-300" : "bg-gray-500"}`}
                                            onClick={() => updateModeSelection()}
                                    >
                                        Spot
                                    </button>
                                </div>
                            </div>
                            <div className="p-4 flex flex-row justify-between items-center">
                                <p className="text-base leading-relaxed text-white">
                                    {selectedMode.charAt(0).toUpperCase() + selectedMode.slice(1)} selection
                                </p>
                                {selectedMode === 'spot' &&
                                    <button
                                        type="button"
                                        className="py-1 px-5 ms-3 text-lg text-gray-600 focus:outline-none
                                                bg-gray-400 rounded-lg  hover:bg-gray-300 min-w-16"
                                        onClick={() => setShowSpots(true)}
                                    >
                                        {normalizeSpotName(selectedSpot)}
                                    </button>
                                }
                                {selectedMode === 'circuit' &&
                                    <form className="max-w-sm">
                                        <select
                                            id="circuit_type"
                                            className="bg-gray-50 border border-gray-300
                                                text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                                focus:border-blue-500 block w-full p-2.5"
                                            onChange={handleCircuitSelection}
                                        >
                                            <option className="font-bold" value="ct_circuit">Ct</option>
                                            <option className="font-bold" value="terrorist_circuit">Terrorist</option>
                                        </select>
                                    </form>
                                }

                            </div>

                            <div className="p-4 flex flex-row justify-between items-center">
                                <p className="text-base leading-relaxed text-white">
                                    Difficulty
                                </p>
                                <form className="max-w-sm">
                                    <select
                                        id="difficulty"
                                        className="bg-gray-50 border border-gray-300
                                            text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                            focus:border-blue-500 block w-full p-2.5"
                                        onChange={handleDifficultySelect}
                                    >
                                        <option className="font-bold" value="easy">Easy</option>
                                        <option className="font-bold" value="medium">Medium</option>
                                        <option className="font-bold" value="hard">Hard</option>
                                        <option className="font-bold" value="faceit_peek">Faceit Peek</option>
                                    </select>
                                </form>
                            </div>
                            {selectedMode === 'spot' &&
                                <div className="p-4 flex flex-row justify-between items-center">
                                    <p className="text-base leading-relaxed text-white">
                                        Objective
                                    </p>
                                    <form className="max-w-sm">
                                        <select
                                            id="kills_count"
                                            className="bg-gray-50 border border-gray-300
                                                text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                                focus:border-blue-500 block w-full p-2.5"
                                            onChange={handleSpotObjective}
                                        >
                                            <option className="font-bold" value="25">25 kills</option>
                                            <option className="font-bold" value="50">50 kills</option>
                                            <option className="font-bold" value="100">100 kills</option>
                                            <option className="font-bold" value="200">200 kills</option>
                                        </select>
                                    </form>
                                </div>
                            }

                        </div>

                        <div className="flex items-center justify-end p-4 md:p-5 border-t">
                            <button
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm text-gray-600 focus:outline-none
                                        bg-green-400 rounded-lg  hover:bg-green-300 min-w-24"
                                onClick={() => handleLaunchTraining()}
                            >
                                Go
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                        bg-red-500 rounded-lg  hover:bg-red-400 min-w-24"
                                onClick={() => handleClose()}
                            >
                                Close
                            </button>
                        </div>
                    </>
                    }

                    {showSpots &&
                    <div className="flex justify-center p-3">
                        <div className="grid grid-cols-2 gap-8 bg-transparent max-h-[350px] overflow-y-auto">
                            {spots.map((spot, index) => (
                                <div
                                    key={`spot${index}`}
                                    className="flex justify-center items-center flex-col p-2"
                                >
                                    <p className="text-white">
                                        {normalizeSpotName(spot.name ?? '')}
                                    </p>
                                    <img
                                        src={`/gfx/maps/${selectedMap}/${spot.circuit}/${spot.name}.png`}
                                        className={`max-h-[150px] object-contain rounded-lg select-none cursor-pointer 
                                            ${selectedSpot === spot.name ? "p-0.5 bg-white" : ""}`}
                                        onClick={() => setSelectedSpot(spot.name ?? '')}
                                    />
                                    <button
                                        className="my-2 px-3 text-lg text-gray-700 focus:outline-none
                                            bg-gray-300 rounded-lg hover:bg-gray-400 w-full"
                                        onClick={() => setShowImageModal(`/gfx/maps/${selectedMap}/${spot.circuit}/${spot.name}.png`)}
                                    >
                                        Watch
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    }

                    {showSpots &&
                    <div className="flex items-center justify-end p-4 md:p-5 border-t">
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-gray-600 focus:outline-none
                                    bg-green-400 rounded-lg  hover:bg-green-300 min-w-24"
                            onClick={() => setShowSpots(false)}
                        >
                            Select
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                    bg-red-500 rounded-lg  hover:bg-red-400 min-w-24"
                            onClick={() => handleClose()}
                        >
                            Close
                        </button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}