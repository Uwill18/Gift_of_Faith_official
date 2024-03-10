import React from 'react';
import './Header.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from '../Team/Team';
import Projects from '../ProjectGallery/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';


const Header = () => {
  return (
    <section className="h-wrapper">
    <div className="flexCenter paddings h-container">
      <span>
      <img src="./mariposa.png" alt="logo" width={75}/>
    <a href=""className='companyName'><strong><em>Gift of Faith Consultants</em></strong></a>
      </span>
      <div className="flexCenter h-menu">
    <BrowserRouter>
    <Routes>      
     
        <Route path="/">Home</Route>
        <Route path="/projectgallery" element={<Projects/>}>Projects</Route>
        <Route path="Team" element={<Team/>}>Team</Route>
        {/* <a href="">Team</a> */}
        <Route path="About" element={<About/>}>About</Route>
        <Route path="Contact" element={<Contact/>}>
        Contact
        </Route>
      
      
   
    </Routes>
    </BrowserRouter>
    </div>
    </div>
    </section>
  )
}

export default Header