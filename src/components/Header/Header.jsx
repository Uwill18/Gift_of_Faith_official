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
  const[menuOpened, setmenuOpened] = useState(false);

  /**if the menu is less than 800px, then 
   * allow the menu to slide 100px off screen
  */
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <= 800){
      return {left: !menuOpened && "-100%"}
    }

  }
  return (
    <nav className="h-wrapper">
    <div className="flexCenter paddings innerWidth h-container">
      <span>
      
    <NavLink to="/" element={<Home/>} className='companyName'>
    <img src="./mariposa.png" alt="logo" width={75}/>
      <strong><em>Gift of Faith Consultants</em></strong>
      </NavLink>

      </span>    
   
      {/* <OutsideClickHandler
      onOutsideClick={()=>{setmenuOpened(false)}}
      > */}     <div className="menu-icon"
      onClick={()=>setmenuOpened(!menuOpened)}>
      <BiMenuAltRight size={30} className='mobile-nav'/>
    </div>

      <div className={menuOpened ? "open" : ""}>
      <div className="flexCenter h-menu">
        <NavLink to="/" element={<Home/>} className="">Home</NavLink>
        <NavLink to="/projects" className="mobile-options">Projects</NavLink>
        <Link to="#team" element={<Team/>} className="mobile-options">Team</Link>
        <Link to="#about" className="mobile-options">About</Link>
        <button className="button mobile-options"><Link to="#contact">Contact</Link></button>
        </div>
    
      </div>
      {/* </OutsideClickHandler> */}
    </div>

  </nav>
  
  )
}

export default Header