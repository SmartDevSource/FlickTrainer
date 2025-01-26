import { GameSettings, Statistics } from "@/types"
import { useEffect } from "react"
import { getRoundedPlayerKD } from "@/functions/utils"

interface StatisticsModalParams {
    statistics: Statistics
    game_settings: GameSettings,
    onClose: () => void
}

export const StatisticsModal: React.FC<StatisticsModalParams> = ({statistics, game_settings, onClose}) => {

    const comparePerformances = () => {
        const playerKd = statistics.kills / (statistics.deaths === 0 ? 1 : statistics.deaths)
        switch(game_settings.mode){
            case 'circuit':
                const circuitBestScore = localStorage.getItem(`${game_settings.map_name}_${game_settings.circuit}_${game_settings.difficulty}`)
                if (!circuitBestScore){

                }
            break
            case 'spot':
                const spotHeader = `${game_settings.map_name}_${game_settings.spot}_${game_settings.difficulty}`
                const spotStats = JSON.stringify({kills: statistics.kills, deaths: statistics.deaths, time_elapsed: statistics.time_elapsed, kd: playerKd})

                const spotBestScore = localStorage.getItem(spotHeader)
                if (!spotBestScore){
                    localStorage.setItem(spotHeader, spotStats)
                } else {
                    console.log("Last spotBestScore :", JSON.parse(spotBestScore))
                }
            break
        }
    }

    useEffect(()=>{
        comparePerformances()
    }, [])

    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 select-none"
        >
            <div className="relative p-4 w-full max-w-sm">
                <div className="relative bg-gray-700 rounded-lg shadow">
                    <div className="flex items-center flex-col justify-center p-4 md:p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-white">
                            Performances on {game_settings.map_name}
                        </h3>
                        <div className="pt-3">
                            {game_settings.mode === 'circuit' ?
                                <>
                                    <h4 className="text-md font-semibold text-white">
                                        CIRCUIT : {game_settings.circuit.split('_').join(' ').toUpperCase()}
                                    </h4>
                                </>
                                :
                                <>
                                    <h4 className="text-md font-semibold text-white">
                                        SPOT : {game_settings.spot.split('_').join(' ').toUpperCase()}
                                    </h4>
                                </>
                            }
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col p-3">
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.25s_forwards]"
                            >
                                <p> Difficulty : </p>
                                <p> {game_settings.difficulty} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.50s_forwards]"
                            >
                                <p> Targets shot : </p>
                                <p> {statistics.kills} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_0.75s_forwards]"
                            >
                                <p> Deaths : </p>
                                <p> {statistics.deaths} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_1s_forwards]"
                            >
                                <p> KD : </p>
                                <p> {getRoundedPlayerKD(statistics.kills, statistics.deaths)} </p>
                            </div>
                            <div className="w-full flex flex-row justify-between text-white 
                                opacity-0 animate-[fadeIn_0.5s_ease-in-out_1.25s_forwards]"
                            >
                                <p> Time : </p>
                                <p> {statistics.time_elapsed} seconds </p>
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
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}