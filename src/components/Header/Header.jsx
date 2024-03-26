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

  const[isMobile, setIsMobile] = useState(false);

  /**if the menu is less than 800px, then 
   * allow the menu to slide 100px off screen
  */

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
      <ul className={isMobile ? "h-menu-mobile" : "h-menu"} id="menuList">
        <NavLink to="/" element={<Home/>} >
          <li className="mobile-options">Home</li>
          </NavLink>
        <NavLink to="/projects" >
          <li className="mobile-options">Projects</li>
          </NavLink>
        <Link to="#team" element={<Team/>} >
          <li className="mobile-options">Team</li>
          </Link>
        <Link to="#about" >
          <li className="mobile-options">About</li>
          </Link>
        
          <Link to="#contact">
          <li className="mobile-options">
          <button className="button">
            Contact
            </button>
            </li>
          </Link>
          
        </ul>
        <div className="menu-icon">
          <i className="fa-solid fa-bars" onClick={()=>toggleMenu()}>
          </i>
        </div>
        

             {/* <button className="menu-icon"
        onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ? (<i className='fas fa-times'></i>) 
        : (<i className='fa-solid fa-bars'></i>)  }
        </button> */}

       
      {/* <BiMenuAltRight size={30} className='mobile-nav'/> */}
    
    
      </div>
      {/* </OutsideClickHandler> */}
    </div>
   

  </nav>
  

  )
}

export default Header