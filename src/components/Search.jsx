import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='bg-grey-light pt-16 px-8 pb-40'>
      <h2 className='text-grey-dark text-center text-4xl mb-10'>
        你想去哪裡？
      </h2>
      <div className='grid grid-cols-4 grid-rows-2 items-center gap-12 px-72'>
        <div className='flex flex-col col-span-2 gap-3'>
          <label htmlFor='location' className='text-grey text-2xl'>
            縣市
          </label>
          <select
            name='location'
            id='location'
            className='bg-secondary outline-none appearance-none cursor-pointer rounded-full text-grey-light px-8 py-1 h-16 text-2xl'
          >
            <option className='bg-grey-light text-grey-dark' value='臺北市'>
              臺北市
            </option>
            <option className='bg-grey-light text-grey-dark' value='新北市'>
              新北市
            </option>
            <option className='bg-grey-light text-grey-dark' value='桃園市'>
              桃園市
            </option>
          </select>
        </div>
        <div className='flex flex-col col-span-2 gap-3'>
          <label htmlFor='month' className='text-grey text-2xl'>
            月份
          </label>
          <select
            name='month'
            id='month'
            className='bg-secondary outline-none appearance-none cursor-pointer rounded-full text-grey-light px-8 py-1 h-16 text-2xl'
          >
            <option className='bg-grey-light text-grey-dark' value=''>
              未定
            </option>
            <option className='bg-grey-light text-grey-dark' value='一月'>
              一月
            </option>
            <option className='bg-grey-light text-grey-dark' value='二月'>
              二月
            </option>
          </select>
        </div>
        <div className='flex flex-col col-span-3 gap-3'>
          <span className='text-grey text-2xl'>關鍵字</span>
          <input
            type='text'
            placeholder='親子、女性獨遊...等'
            className='border-secondary bg-secondary rounded-full px-8 py-1 placeholder-grey-light h-16 focus:outline-none text-2xl'
          />
        </div>
        <a
          href='#'
          className='border-primary border-2 rounded-full h-16 text-primary self-end flex items-center justify-center transition-all hover:bg-primary hover:text-grey-light'
        >
          <AiOutlineArrowRight className='text-4xl' />
        </a>
      </div>
    </div>
  )
}

export default Search
