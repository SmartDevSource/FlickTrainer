import { useEffect, useRef, useState } from "react"

interface UserSettingsParams {
    onClose: () => void,
    onSave: () => void
}

export const UserSettingsModal: React.FC<UserSettingsParams> = ({onClose, onSave}) => {
    const [sensitivity, setSensitivity] = useState<number>(1)

    const handleClose = () => {
        onClose()
    }
    const handleSave = () => {
        onSave()
    }
    const handleSensitivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSensitivity(parseFloat(e.currentTarget.value))
    }

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-2xl">
                <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-white dark:text-white">
                            Paramètres
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200
                                    hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex 
                                    justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={handleClose}
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
                    <div className="flex flex-col">
                        <div className="p-4 flex flex-row justify-between items-center">
                            <p className="text-base leading-relaxed text-white">
                                Sensibilité
                            </p>
                            <div className="flex items-center">
                                <label className="text-base leading-relaxed text-white px-3">
                                    {sensitivity.toFixed(2)}
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
                            </div>
                        </div>
                        <div className="p-4 flex flex-row justify-between items-center">
                            <p className="text-base leading-relaxed text-white">
                                Viseur
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-4 md:p-5 border-t">
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-gray-600 focus:outline-none
                                    bg-green-400 rounded-lg  hover:bg-green-300 min-w-24"
                            onClick={handleSave}
                        >
                            Enregistrer
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                    bg-red-500 rounded-lg  hover:bg-red-400 min-w-24"
                            onClick={handleClose}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}