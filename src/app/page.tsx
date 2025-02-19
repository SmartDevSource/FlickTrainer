'use client'
import { useEffect, useState } from "react"

import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

import { SelectTraining } from "./components/SelectTraining"
import { MapPeek } from "./components/MapPeek"

import { UserSettingsModal } from "./components/UserSettingsModal"
import { Alert, AlertParams } from "./components/Alert"
import { GameSettings } from "@/types"
import { FlickTrainingPage } from "./components/Flick/FlickTrainingPage"
import { RecoilTrainingPage } from "./components/Recoil/RecoilTrainingPage"

const gameSettingsTest: GameSettings = {
  mode: 'spot',
  map_name: 'anubis',
  circuit: 'terrorist_circuit',
  spot: 'tside_connector_to_b',
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
      setCurrentPage('flick_training')
    }
  }, [gameSettings])
  
  return (
    <>
    {currentPage === 'home' ?
      <Home onClick={() => setCurrentPage('select_training')}/>
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
    {currentPage === 'select_training' &&
      <SelectTraining
        onSelect={(selection) => setCurrentPage(selection)}
      />
    }
    {currentPage === 'map_peek' &&
      <MapPeek
        onLaunchGame={(game_settings) => prepareGame(game_settings)}
        onBack={() => setCurrentPage('select_training')}
      />
    }
    {gameSettings && currentPage === 'flick_training' &&
      <FlickTrainingPage
        game_settings={gameSettings}
        onBackMenu={() => setCurrentPage('map_peek')}
      />
    }
    {currentPage === 'recoil_training' &&
      <RecoilTrainingPage
        onBackMenu={() => setCurrentPage('select_training')}
      />
    }
    {currentPage !== 'home' &&
      <Footer/>      
    }
    </>
  )
}

export default MainPage