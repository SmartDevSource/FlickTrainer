'use client'
import { useEffect, useState } from "react"

import { Home } from "./components/Home"
import { MapPeek } from "./components/MapPeek"
import { Navbar } from "./components/Navbar"

import { UserSettingsModal } from "./components/UserSettingsModal"
import { Alert, AlertParams } from "./components/Alert"
import { GameSettings } from "@/types"
import { TrainingPage } from "./components/TrainingPage"

const gameSettingsTest: GameSettings = {
  mode: 'spot',
  map_name: 'nuke',
  circuit: 'ct_circuit',
  spot: 'redbox_to_outside',
  difficulty: 'easy',
  spot_objective: 25
}

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('home')
  const [showUserSettings, setShowUserSettings] = useState<boolean>(false)
  const [messageAlert, setMessageAlert] = useState<AlertParams | null>(null)
  const [gameSettings, setGameSettings] = useState<GameSettings | null>(gameSettingsTest)

  const handleNavbarClick = (navbar_data: string) => {
    switch(navbar_data){
      case 'back_to_home':
        setCurrentPage('home')
      break
      case 'map_peek':
        setCurrentPage('map_peek')
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
      title: 'Saving completed successfully.',
      message: 'Your preferences have been updated and will take effect from your next training session.'
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
      <TrainingPage
        game_settings={gameSettings}
        onBackMenu={() => setCurrentPage('map_peek')}
      />
    }
    </>
  )
}

export default MainPage