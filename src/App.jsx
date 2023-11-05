import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

function App(){
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
