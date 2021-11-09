import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { apiGetAllHotel } from '../request/api'
import defaultImg from '../assets/default_hotel.png'

const Hotels = () => {
  const [hotels, setHotels] = useState([])

  const fetchAllHotel = async () => {
    try {
      const { status, data } = await apiGetAllHotel(6)
      status === 200 && setHotels(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchAllHotel()
  }, [])

  console.log(hotels)

  return (
    <div className='py-10'>
      <Search />
      <div>
        <h2>旅宿</h2>
        <div className='flex'>
          <figure className='bg-grey-light rounded-l-xl'>
            <img src={defaultImg} alt='hotel_picture' />
            <figcaption>
              <h3>臺北青旅</h3>
              <span>臺北市, 文山區</span>
              <p>12333333</p>
            </figcaption>
          </figure>
          <figure className='bg-grey-light rounded-l-xl'>
            <img src={defaultImg} alt='hotel_picture' />
            <figcaption>
              <h3>臺北青旅</h3>
              <span>臺北市, 文山區</span>
              <p>12333333</p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default Hotels
