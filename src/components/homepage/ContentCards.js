import React from 'react'
import Card from './Card'
import content1 from '../../assets/content1.webp'
import content2 from '../../assets/content2.webp'
import content3 from '../../assets/content3.webp'
import './ContentCards.css'

function ContentCard() {
  return (
    <div className="contentCards">
      <Card
        image={content1}
        title="Akses Seumur Hidup"
        text="Setelah membeli kelasnya, tidak ada jangka waktu untuk menyelesaikan kelas tersebut."
      />
      <Card
        image={content2}
        title="Materi Berkualitas"
        text="Kamu akan mendapatkan materi yang berkualitas dari mentor yang ahli di bidangnya."
      />
      <Card
        image={content3}
        title="Konsultasi Privat"
        text="Kamu bisa menanyakan langsung secara private ke mentor jika ada kesulitan "
      />
    </div>
  )
}

export default ContentCard
