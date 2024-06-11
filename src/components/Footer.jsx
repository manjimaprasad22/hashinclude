import React from 'react'
import logo from '../assets/images/logo-white.png'
import social from '../assets/images/social.png'
import '../assets/css/style.css'

const Footer = () => {
  return (
    <div className='footer-body mt-4'>
      <div className="container">
      <div className='row d-lg-flex d-block'>
    <div className="col-lg-3 mt-3">
        <img src={logo} alt="" />
    </div>
    <div className="col-lg-6 mt-4 d-flex foot-text">
        <div>
        &copy; {new Date().getFullYear()} Hashinnclude  |  About us  |  Contact us | Privacy | Terms | FAQ
        </div>
    </div>
    <div className="col-lg-2 mt-3 ">
    
        <img src={social} alt="" className='social'/>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
