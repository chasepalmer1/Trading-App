import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import PaperTrading from './pages/PaperTrading.jsx'
import PortfolioTracking from './pages/PortfolioTracking'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Routes>
        <Route path="/paperTrade" element={<PaperTrading/>}/>
        <Route path="/portTrack" element={<PortfolioTracking/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App;