import Canvas from "../components/Canvas"

import { useState } from "react"
import { StatisticsModal } from "./StatisticsModal"
import { Statistics, GameSettings } from "@/types"

interface TrainingParams {
    game_settings: GameSettings,
    onBackMenu: () => void
}

export const TrainingPage: React.FC<TrainingParams> = ({game_settings, onBackMenu}) => {
    const [statistics, setStatistics] = useState<Statistics | null>(null)

    const handleCircuitAccomplishment = (new_statistics: Statistics) => {
        setStatistics(new_statistics)
        console.log("handleCircuitAccomplishment :", new_statistics)
    }

    const handleSpotAccomplishment = (new_statistics: Statistics) => {
        setStatistics(new_statistics)
        console.log("handleSpotAccomplishment :", new_statistics)
    }

    return (
        <div className="flex flex-col items-center justify-center">
            {statistics && 
                <StatisticsModal
                    statistics={statistics}
                    game_settings={game_settings}
                    onClose={() => setStatistics(null)}
                />
            }
            <Canvas
                game_settings={game_settings}
                onCircuitAccomplished={(e)=> handleCircuitAccomplishment(e)}
                onSpotAccomplished={(e)=> handleSpotAccomplishment(e)}
            />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 
                font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500
                hover:text-white rounded duration-150"
                onClick={() => onBackMenu()}
            >
                Retour au menu principal
            </button>
        </div>
    )
}