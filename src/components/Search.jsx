import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='bg-secondaryBG py-10 px-5'>
      <h2 className='text-primaryText text-center text-4xl'>你想去哪裡？</h2>
      <div className='grid grid-cols-2 items-center gap-3'>
        <div className='flex flex-col'>
          <span className='text-gray-500'>縣市</span>
          <input
            type='text'
            placeholder='台北市'
            className='border-secondary bg-secondary rounded-2xl px-3 py-1 placeholder-secondaryBG'
          />
        </div>
        <div className='flex flex-col'>
          <span>月份</span>
          <input
            type='text'
            placeholder='未定'
            className='border-secondary bg-secondary rounded-2xl px-3 py-1 placeholder-secondaryBG'
          />
        </div>
        <div className='flex flex-col'>
          <span>關鍵字</span>
          <input
            type='text'
            placeholder='親子、女性獨遊...等'
            className='border-secondary bg-secondary rounded-2xl px-3 py-1 placeholder-secondaryBG'
          />
        </div>
        <a
          href='#'
          className='border-primary border-2 rounded-2xl text-primary flex justify-center py-2 mt-5 transition-all hover:bg-primary hover:text-secondaryBG'
        >
          <AiOutlineArrowRight />
        </a>
      </div>
    </div>
  )
}

export default Search
