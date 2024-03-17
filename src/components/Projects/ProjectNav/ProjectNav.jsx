import { useState } from 'react'; 
import './ProjectNav.css'
import {NavLink} from "react-router-dom";
import Business from '../ProjectGallery/Business';

const ProjectNav = () => {
  const [selected, setSelected] = useState("allprojects");
  return (
    <>
     <nav className="h-wrapper">
        <div className="pn-flexCenter pn-paddings h-container">
            <div>
            <div className="pn-flexCenter h-menu">
                <div className="">
    <NavLink    
         to="/projects/allprojects"
         onClick={()=> setSelected("allprojects")}
         style={{
          color: selected === "allprojects" ? "plum" : "white",
          textDecoration:"inherit",
      }}
            className="menu-item">
        ALL
        </NavLink>
      <NavLink    
         to="/projects/municipal"
         onClick={()=> setSelected("municipal")}
         style={{
          color: selected === "municipal" ? "plum" : "white",
          textDecoration:"inherit",
      }}
            className="menu-item">
        MUNICIPAL
        </NavLink>
      <NavLink 
        to="/projects/industrial"
        onClick={()=> setSelected("industrial")}
        style={{
          color: selected === "industrial" ? "plum" : "white",
          textDecoration:"inherit",
      }}
            className="menu-item">
            INDUSTRIAL
        </NavLink>
      <NavLink 
        to="/projects/business" 
        onClick={()=> setSelected("business")}
        element={<Business/>}
        style={{
          color: selected === "business" ? "plum" : "white",
          textDecoration:"inherit",
      }}
            className="menu-item">
                BUSINESS
            </NavLink>
      <NavLink 
        to="/projects/residential" 
        onClick={()=> setSelected("residential")}
        style={{
          color: selected === "residential" ? "plum" : "white",
          textDecoration:"inherit",
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