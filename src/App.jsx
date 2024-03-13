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

function App() {
  return (
    <div className="App">
       <div>
      <div className="white-gradient"/>
      {/* <Header> */}
    <BrowserRouter>
    <Routes>
        {/* <NavLink to={<Home/>}>Home</NavLink> */}
        <Route index element={<Home/>}/>
        <Route path="/projects#home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/projects#home" element={<Home/>}/>
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
