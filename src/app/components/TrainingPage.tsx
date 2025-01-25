import Canvas from "../components/Canvas"
import { Statistics, GameSettings } from "@/types"

interface TrainingParams {
    game_settings: GameSettings,
    onBackMenu: () => void
}

export const TrainingPage: React.FC<TrainingParams> = ({game_settings, onBackMenu}) => {

      const handleCircuitAccomplishment = (statistics: Statistics) => {
        console.log("handleCircuitAccomplishment :", statistics)
      }
    
      const handleSpotAccomplishment = (statistics: Statistics) => {
        console.log("handleSpotAccomplishment :", statistics)
      }

    return (
        <div className="flex flex-col items-center justify-center">
            <Canvas
                game_settings={game_settings}
                onCircuitAccomplished={(e)=> handleCircuitAccomplishment(e)}
                onSpotAccomplished={(e)=> handleSpotAccomplishment(e)}
            />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-600 
                font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500
                hover:text-white rounded duration-150"
                onClick={() => onBackMenu()}
            >
                Retour au menu principal
            </button>
        </div>
    )
}