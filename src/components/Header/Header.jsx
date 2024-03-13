import React from 'react';
import './Header.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Projects from '../Projects/ProjectGallery/Projects';
import App from '../../App';
import Home from '../Home/Home';
import Team from '../Team/Team';

const Header = () => {
  return (
    <nav className="h-wrapper">
    <div className="flexCenter paddings h-container">
      <span>
      
    <NavLink to="/" element={<Home/>} className='companyName'>
    <img src="./mariposa.png" alt="logo" width={75}/>
      <strong><em>Gift of Faith Consultants</em></strong>
      </NavLink>

      </span>      
      <div className="flexCenter h-menu">
        <NavLink to="/" element={<Home/>}>Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <Link to="#team" element={<Team/>}>Team</Link>
        <Link to="#about">About</Link>
        <button className="button"><Link to="#contact">Contact</Link></button>
      </div>
    </div>
  </nav>
  
  )
}

export default Header