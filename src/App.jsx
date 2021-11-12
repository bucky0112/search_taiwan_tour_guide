import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import HotelsPage from './views/HotelsPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainContent className='relative' />} />
        <Route path='/hotels' element={<HotelsPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
