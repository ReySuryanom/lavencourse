import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo_laven.webp'
import { Link } from 'react-router-dom'
import { Avatar } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { useStateValue } from '../util/StateProvider'

function Navbar() {
  const [home, setHome] = useState('active')
  const [kelas, setKelas] = useState()
  const [portofolio, setPortofolio] = useState()
  const [diskusi, setDiskusi] = useState()
  const [{ user }, dispatch] = useStateValue()
  let username = user.displayName.split(' ')

  if (username.length > 2)
    username = username.filter((i, index) => index === 0 || index === 1)

  username = username.reduce((result, str) => `${result} ${str}`, '')

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName('dropdown-content')
      var i
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }

  const eventHandler = (page) => {
    setHome('')
    setKelas('')
    setPortofolio('')
    setDiskusi('')
    page('active')
  }

  return (
    <nav className="navbar">
      <div className="left__side">
        <Link to="/">
          <img src={logo} alt="Lavencourse-logo" />
        </Link>
      </div>
      <div className="middle__side">
        <Link className={home} to="/" onClick={() => eventHandler(setHome)}>
          Home
        </Link>
        <Link
          className={kelas}
          to="/kelas"
          onClick={() => eventHandler(setKelas)}
        >
          Kelas
        </Link>
        <Link
          className={portofolio}
          to="/portofolio"
          onClick={() => eventHandler(setPortofolio)}
        >
          Portofolio
        </Link>
        <Link
          className={diskusi}
          to="/diskusi"
          onClick={() => eventHandler(setDiskusi)}
        >
          Diskusi
        </Link>
      </div>
      <div className="right__side">
        <Avatar src={user.photoURL} />
        <h1>{username}</h1>
        <div className="dropdown">
          <ExpandMoreIcon
            className="dropbtn"
            onClick={() =>
              document.getElementById('myDropdown').classList.toggle('show')
            }
          />
          <div id="myDropdown" className="dropdown-content">
            <a
              href="/"
              onClick={() => {
                window.location.reload()
                return false
              }}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
