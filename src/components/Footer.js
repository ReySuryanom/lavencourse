import React from 'react'
import logo from '../assets/logo_laven.webp'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={logo} alt="logo_lavender" />
        <p>{`LavenCourse ${new Date().getFullYear()}`}</p>
      </div>
      <div className="footer__right">
        <p>Help center</p>
        <p>Contact support</p>
        <p>How it works</p>
      </div>
    </div>
  )
}

export default Footer
