import React, { useReducer, useEffect } from 'react'
import { useSelector } from 'react-redux'
import defaultImg from '../../assets/default_active.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { apiGetAllActive } from '../../request/api'
import Card from '../Card'

const activeState = {
  showState: []
}

const activeReducer = (state, action) => {
  switch (action.type) {
    case 'getAllData':
      return {
        showState: action.payload
      }
    default:
      return state
  }
}

const Active = () => {
  const [state, dispatch] = useReducer(activeReducer, activeState)

  const fetchAllHotel = async () => {
    try {
      const { status, data } = await apiGetAllActive(6, 0)
      status === 200 && dispatch({ type: 'getAllData', payload: data })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchAllHotel()
  }, [])

  const { showState } = state

  const searchActives = useSelector((state) => state.searchData.actives)

  useEffect(() => {
    searchActives.length > 0 &&
      dispatch({ type: 'getAllData', payload: searchActives })
  }, [searchActives])

  return (
    <div className='flex flex-col px-10 xl:px-40 pt-5 gap-5'>
      <h2 className='items-start text-4xl font-normal'>活動</h2>
      <div className='flex flex-row overflow-x-scroll xl:overflow-x-visible space-x-8 xl:flex-col gap-10 xl:justify-center text-grey-dark'>
        <div className='flex flex-nowrap pb-8 xl:pb-0 xl:grid grid-cols-7 xl:grid-cols-3 grid-rows-2 gap-x-5 gap-y-10'>
          {showState.length > 0 &&
            showState.map((hotel, i) => {
              const { Address } = hotel

              const counties = Address ? Address.slice(0, 3) : ''
              const township = Address ? Address.slice(3, 6) : ''

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
              更多活動
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Active
