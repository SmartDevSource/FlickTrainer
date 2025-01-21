'use client'
import { useState } from "react"

import { Home } from "./components/Home"
import { MapPeek } from "./components/MapPeek"
import { Navbar } from "./components/Navbar"
import { Training } from "./components/Training"
import { UserSettingsModal } from "./components/UserSettingsModal"

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('training')
  const [showUserSettings, setShowUserSettings] = useState<boolean>(false)

  const handleNavbarClick = (navbar_data: string) => {
    switch(navbar_data){
      case 'back_to_home':
        setCurrentPage('home')
      break
      case 'user_settings':
        setShowUserSettings(true)
      break
      default:
        console.log('navbar_data :', navbar_data)
    }
  }

  const handleUserSettingsSave = () => {
    setShowUserSettings(false)
  }
  
  return (
    <>
    {currentPage === 'home' ?
      <Home onClick={() => setCurrentPage('settings')}/>
      :
      <Navbar onLinkClick={(navbar_data) => handleNavbarClick(navbar_data)}/>
    }
    {showUserSettings &&
      <UserSettingsModal
        onClose={() => setShowUserSettings(false)}
        onSave={() => handleUserSettingsSave()}
      />
    }
    {currentPage === 'settings' &&
      <MapPeek/>
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