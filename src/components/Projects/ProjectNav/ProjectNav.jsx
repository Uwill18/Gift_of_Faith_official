import React from 'react'
import './ProjectNav.css'
import {NavLink} from "react-router-dom";

const ProjectNav = () => {
  return (
    <>
     <nav className="h-wrapper">
        <div className="pn-flexCenter pn-paddings h-container">
            <div>
            <div className="pn-flexCenter h-menu">
                <div className="">
    <NavLink    
         to="/projects/allprojects"
         style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}
            className="menu-item">
        ALL
        </NavLink>
      <NavLink    
         to="/projects/municipal"
         style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}
            className="menu-item">
        MUNICIPAL
        </NavLink>
      <NavLink 
        to="/projects/industrial"
        style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}
            className="menu-item">
            INDUSTRIAL
        </NavLink>
      <NavLink 
        to="/projects/business" 
        style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}
            className="menu-item">
                BUSINESS
            </NavLink>
      <NavLink 
        to="/projects/residential" 
        style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}
            className="menu-item">
                RESIDENTIAL
            </NavLink>
    </div>
    </div>
    </div>
    </div>
    </nav>

    </>
   
  )
}

export default ProjectNav