import CanvasFlick from "./CanvasFlick"

import { useEffect, useState } from "react"
import { StatisticsModal } from "../StatisticsModal"
import { Statistics, GameSettings } from "@/types"

interface TrainingParams {
    game_settings: GameSettings,
    onBackMenu: () => void
}

export const FlickTrainingPage: React.FC<TrainingParams> = ({game_settings, onBackMenu}) => {
    const [statistics, setStatistics] = useState<Statistics | null>(null)
    const [lastBestStatistics, setLastBestStatistics] = useState<Statistics | null>(null)

    const getLastStatistics = () => {
        switch(game_settings.mode){
            case 'circuit':
                const circuitHeader = `${game_settings.map_name}_${game_settings.circuit}_${game_settings.difficulty}`
                const lastCircuitBestScore = localStorage.getItem(circuitHeader)
                if (lastCircuitBestScore){
                    setLastBestStatistics(JSON.parse(lastCircuitBestScore))
                }
            break
            case 'spot':
                const spotHeader = `${game_settings.map_name}_${game_settings.spot}_${game_settings.difficulty}`
                const lastSpotBestScores = localStorage.getItem(spotHeader)
                if (lastSpotBestScores){
                    setLastBestStatistics(JSON.parse(lastSpotBestScores))
                }
            break
        }
    }

    const handleCircuitAccomplishment = (new_statistics: Statistics) => {
        setStatistics(new_statistics)
    }

    const handleSpotAccomplishment = (new_statistics: Statistics) => {
        setStatistics(new_statistics)
    }

    useEffect(()=>{
        if (!lastBestStatistics){
            getLastStatistics()
        }
    }, [])

    return (
        <div className="flex flex-col items-center justify-center">
            {statistics &&
                <StatisticsModal
                    statistics={statistics}
                    game_settings={game_settings}
                    onClose={() => setStatistics(null)}
                    onUpdateStatistics={() => getLastStatistics()}
                />
            }
            {lastBestStatistics &&
                <div
                    className="flex flex-col justify-center items-center 
                        bg-gray-700 rounded-lg shadow mt-5 select-none min-w-[250px] py-1"
                >
                    <span className="border-b w-full text-white text-lg text-center pb-1">
                        {game_settings.map_name.toUpperCase()}
                    </span>
                    <div className="flex justify-between w-full px-2">
                        <span className="text-white p-1">
                            {game_settings.mode === 'circuit' ?
                                'Circuit :'
                                :
                                'Spot :'
                            }
                        </span>
                        <span className="text-white p-1">
                            {game_settings.mode === 'circuit' ?
                                game_settings.circuit.split('_').join(' ').toUpperCase()
                                :
                                game_settings.spot.split('_').join(' ').toUpperCase()
                            }
                        </span>
                    </div>
                    <div className="flex justify-between w-full px-2 border-b">
                        <span className="text-white p-1">
                            Difficulty :
                        </span>
                        <span className="text-white p-1">
                            {game_settings.difficulty}
                        </span>
                    </div>
                    <div className="flex justify-between w-full px-2">
                        <span className="text-white p-1">
                            Top KD :
                        </span>
                        <span className="text-yellow-300 p-1">
                            {lastBestStatistics.kd.toFixed(2)}
                        </span>
                    </div>
                    <div className="flex justify-between w-full px-2">
                        <span className="text-white p-1">
                            Top time :
                        </span>
                        <span className="text-yellow-300 p-1">
                            {lastBestStatistics.time_elapsed} seconds
                        </span>
                    </div>
                    <div className="flex justify-between w-full px-2">
                        <span className="text-white p-1">
                            Top precision :
                        </span>
                        {lastBestStatistics.precision &&
                            <span
                            className={`
                                ${lastBestStatistics.precision < 33 ?
                                    "text-red-600" :
                                    lastBestStatistics.precision >= 33 && lastBestStatistics.precision < 66 ?
                                    "text-orange-500" :
                                    "text-lime-500"
                                } 
                                p-1`}>
                            {lastBestStatistics.precision} %
                        </span>
                        }

                    </div>
                </div>
            }
            <CanvasFlick
                game_settings={game_settings}
                onCircuitAccomplished={(e)=> handleCircuitAccomplishment(e)}
                onSpotAccomplished={(e)=> handleSpotAccomplishment(e)}
            />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 
                font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500
                hover:text-white rounded duration-150"
                onClick={() => onBackMenu()}
            >
                Back to map selection
            </button>
        </div>
    )
}