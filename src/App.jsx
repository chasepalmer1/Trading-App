import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar inOut={"Log In"}></NavBar>
    </>
  )
}

export default App
