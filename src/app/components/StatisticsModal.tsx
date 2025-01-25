import { Statistics } from "@/types"

interface StatisticsModalParams {
    statistics: Statistics
    onClose: () => void
}

export const StatisticsModal: React.FC<StatisticsModalParams> = ({statistics, onClose}) => {
    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 select-none"
        >
            <div className="relative p-4 w-full max-w-sm">
                <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-white dark:text-white">
                            Performances
                        </h3>
                    </div>
                    <div className="flex flex-col">
                        <div className="p-4 flex flex-row justify-between items-center">
                            <div className="flex flex-col">
                                <p className="text-white">
                                    Cibles abattues : {statistics.kills}
                                </p>
                                <p className="text-white">
                                    Morts : {statistics.deaths}
                                </p>
                                <p className="text-white">
                                    KD : {(statistics.kills / (statistics.deaths === 0 ? 1 : statistics.deaths)).toFixed(2)}
                                </p>
                                <p className="text-white">
                                    En {statistics.time_elapsed} secondes
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end p-4 md:p-5 border-t">
                        <button
                            type="button"
                            className="py-2.5 px-5 ms-3 text-sm text-white focus:outline-none
                                    bg-red-500 rounded-lg hover:bg-red-400 min-w-24"
                            onClick={() => onClose()}
                        >
                            Fermer
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}