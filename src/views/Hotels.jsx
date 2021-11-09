import React, { useEffect, useState } from 'react'
import Search from '../components/Search'
import { apiGetAllHotel } from '../request/api'
import defaultImg from '../assets/default_hotel.png'
// import { BsHeart } from 'react-icons/bs'

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

  return (
    <div>
      <Search />
      <div className='grid justify-center py-40 px-36 gap-6'>
        <h2 className='items-start'>旅宿</h2>
        <div className='grid grid-cols-3 gap-5'>
          {hotels.length > 0 && hotels.map((hotel, i) => {
            const { Picture, Name, Description, Address } = hotel

            const counties = Address.slice(0, 3)
            const township = Address.slice(3, 6)

            return (
              <figure
                key={i}
                className='bg-grey-light rounded-3xl overflow-hidden'
              >
                {/* <BsHeart className='' /> */}
                {Picture.PictureUrl1
                  ? (
                  <img
                    src={Picture.PictureUrl1}
                    alt='hotel_picture'
                    className='w-full h-80 object-cover'
                  />
                    )
                  : (
                  <img
                    src={defaultImg}
                    alt='hotel_picture'
                    className='w-full h-80 object-cover'
                  />
                    )}
                <figcaption className='m-5'>
                  <h3>{Name}</h3>
                  <span>{`${counties} 。 ${township}`}</span>
                  <p>{Description}</p>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Hotels
