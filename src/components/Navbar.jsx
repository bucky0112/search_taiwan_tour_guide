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
import whiteActive from '../assets/active_white.png'
// import whiteHome from '../assets/home_white.png'
// import whiteSave from '../assets/save-white.png'

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
    <>
      <nav className='bg-grey-light md:bg-white md:flex flex-col gap-10 xl:flex-row items-center px-10 py-4 justify-between sticky z-30 top-0 backdrop-filter backdrop-blur-lg bg-opacity-35'>
        <div className='flex items-center gap-6 sm:gap-3 justify-between'>
          <img
            src={home}
            alt='home'
            className='w-6 md:hidden block cursor-pointer'
          />
          <img
            src={logo}
            alt='logo'
            className='w-40 sm:w-auto md:w-auto cursor-pointer'
          />
          <img
            src={save}
            alt='save'
            className='w-6 md:hidden block cursor-pointer'
          />
        </div>

        <ul className='hidden md:flex items-center md:gap-16 text-grey-dark'>
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
      </nav>
      <ul className='md:hidden flex fixed justify-evenly items-center bottom-0 z-30 pt-3 pb-2 bg-secondary w-full'>
        {smLinks.map((link, i) => {
          return (
            <li
              key={i}
              className='flex flex-col items-center gap-2 text-grey-light first:text-grey-dark cursor-pointer'
            >
              <img className='w-6 text-grey-light' src={link.icon} />
              {link.title}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Navbar
