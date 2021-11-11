import React from 'react'
import cityOptions from '../utils/cityOption.json'
import months from '../utils/months.json'
import arrow from '../assets/arrow.png'

const Search = () => {
  return (
    <div className='bg-grey-light flex flex-col justify-center px-20 lg:px-40 xl:px-72 pt-8 md:pt-16 pb-40'>
      <h2 className='text-grey-dark text-center text-4xl mb-10 whitespace-nowrap'>
        你想去哪裡？
      </h2>
      <div className='flex flex-col items-center md:grid grid-cols-4 grid-rows-2 md:items-end md:gap-12 gap-10'>
        <div className='flex flex-col col-span-2 gap-3 w-full'>
          <label htmlFor='location' className='text-grey text-2xl'>
            縣市
          </label>
          <select
            name='location'
            id='location'
            className='bg-secondary outline-none appearance-none cursor-pointer rounded-full text-grey-light px-8 py-1 h-12 md:h-16 text-2xl'
          >
            {cityOptions.map((option, i) => {
              return (
                <option
                  key={i}
                  className='bg-grey-light text-grey-dark'
                  value={option.CITY_NAME}
                >
                  {option.CITY_NAME}
                </option>
              )
            })}
          </select>
        </div>
        <div className='flex flex-col col-span-2 gap-3 w-full'>
          <label htmlFor='month' className='text-grey text-2xl'>
            月份
          </label>
          <select
            name='month'
            id='month'
            className='bg-secondary outline-none appearance-none cursor-pointer rounded-full text-grey-light px-8 py-1 h-12 md:h-16 text-2xl'
          >
            <option className='bg-grey-light text-grey-dark' value=''>
              未定
            </option>
            {months.map((month, i) => {
              return (
                <option
                  key={i}
                  className='bg-grey-light text-grey-dark'
                  value={month.MONTH_NAME}
                >
                  {month.MONTH_NAME}
                </option>
              )
            })}
          </select>
        </div>
        <div className='flex flex-col col-span-3 gap-3 w-full'>
          <span className='text-grey text-2xl'>關鍵字</span>
          <input
            type='text'
            placeholder='親子、女性獨遊...等'
            className='border-secondary bg-secondary rounded-full px-8 py-1 placeholder-grey-light h-12 md:h-16 focus:outline-none text-2xl'
          />
        </div>
        <a
          href='#'
          className='border-primary border-8 md:border-2 rounded-full p-5 md:py-3 mt-6 md:mt-0 text-primary md:self-end flex items-center justify-center transition-all hover:bg-primary hover:text-grey-light'
        >
          <img src={arrow} alt='search' />
        </a>
      </div>
    </div>
  )
}

export default Search
