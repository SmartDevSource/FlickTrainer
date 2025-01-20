'use client'
import { useState } from "react"

import { Home } from "./components/Home"
import { Settings } from "./components/Settings"
import { Navbar } from "./components/Navbar"
import { Training } from "./components/Training"

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('training')
  
  return (
    <>
    {currentPage === 'home' ?
      <Home onClick={() => setCurrentPage('settings')}/>
      :
      <Navbar/>
    }
    {currentPage === 'settings' &&
      <Settings/>
    }
    {currentPage === 'training' &&
      <Training
        map_name = "vertigo"
        spot_name = "ctspawn_to_b"
        difficulty = "easy"
        mouse_sensitivity = {.7}
      />
    }
    </>
  )
}

export default MainPage