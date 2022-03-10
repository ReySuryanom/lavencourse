import React from 'react'
import './Login.css'
import logo from '../assets/logo_laven.webp'
import { Button } from '@material-ui/core'
import { auth, googleProvider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="login">
      <div className="login__logo">
        <img src={logo} alt="lavender-logo" />
        <br />
        <h1
          className="text-center"
          style={{
            color: '#4F4C5F',
            fontSize: '44px',
            textAlign: 'center',
            margin: '0',
          }}
        >
          Laven Course
        </h1>
      </div>
      <Button type="submit" onClick={signIn}>
        Masuk
      </Button>
      <Button
        type="submit"
        href="https://accounts.google.com/signup"
        target="_blank"
        className="daftar"
      >
        Daftar
      </Button>
    </div>
  )
}

export default Login
