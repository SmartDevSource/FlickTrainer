import Canvas from "./Canvas"
import { GameSettings } from "@/types"

export const Training = ({game_settings}: {game_settings: GameSettings}) => {
  return (
    <>
      <div className="flex justify-center">
        <Canvas
          game_settings={game_settings}
        />
      </div>
    </>
  )
}