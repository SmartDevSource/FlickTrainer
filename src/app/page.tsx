'use client'
import { useState } from "react"

import { Home } from "./components/Home"
import { Settings } from "./components/Settings"
import { Navbar } from "./components/Navbar"
import { Training } from "./components/Training"

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<string>('home')
  
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
      <Training/>
    }
    </>
  )
}

export default MainPage