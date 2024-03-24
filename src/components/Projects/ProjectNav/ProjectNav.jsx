import React, { useState } from 'react';
import './ProjectNav.css';
import { NavLink } from "react-router-dom";
import data from '../../../utils/image-gallery.json';

const ProjectNav = () => {
  const [selected, setSelected] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const handleTagClick = (tag) => {
    setSelected(null); // Clear selected
    setSelectedTag(tag); // Set selectedTag
  };

  return (
    <>
      <nav className="p-wrapper">
        <div className="pn-flexCenter pn-paddings h-container">
          <div>
            <div className="pn-flexCenter h-menu">
              <div className="">
                <div className="tag-filter">
                  <NavLink
                    to="/projects/allprojects"
                    onClick={() => setSelected("allprojects")}
                    style={{
                      color: selected === "allprojects" ? "plum" : "white",
                      textDecoration: "inherit",
                    }}
                    className="menu-item">
                    ALL
                  </NavLink>
                  <NavLink
                    to="/projects/municipal"
                    onClick={() => setSelected("municipal")}
                    style={{
                      color: selected === "municipal" ? "plum" : "white",
                      textDecoration: "inherit",
                    }}
                    className="menu-item">
                    MUNICIPAL
                  </NavLink>
                  <NavLink
                    to="/projects/industrial"
                    onClick={() => setSelected("industrial")}
                    style={{
                      color: selected === "industrial" ? "plum" : "white",
                      textDecoration: "inherit",
                    }}
                    className="menu-item">
                    INDUSTRIAL
                  </NavLink>
                  <NavLink
                    to="/projects/business"
                    onClick={() => handleTagClick("business")} // Handle tag click
                    style={{
                      color: selectedTag === "business" ? "plum" : "white", // Use selectedTag for styling
                      textDecoration: "inherit",
                    }}
                    className="menu-item">
                    BUSINESS
                  </NavLink>
                  <NavLink
                    to="/projects/residential"
                    onClick={() => setSelected("residential")}
                    style={{
                      color: selected === "residential" ? "plum" : "white",
                      textDecoration: "inherit",
                    }}
                    className="menu-item">
                    RESIDENTIAL
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProjectNav;
