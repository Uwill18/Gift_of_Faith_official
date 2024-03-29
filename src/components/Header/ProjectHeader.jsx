import React from 'react';
import './Header.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Projects from '../Projects/ProjectGallery/Projects';
import App from '../../App';
import Home from '../Home/Home';
import Team from '../Team/Team';
import logo from '/mariposa.png';

const ProjectHeader = () => {
  return (
    <nav className="h-wrapper">
    <div className="flexCenter paddings h-container">
   <NavLink to="/" element={<Home/>} className='companyName'>
    <img src={logo} alt="logo" width={75}/>
      <strong><em>Gift of Faith Consultants</em></strong>
      </NavLink>    
      <div className="flexCenter h-menu">
        <NavLink to="/" element={<Home/>}>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <Link to="/#team" element={<Team/>}>Team</Link>
        <Link to="/#about">About</Link>
        <button className="button"><Link to="/#contact">Contact</Link></button>
        {/* <a href="">Home</a>
        <a href="">Projects</a> */}
        {/* <Link to={<Projects/>}>Projects</Link> */}
        {/* <a href="">Mission</a> */}
        {/* <a href="">Team</a>
        <a href="">About</a>
        <button className="button">
        <a href="">Contact</a>
        </button> */}
      </div>
    </div>
  </nav>
  
  )
}

export default ProjectHeader