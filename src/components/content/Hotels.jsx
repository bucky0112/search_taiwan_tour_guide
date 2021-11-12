import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { apiGetAllHotel } from '../../request/api'
import defaultImg from '../../assets/default_hotel.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Card from '../Card'

const hotelsState = {
  showState: [],
  showNum: 6,
  prevNum: 0,
  passNum: 0
}

const hotelsReducer = (state, action) => {
  switch (action.type) {
    case 'getAllData':
      return {
        ...state,
        showState: action.payload,
        passNum: state.prevNum,
        showNum: state.showNum * 2
      }
    default:
      return state
  }
}

const Hotels = () => {
  const [state, hotelsDispatch] = useReducer(hotelsReducer, hotelsState)

  const fetchAllHotel = async (showNum, passNum) => {
    try {
      const { status, data } = await apiGetAllHotel(showNum, passNum)
      status === 200 && hotelsDispatch({ type: 'getAllData', payload: data })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchAllHotel(6, 0)
  }, [])

  const { showState } = state

  const searchHotels = useSelector((state) => state.searchData.hotels)

  useEffect(() => {
    searchHotels.length > 0 &&
      hotelsDispatch({ type: 'getAllData', payload: searchHotels })
  }, [searchHotels])

  return (
    <div className='flex flex-col px-10 xl:px-40 pt-5 gap-5'>
      <h2 className='items-start text-4xl font-normal'>旅宿</h2>
      <div className='flex flex-row overflow-x-scroll xl:overflow-x-visible space-x-8 xl:flex-col gap-10 xl:justify-center text-grey-dark'>
        <div className='flex flex-nowrap pb-8 xl:pb-0 xl:grid grid-cols-7 xl:grid-cols-3 grid-rows-2 gap-x-5 gap-y-10'>
          {showState.length > 0 &&
            showState.map((hotel, i) => {
              const { Address } = hotel

              const counties = Address.slice(0, 3)
              const township = Address.slice(3, 6)

              return (
                <Card
                  defaultImg={defaultImg}
                  data={hotel}
                  counties={counties}
                  township={township}
                  key={i}
                />
              )
            })}
        </div>
        <div className='flex flex-col xl:flex-row justify-center xl:justify-end'>
          <a
            href='#'
            className='bg-secondary p-3 rounded-full xl:block flex gap-5 flex-col items-center'
          >
            <AiOutlineArrowRight className='text-7xl text-grey-light' />
            <p className='xl:hidden block vertical text-2xl pb-5 tracking-widest'>
              更多旅舍
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hotels
