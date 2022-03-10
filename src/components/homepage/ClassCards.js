import React from 'react'
import OptionCard from './OptionCard'
import './ClassCards.css'
import { data } from '../../util/data'

function ClassCards() {
  return (
    <div className="classCards">
      {data.map((item, index) => (
        <OptionCard
          key={index}
          id={item.id}
          image={item.image}
          title={item.title}
          type={[item.modul, item.hours]}
          mentor={item.tutor}
        />
      ))}
    </div>
  )
}

export default ClassCards
