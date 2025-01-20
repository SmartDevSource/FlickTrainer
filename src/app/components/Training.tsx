import Canvas from "./Canvas"
import { Navbar } from "./Navbar"

interface TrainingParams {
  map_name: string,
  difficulty: string,
  game_type: string
}

export const Training = ({params} : {params: TrainingParams}) => {
  return (
    <>
      <div className="flex justify-center">
        <Canvas
          params={{
            map_name: 'vertigo',
            spot_name: 'ctspawn_to_b',
            difficulty: 'easy',
            mouse_sensitivity: .7
          }}
        />
      </div>
    </>
  )
}