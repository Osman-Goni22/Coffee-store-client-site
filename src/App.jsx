import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar.jSX'
import { Outlet } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='max-w-6xl mx-auto'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
