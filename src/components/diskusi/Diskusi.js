import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core'
import firebase from '../../util/firebase'
import Question from './Question'
import './Diskusi.css'
import { useStateValue } from '../../util/StateProvider'
let flag = false

function Diskusi() {
  const [fundamental, setFundamental] = useState('clicked')
  const [illustrator, setIllustrator] = useState()
  const [userInterface, setUserInterface] = useState()
  const [types, setTypes] = useState('Fundamental')
  const [question, setQuestion] = useState('')
  const [questions, setQuestions] = useState([])
  const [{ user }, dispatch] = useStateValue()

  const disableAll = (course) => {
    setFundamental(null)
    setIllustrator(null)
    setUserInterface(null)
    course('clicked')
  }

  const changeHandler = (e) => {
    e.preventDefault()
    setQuestion(e.target.value)
  }

  const sendQuestion = (data) => {
    if (question.length === 0)
      alert('Maaf, mohon isi pertanyaan anda terlebih dahulu.')
    else {
      firebase.database().ref(data).push({
        name: user.displayName,
        avatar: user.photoURL,
        question,
        date: new Date().toLocaleString(),
        jawaban: '',
      })
      setQuestion('')
    }
  }

  const getData = (data) => {
    const database = firebase.database().ref(data)
    database.on('value', (snapshot) => {
      const items = snapshot.val()
      const item = []
      for (const id in items) item.push({ id, ...items[id] })
      setQuestions(item)
    })
    flag = true
  }

  useEffect(() => {
    getData(types)
  }, [types])

  return (
    <div className="diskusi">
      <h1 className="title">Tanyakan masalahmu disini</h1>
      <div className="dikusi__container">
        <div className="diskusi__left">
          <div className="diskusi__kategori">
            <h2 style={{ marginTop: 'auto' }}>Kategori</h2>
            <div
              className={`btn kategori ${fundamental}`}
              id="test1"
              onClick={() => {
                disableAll(setFundamental)
                setTypes('Fundamental')
              }}
            >
              Desain Fundamental untuk Pemula
            </div>
            <div
              className={`btn kategori ${illustrator}`}
              id="test2"
              onClick={() => {
                disableAll(setIllustrator)
                setTypes('Illustrator')
              }}
            >
              Desain Illustrasi dengan Adobe Illustrator
            </div>
            <div
              className={`btn kategori ${userInterface}`}
              id="test3"
              onClick={() => {
                disableAll(setUserInterface)
                setTypes('User_Interface')
              }}
            >
              Desain User Interface untuk Aplikasi
            </div>
          </div>
        </div>
        <div className="diskusi__right">
          <div className="diskusi__input">
            <Avatar src={user.photoURL} />
            <div>
              <h3 style={{ marginTop: '0.33rem' }}>{user.displayName}</h3>
              <input
                className="input_field"
                type="textarea"
                placeholder="Apa yang ingin ditanyakan ?"
                size="85"
                onChange={changeHandler}
                value={question}
              />
              <div className="diskusi__submit">
                <div
                  className="btn"
                  onClick={() =>
                    fundamental
                      ? sendQuestion('Fundamental')
                      : illustrator
                      ? sendQuestion('Illustrator')
                      : userInterface && sendQuestion('User_Interface')
                  }
                >
                  Kirim
                </div>
              </div>
            </div>
          </div>
          <div className="diskusi__post">
            {questions.length !== 0 ? (
              questions.map((data) => (
                <Question
                  key={data.id}
                  name={data.name}
                  avatar={data.avatar}
                  question={data.question}
                  date={data.date}
                  id={data.id}
                  type={types}
                />
              ))
            ) : flag ? (
              <div style={{ width: '100%' }}>
                <h1 style={{ margin: '0 auto', textAlign: 'center' }}>
                  Jadilah orang pertama yang bertanya.
                </h1>
              </div>
            ) : (
              <div className="loader"></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diskusi
