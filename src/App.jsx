import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Add_product from './components/Add_product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Add' element={<Add_product/>}/>
        </Routes>
    </>
  )
}

export default App
