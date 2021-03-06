import React from 'react'
import Search from '../components/Search'
import Hotels from './content/Hotels'
import Restaurant from './content/Restaurant'
import Active from './content/Active'

const MainContent = () => {
  return (
    <>
      <Search />
      <Hotels />
      <Restaurant />
      <Active />
    </>
  )
}

export default MainContent
