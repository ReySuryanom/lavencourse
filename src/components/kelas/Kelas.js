import React from 'react'
import ClassCards from '../homepage/ClassCards'
import './Kelas.css'

function Kelas() {
  return (
    <div className="kelas">
      <h1 className="title">Pilih kelas untuk dipelajari</h1>
      <ClassCards />
    </div>
  )
}

export default Kelas
