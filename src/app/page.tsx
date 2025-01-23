'use client'
import { useEffect, useState } from "react"

import { Home } from "./components/Home"
import { MapPeek } from "./components/MapPeek"
import { Navbar } from "./components/Navbar"
import { Training } from "./components/Training"
import { UserSettingsModal } from "./components/UserSettingsModal"
import { Alert, AlertParams } from "./components/Alert"
import { GameSettings } from "@/types"

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('map_peek')
  const [showUserSettings, setShowUserSettings] = useState<boolean>(false)
  const [messageAlert, setMessageAlert] = useState<AlertParams | null>(null)
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(null)

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
      break
    }
  }

  const handleUserSettingsSave = () => {
    setShowUserSettings(false)
    setMessageAlert({
      type: 'success',
      title: 'Sauvegarde effectuée avec succès.',
      message: 'Vos préférences ont été mises à jour et seront effectives dés votre prochain entrainement'
    })
  }

  const prepareGame = (game_settings: GameSettings) => {
    setGameSettings(game_settings)
  }

  useEffect(()=>{
    if (messageAlert){
      setTimeout(()=>{
        setMessageAlert(null)
      }, 5000)
    }
  }, [messageAlert])

  useEffect(()=>{
    if (gameSettings){
      setCurrentPage('training')
    }
  }, [gameSettings])
  
  return (
    <>
    {currentPage === 'home' ?
      <Home onClick={() => setCurrentPage('map_peek')}/>
      :
      <Navbar onLinkClick={(navbar_data) => handleNavbarClick(navbar_data)}/>
    }
    {messageAlert && 
      <Alert
        title={messageAlert.title}
        message={messageAlert.message}
        type={messageAlert.type}
      />
    }

    {showUserSettings &&
      <UserSettingsModal
        onClose={() => setShowUserSettings(false)}
        onSave={() => handleUserSettingsSave()}
      />
    }
    {currentPage === 'map_peek' &&
      <MapPeek
        onLaunchGame={(game_settings) => prepareGame(game_settings)}
      />
    }
    {gameSettings && currentPage === 'training' &&
      <Training
        game_settings={gameSettings}
      />
    }
    </>
  )
}

export default MainPage