import React from 'react'
import './ProjectNav.css'
import {NavLink} from "react-router-dom";

const ProjectNav = () => {
  return (
    <div>
    <div class="topnav">
      <NavLink    
         to="/projects/municipal"
         style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}>
        Municipal
        </NavLink>
      <NavLink 
        to="/industrial"
        style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}>
            Industrial
        </NavLink>
      <NavLink 
        to="/business" 
        style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}>Business
            </NavLink>
      <NavLink 
        to="/residential" 
        style={({ isActive }) => {
            return isActive ? { color: "plum" } : {color:"white"};
            }}>Residential
            </NavLink>
    </div>
    </div>
  )
}

export default ProjectNav