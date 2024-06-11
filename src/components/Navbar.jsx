import React from 'react'
import logo from '../assets/images/logo.png'
import lang from '../assets/images/lang.png'
import menu from '../assets/images/menu.png'
import search from '../assets/images/search.png'
import notification from '../assets/images/notification.png'
import '../assets/css/style.css'

const Navbar = () => {
  return (
    <div className='navbody'>
        <div className="container">

      <div className='row d-none d-lg-flex'>
    <div className="col-lg-7 mt-3">
        <img src={logo} alt="" />
    </div>
    <div className="col-lg-5 mt-3 menu-images">
        <img src={search} alt="" />
        <img src={lang} alt="" />
        <img src={notification} alt="" />
        <img src={menu} alt="" />
    </div>
      </div>
        </div>
    </div>
  )
}

export default Navbar
