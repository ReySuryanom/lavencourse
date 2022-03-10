import React from 'react'
import TestiCard from './TestiCard'
import avatar1 from '../../assets/avatar1.svg'
import avatar2 from '../../assets/avatar2.svg'
import avatar3 from '../../assets/avatar3.webp'
import './TestiCards.css'

function TestiCards() {
  return (
    <div className="testiCards">
      <TestiCard
        avatar={avatar1}
        name="Rizaldi"
        type="Illustrator"
        text="Cocok untuk pemula yang ingin belajar desain dari dasar"
      />
      <TestiCard
        avatar={avatar2}
        name="Alfin"
        type="Mahasiswa"
        text="Materinya simple dan berbobot, terus mentornya baik banget fast reson. Pokonya the best dah!!"
      />
      <TestiCard
        avatar={avatar3}
        name="Njoh"
        type="Kang panik"
        text="Cocok untuk kaum-kaum panik seperti saya."
      />
    </div>
  )
}

export default TestiCards
