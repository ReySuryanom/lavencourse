import React from 'react'
import ClassCards from './ClassCards'
import ContentCards from './ContentCards'
import Jumbotron from './Jumbotron'
import Theme from '../Theme'
import ShowcaseCards from './ShowcaseCards'
import TestiCards from './TestiCards'

function HomePage() {
  return (
    <div className="homepage">
      <Jumbotron />
      <Theme
        title="Kenapa harus belajar disini?"
        text="Kini belajar desain terasa asik dan mudah"
      />
      <ContentCards />
      <Theme title="Kelas Populer" />
      <ClassCards />
      <ShowcaseCards />
      <Theme title="Apa kata Mereka?" />
      <TestiCards />
    </div>
  )
}

export default HomePage
