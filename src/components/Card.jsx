import React from 'react'
import save from '../assets/save_white.png'
import location from '../assets/location.png'

const handleTextLength = (text, num) => {
  return text && text.length > num
    ? `${text.slice(0, num)} ...`
    : text && text.length < num
      ? text.slice(0, num)
      : ''
}

const Card = ({ data, defaultImg, counties, township }) => {
  const { Picture, Name, Description } = data
  return (
    <figure className='w-80 xl:w-full bg-grey-light rounded-3xl overflow-hidden shadow-md grid grid-cols-2'>
      {Picture.PictureUrl1
        ? (
        <img
          src={Picture.PictureUrl1}
          alt='hotel_picture'
          className='w-full h-80 xl:h-96 object-cover col-start-1 col-span-2 row-start-1 z-10'
        />
          )
        : (
        <img
          src={defaultImg}
          alt='hotel_picture'
          className='w-full h-80 xl:h-96 object-cover col-start-1 col-span-2 row-start-1 z-10'
        />
          )}
      <img
        src={save}
        alt='save'
        className='text-grey-light mt-1 z-20 overflow-hidden col-start-2 row-start-1 justify-self-end mr-5 mt-5 cursor-pointer'
      />
      <figcaption className='flex flex-col gap-3 py-3 px-6 col-start-1 col-span-2'>
        <h3 className='text-2xl'>{Name}</h3>
        <span className='flex gap-3'>
          <img src={location} alt='location' />
          <p className='text-xl'>{`${counties}, ${township}`}</p>
        </span>
        <p>{handleTextLength(Description, 110)}</p>
      </figcaption>
    </figure>
  )
}

export default Card
