import Canvas from "../components/Canvas"
import { Statistics, GameSettings } from "@/types"

interface TrainingParams {
    game_settings: GameSettings,
}

export const TrainingPage: React.FC<TrainingParams> = ({game_settings}) => {

      const handleCircuitAccomplishment = (statistics: Statistics) => {
        console.log("handleCircuitAccomplishment :", statistics)
      }
    
      const handleSpotAccomplishment = (statistics: Statistics) => {
        console.log("handleSpotAccomplishment :", statistics)
      }

    return (
        <div className="flex justify-center">
            <Canvas
                game_settings={game_settings}
                onCircuitAccomplished={(e)=> handleCircuitAccomplishment(e)}
                onSpotAccomplished={(e)=> handleSpotAccomplishment(e)}
            />
        </div>
    )
}