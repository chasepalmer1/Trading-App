import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import PaperTrading from './pages/PaperTrading.jsx'
import PortfolioTracking from './pages/PortfolioTracking'


function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<PaperTrading/>}/>
        <Route path="/portTrack" element={<PortfolioTracking/>}/>
      </Routes>
    </>
  )
}

export default App;