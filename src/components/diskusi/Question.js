import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import firebase from '../../util/firebase'
import Answer from './Answer'
import Response from './Response'
import './Question.css'

function Question({ question, date, name, avatar, id, type }) {
  const [answer, setAnswer] = useState([])

  useEffect(() => {
    const database = firebase.database().ref(type).child(id).child('jawaban')
    database.on('value', (snapshot) => {
      const items = snapshot.val()
      const item = []
      for (const id in items) {
        item.push({ id, ...items[id] })
      }
      setAnswer(item)
    })
  }, [id, type])

  return (
    <div className="question">
      <Avatar src={avatar} />
      <div className="question__container">
        <h3 style={{ marginTop: '-0.05rem' }}>{name || 'Anonymous'}</h3>
        <p style={{ fontSize: 'small', marginTop: '-1rem' }}>{date}</p>
        <p>{question}</p>
        {answer.map((item) => (
          <Answer
            key={item.id}
            date={item.date}
            answer={item.jawabanUser}
            name={item.name}
            avatar={item.avatar}
          />
        ))}

        <Response data={id} type={type} />
      </div>
    </div>
  )
}

export default Question
