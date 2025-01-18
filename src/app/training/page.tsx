import Canvas from "../components/Canvas"

export default function Training() {
  return (
    <div className='flex justify-center'>
      <Canvas
        params={{
          map_name: 'vertigo',
          spot_name: 'connector_to_mid',
          difficulty: 'medium',
          mouse_sensitivity: .7
        }}
      />
    </div>
  )
}