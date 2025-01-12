import Image from "next/image"
import Canvas from "./components/Canvas"

export default function Home() {
  return (
    <div className='flex justify-center'>
      <Canvas
        params={{map_name: 'vertigo', spot_name: 'ctspawn'}}
      />
    </div>
  )
}