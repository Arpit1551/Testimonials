import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/Landing/Landing'
import Parthner from './components/Partners/Parthner'
import Sample from './components/Sample/Sample'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App