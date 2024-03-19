import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import './App.css'
import Companies from "./components/Companies/Companies";
import Residencies from "./components/Residencies/Residencies";
import Mission from "./components/Mission/Mission";
import Services from "./components/Services/Services";
import Mission_Accordion from "./components/Accordions/Mission_Accordion";
import About from "./components/About/About";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import {BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Projects from "./components/Projects/ProjectGallery/Projects";
import Home from "./components/Home/Home";

import Municipal from "./components/Projects/ProjectGallery/Municipal";
import Industrial from "./components/Projects/ProjectGallery/Industrial";
import Residential from "./components/Projects/ProjectGallery/Residential";
import Business from "./components/Projects/ProjectGallery/Business";

function App() {
  return (
    <div className="App app_background">
       <div>
      <div className="white-gradient"/>
      {/* <Header> */}
    <BrowserRouter>
    <Routes>
        {/* <NavLink to={<Home/>}>Home</NavLink> */}
        <Route index element={<Home/>}/>
        <Route path="/projects#home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/allprojects" element={<Projects/>}/>
        <Route path="/projects/municipal" element={<Municipal/>}/>
        <Route path="/projects/industrial" element={<Industrial/>}/>
        <Route path="/projects/business" element={<Business/>}/>
        <Route path="/projects/residential" element={<Residential/>}/>
        <Route path="/team" element={<Team/>}/>
    </Routes>
    </BrowserRouter>
  {/* </Header> */}
      {/* <Hero/>
      </div>
      <div className="app_background">
      <Companies/>
      <Residencies/>
      <Team/>
      <About/>
      <Contact/>
      <Projects/> */}
    </div>
  </div>

  );
}

export default App;
