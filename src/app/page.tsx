'use client'
import { useState } from "react"

import { Home } from "./components/Home"
import { Settings } from "./components/Settings"
import { Navbar } from "./components/Navbar"
import { Training } from "./components/Training"

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('training')

  const handleNavbarClick = (navbar_data: string) => {
    switch(navbar_data){
      case 'back_to_home':
        setCurrentPage('home')
      break
      case 'user_settings':
        alert("User settings modal")
      break
      default:
        console.log('navbar_data :', navbar_data)
    }
  }
  
  return (
    <>
    {currentPage === 'home' ?
      <Home onClick={() => setCurrentPage('settings')}/>
      :
      <Navbar onLinkClick={(navbar_data) => handleNavbarClick(navbar_data)}/>
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