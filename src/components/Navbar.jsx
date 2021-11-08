import React from 'react'
import logo from '../assets/T-Go.png'
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
    <div className='bg-white flex items-center p-5'>
      <img src={logo} alt='logo' className='mr-3' />
      <span className='text-primary'>臺旅・與你</span>

      <ul className='flex text-primaryText'>{links.map((link, i) => {
        return (
          <li key={i}>
            <img src={link.icon} />
            {link.title}
          </li>
        )
      })}</ul>
    </div>
  )
}

export default Navbar
