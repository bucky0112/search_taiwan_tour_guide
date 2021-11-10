import React from 'react'
import logo from '../assets/Logo.png'
import home from '../assets/home.png'
import hotel from '../assets/hotel.png'
import restaurant from '../assets/restaurant.png'
import active from '../assets/active.png'
import save from '../assets/save.png'
import user from '../assets/user.png'
import whiteHotel from '../assets/hotel_white.png'
import whiteRestaurant from '../assets/restaurant_white.png'
import whiteActive from '../assets/actice_white.png'

const links = [
  {
    title: '首頁',
    icon: home,
    link: '/'
  },
  {
    title: '旅宿',
    icon: hotel,
    link: '/hotels'
  },
  {
    title: '餐飲',
    icon: restaurant,
    link: '/restaurant'
  },
  {
    title: '活動',
    icon: active,
    link: '/active'
  },
  {
    title: '收藏',
    icon: save,
    link: '/save'
  },
  {
    title: '登入/註冊',
    icon: user,
    link: '/user'
  }
]

const smLinks = [
  {
    title: '登入/註冊',
    icon: user,
    link: '/user'
  },
  {
    title: '旅宿',
    icon: whiteHotel,
    link: '/hotels'
  },
  {
    title: '餐飲',
    icon: whiteRestaurant,
    link: '/restaurant'
  },
  {
    title: '活動',
    icon: whiteActive,
    link: '/active'
  }
]

const Navbar = () => {
  return (
    <div className='bg-grey-light md:bg-white md:flex flex-col gap-10 xl:flex-row items-center px-10 py-7 justify-between'>
      <div className='flex items-center cursor-pointer gap-3 justify-between'>
        <img src={home} alt='home' className='md:hidden block' />
        <img src={logo} alt='logo' />
        <img src={save} alt='save' className='md:hidden block' />
      </div>

      <ul className='hidden md:flex items-center gap-16 text-grey-dark'>
        {links.map((link, i) => {
          return (
            <li
              key={i}
              className='flex flex-col  lg:flex-row items-center gap-4 lg:text-3xl cursor-pointer transition-all hover:text-primary whitespace-nowrap'
            >
              <img className='lg:w-8' src={link.icon} />
              {link.title}
            </li>
          )
        })}
      </ul>

      <ul className='md:hidden flex fixed justify-evenly items-center bottom-0 z-30 py-5 bg-secondary w-full -ml-10'>
        {smLinks.map((link, i) => {
          return (
            <li key={i} className='flex flex-col items-center gap-2 text-grey-light first:text-grey-dark cursor-pointer'>
              <img className='w-8 text-grey-light' src={link.icon} />
              {link.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
