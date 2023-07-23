import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='font-rubik relative bg-background'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
