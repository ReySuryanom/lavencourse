import { Avatar } from '@material-ui/core'
import firebase from '../../util/firebase'
import React, { useState } from 'react'
import './Response.css'
import { useStateValue } from '../../util/StateProvider'

function Response({ data, type }) {
  const [jawabanUser, setJawaban] = useState()
  const [{ user }, dispatch] = useStateValue()

  const handleOnChange = (e) => {
    e.preventDefault()
    setJawaban(e.target.value)
  }

  const sendAnswer = () => {
    firebase.database().ref(type).child(data).child('jawaban').push({
      name: user.displayName,
      avatar: user.photoURL,
      jawabanUser,
      date: new Date().toLocaleString(),
    })
    setJawaban('')
  }

  return (
    <div className="response">
      <Avatar src={user.photoURL} />
      <input
        className="input_field"
        type="textarea"
        placeholder="Apa respon anda terhadap diskusi ini ?"
        size="50"
        value={jawabanUser}
        onChange={handleOnChange}
      />
      <div className="btn" onClick={sendAnswer}>
        Kirim
      </div>
    </div>
  )
}

export default Response
