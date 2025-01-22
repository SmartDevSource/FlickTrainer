import Canvas from "./Canvas"
import { Navbar } from "./Navbar"

interface TrainingParams {
  map_name: string,
  spot_name: string,
  difficulty: string,
}

export const Training: React.FC<TrainingParams> = ({map_name, spot_name, difficulty}) => {
  return (
    <>
      <div className="flex justify-center">
        <Canvas
          params={{
            map_name: map_name,
            spot_name: spot_name,
            difficulty: difficulty,
          }}
        />
      </div>
    </>
  )
}