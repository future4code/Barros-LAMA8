import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeatureShows from '../../components/Shows/FeatureShows'
import DayShows from '../../components/DayShows/DayShows'


import "./Home.scss"

function Home() {
  return (
    <div className='home'>
      <Slider/>
      <FeatureShows type="Sexta"/>
      <FeatureShows type="Sábado"/>
      <FeatureShows type="Domingo"/>
      <DayShows/>

    </div>
  )
}

export default Home