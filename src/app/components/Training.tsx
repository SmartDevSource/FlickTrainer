import Canvas from "./Canvas"
import { Navbar } from "./Navbar"

interface TrainingParams {
  map_name: string,
  spot_name: string,
  difficulty: string,
  mouse_sensitivity: number
}

export const Training: React.FC<TrainingParams> = ({map_name, spot_name, difficulty, mouse_sensitivity}) => {
  return (
    <>
      <div className="flex justify-center">
        <Canvas
          params={{
            map_name: map_name,
            spot_name: spot_name,
            difficulty: difficulty,
            mouse_sensitivity: mouse_sensitivity
          }}
        />
      </div>
    </>
  )
}