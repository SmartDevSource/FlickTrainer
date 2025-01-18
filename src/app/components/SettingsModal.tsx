import Link from "next/link"

interface SettingsParams {
    onClose: () => void,
    selectedMap: string
}

export const SettingsModal: React.FC<SettingsParams> = ({onClose, selectedMap}) => {
    const handleClose = () => {
        onClose()
    }

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
            <div className="relative p-4 w-full max-w-2xl">
                <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-white dark:text-white">
                            Configuration de la map {selectedMap}
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

                    <div className="p-4 md:p-5 space-y-4">
                        <p className="text-base leading-relaxed text-white">
                            Ceci est un texte
                        </p>
                    </div>

                    <div className="flex items-center justify-end p-4 md:p-5 border-t">
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-600 focus:outline-none
                                    bg-green-400 rounded-lg  hover:bg-green-300"
                        >
                            Lancer
                        </button>
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none
                                    bg-red-500 rounded-lg  hover:bg-red-400"
                            onClick={() => handleClose()}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
