import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import paperTrading from './pages/paperTrading.jsx'
import portfolioTracking from './pages/portfolioTracking.jsx'


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<paperTrading/>}/>
        <Route path="/portTrack" element={<portfolioTracking/>}/>
      </Routes>
    </>
  )
}

export default App;