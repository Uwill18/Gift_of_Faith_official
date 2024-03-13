import React from 'react'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'
import Home from '../Home/Home'
import { HashLink as Link } from 'react-router-hash-link';
import ProjectHeader from '../Header/ProjectHeader';
import ProjectHero from '../ProjectHero/ProjectHero';
import ProjectNav from '../ProjectNav/ProjectNav';

const Projects = () => {
  return (
    <div>
        <div>
          <link href='https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i|Oswald:200,300,400,500,600,700
'/>
          <ProjectHeader/>
          <ProjectHero/>
          <ProjectNav/>
        </div>
        
    </div>
    
  )
}

export default Projects