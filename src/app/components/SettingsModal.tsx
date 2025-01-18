import Link from "next/link"
import { useEffect, useState } from "react"
import { ImageModal } from "./ImageModal"

interface SettingsParams {
    onClose: () => void,
    selectedMap: string
}

const circuits = [
    "circuit_1",
    "circuit_2",
    "circuit_3",
]

export const SettingsModal: React.FC<SettingsParams> = ({onClose, selectedMap}) => {
    const [selectedMode, setSelectedMode] = useState<'circuit' | 'spot'>('circuit')
    const [gamePathType, setGamePathType] = useState<string>('')
    const [showImageModal, setShowImageModal] = useState<string>('')
    const [selectedCircuit, setSelectedCircuit] = useState<string>('')
    const [selectedSpot, setSelectedSpot] = useState<string>('')

    const handleClose = () => {
        onClose()
    }

    const updateModeSelection = () => {
        setSelectedMode((prev:string) => prev === 'circuit' ? 'spot' : 'circuit')
    }

    const handleGamePathType = (show: boolean) => {
        switch(show){
            case true:
                setGamePathType(selectedMode)
            break
            case false:
                setGamePathType('')
            break
        }
    }

    useEffect(()=>{
        switch(selectedMode){
            case 'circuit':
                setSelectedCircuit('circuit_1')
            break
            case 'spot':
                setSelectedCircuit('spot_1')
            break
        }
    }, [selectedMode])

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
            {showImageModal && 
                <ImageModal
                    onClose={() => setShowImageModal('')}
                    image_path={showImageModal}
                />
            }
            <div className="relative p-4 w-full max-w-2xl">
                <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-white dark:text-white">
                            Configuration pour la map {selectedMap}
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200
                                    hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex 
                                    justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => handleClose()}
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>

                    {!gamePathType && 
                    <>
                        <div className="flex flex-col">
                            <div className="p-4 flex flex-row justify-between items-center">
                                <p className="text-base leading-relaxed text-white">
                                    Mode de jeu 
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
                                    Sélection du {selectedMode} 
                                </p>
                                <button
                                    type="button"
                                    className="py-1 px-5 ms-3 text-lg text-gray-600 focus:outline-none
                                            bg-gray-400 rounded-lg  hover:bg-gray-300 min-w-16"
                                    onClick={() => handleGamePathType(true)}
                                >
                                    ...
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-end p-4 md:p-5 border-t">
                            <button
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm text-gray-600 focus:outline-none
                                        bg-green-400 rounded-lg  hover:bg-green-300 min-w-24"
                            >
                                Go
                            </button>
                            <button
                                type="button"
                                className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                        bg-red-500 rounded-lg  hover:bg-red-400 min-w-24"
                                onClick={() => handleClose()}
                            >
                                Fermer
                            </button>
                        </div>
                    </>
                    }
                    {gamePathType === 'circuit' &&
                    <div className="flex justify-center p-3">
                        <div className="grid grid-cols-3 gap-8 bg-transparent">
                            {circuits.map((circuit, index) => (
                                <div
                                    key={`circuit${index}`}
                                    className="flex justify-center items-center flex-col"
                                >
                                    <img
                                        src={`/web/images/map_circuits/${selectedMap}/${circuit}.png`}
                                        className={`max-h-[150px] object-contain rounded-lg select-none cursor-pointer 
                                            ${selectedCircuit === circuit ? "p-0.5 bg-white" : ""}`}
                                        onClick={() => setSelectedCircuit(circuit)}
                                    />
                                    <button
                                        className="my-2 px-3 text-lg text-gray-700 focus:outline-none
                                            bg-gray-300 rounded-lg hover:bg-gray-400 w-full"
                                        onClick={() => setShowImageModal(`/web/images/map_circuits/${selectedMap}/${circuit}.png`)}
                                    >
                                        Voir
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    }
                    {gamePathType === 'spot' &&
                    <>
                        <h1>Spot !</h1>
                    </>
                    }
                    {gamePathType &&
                    <div className="flex items-center justify-end p-4 md:p-5 border-t">
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                    bg-red-500 rounded-lg  hover:bg-red-400 flex items-center justify-center"
                            onClick={() => handleGamePathType(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-gray-600 focus:outline-none
                                    bg-green-400 rounded-lg  hover:bg-green-300 min-w-24"
                        >
                            Valider
                        </button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}