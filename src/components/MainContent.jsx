import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Search from '../views/Search'
import Hotels from '../views/Hotels'

const MainContent = () => {
  return (
    <Routes>
      <Route path='/' element={<Search />} />
      <Route path='/hotels' element={<Hotels />} />
    </Routes>
  )
}

export default MainContent
