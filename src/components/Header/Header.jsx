import React,{ useState } from 'react';
import './Header.css';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import Projects from '../Projects/ProjectGallery/Projects';
import App from '../../App';
import Home from '../Home/Home';
import Team from '../Team/Team';
import {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Helmet } from 'react-helmet';


const Header = () => {

  const[isMobile, setIsMobile] = useState(true);



  return (
    <nav className="h-wrapper">
    <div className="flexCenter paddings h-container">
      
    
    <NavLink to="/" element={<Home/>} className='companyName'>
    <img src="./mariposa.png" alt="logo" width={75}/>
      <strong><em>Gift of Faith Consultants</em></strong>
      </NavLink>
    

         
   
      {/* <OutsideClickHandler
      onOutsideClick={()=>{setmenuOpened(false)}}
      > */}    
      

      <div>
      
      <div className={isMobile ? "h-menu-mobile"   :  "flexCenter h-menu-mobile" } id="menuList">
        {/* <ul className={isMobile ? "h-menu-mobile"   :  "flexCenter h-menu" } id="menuList"> */}
        <NavLink to="/" element={<Home/>} >
          <li className="h-menu-mobile">Home</li>
          </NavLink>
        <NavLink to="/projects" >
          <li className="h-menu-mobile">Projects</li>
          </NavLink>
        <Link to="#team" element={<Team/>} >
          <li className="h-menu-mobile">Team</li>
          </Link>
        <Link to="#about" >
          <li className="h-menu-mobile">About</li>
          </Link>
        
          <Link to="#contact">
          <li className="h-menu-mobile">
          <button className="button">
            Contact
            </button>
            </li>
          </Link>
          
        </div>
        {/* <div className="menu-icon">
          <i className="fa-solid fa-bars" onClick={()=>toggleMenu()}>
          </i>
        </div> */}
        

       
      {/* <BiMenuAltRight size={30} className='mobile-nav'/> */}
    
    
      </div>
      {/* </OutsideClickHandler> */}

      <button className="menu-icon"
        onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ? (<i className='fas fa-times'></i>) 
        : (<i className='fa-solid fa-bars'></i>)  }
        </button>
    </div>
   

  </nav>
  

  )
}

export default Header