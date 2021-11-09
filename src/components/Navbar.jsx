import React from 'react'
import logo from '../assets/Logo.png'
import home from '../assets/home.png'
import hotel from '../assets/hotel.png'
import restaurant from '../assets/restaurant.png'
import active from '../assets/active.png'
import save from '../assets/save.png'
import user from '../assets/user.png'

const links = [
  {
    title: '首頁',
    icon: home
  },
  {
    title: '旅宿',
    icon: hotel
  },
  {
    title: '餐飲',
    icon: restaurant
  },
  {
    title: '活動',
    icon: active
  },
  {
    title: '收藏',
    icon: save
  },
  {
    title: '登入/註冊',
    icon: user
  }
]

const Navbar = () => {
  return (
    <div className='bg-white flex items-center px-10 py-7 justify-between'>
      <div className='flex items-center cursor-pointer gap-3'>
        <img src={logo} alt='logo' />
      </div>

      <ul className='flex items-center gap-16 text-grey-dark'>
        {links.map((link, i) => {
          return (
            <li
              className='flex items-center gap-4 text-3xl cursor-pointer transition-all hover:text-primary'
              key={i}
            >
              <img className='w-8' src={link.icon} />
              {link.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar
