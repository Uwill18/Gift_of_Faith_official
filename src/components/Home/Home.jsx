import React from 'react'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Companies from '../Companies/Companies'
import Residencies from '../Residencies/Residencies'
import Team from '../Team/Team'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../ProjectGallery/Projects'
import './Home.css'

const Home = () => {
  return (
    <div className='Home' id="home">
    <div>
    <div className=""/>
    <Header/>
    <Hero/>
    </div>
    <div className="app_background">
    <Companies/>
    <Residencies/>
    <Team/>
    <About/>
    <Contact/>

  </div>
  </div>
  )
}

export default Home