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


const Header = () => {

  const[isMobile, setIsMobile] = useState(true);

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
      <ul className={isMobile ? "h-menu-mobile" : "flexCenter h-menu"}>
        <NavLink to="/" element={<Home/>} className="mobile-options">
          <li>Home</li>
          </NavLink>
        <NavLink to="/projects" className="mobile-options">
          <li>Projects</li>
          </NavLink>
        <Link to="#team" element={<Team/>} className="mobile-options">
          <li>Team</li>
          </Link>
        <Link to="#about" className="mobile-options">
          <li>About</li>
          </Link>
        
          <Link to="#contact">
          <button className="mobile-options button ">
            <li>Contact</li>
            </button>
          </Link>
          
        </ul>
        <button className="menu-icon"
        onClick={()=>setIsMobile(!isMobile)}>
        {isMobile ? (<i className='fas fa-times'></i>) 
        : (<i className='fas fa-bars'></i>)  }
      {/* <BiMenuAltRight size={30} className='mobile-nav'/> */}
    </button>
    
      </div>
      {/* </OutsideClickHandler> */}
    </div>

  </nav>
  
  )
}

export default Header