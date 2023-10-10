import React, {useEffect, useState} from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import '../components/Navbar.css';
import { BrowserRouter as Router, Routes, Link, Switch } from 'react-router-dom';
import pdf from '../components/Videos/Mohammed Naeem Resume (5).pdf';
import image from '../components/Videos/Mlogo2.png';



  


const Navbar = () => {

  

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {

        targetElement.scrollIntoView({
        behavior:'smooth',
        block:'center' // or 'center' to scroll to the center of the target
        
      });
    }
  }

  
  const handleSmoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
  
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top;
      const start = window.pageYOffset;
      const duration = 1000; // Adjust the duration as needed
      let startTime = null;
  
      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / duration;
        const easeInOutCubic = t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1);
        const scrollTo = start + offsetTop * easeInOutCubic(progress);
  
        window.scrollTo(0, scrollTo);
  
        if (progress < 1) {
          requestAnimationFrame(scrollAnimation);
        }
      }
  
      requestAnimationFrame(scrollAnimation);
    }
  };
  
  

    
    return (
        <Router>
         
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <img src={image} className="nav-logo"/>
            <button className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
                <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`} />
            </button>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>

                <li className="aboutme"><a href="#about" onClick={() => handleSmoothScroll("about")}>About Me</a></li>
                <li><a href="#projects" onClick={() => handleSmoothScroll("projects")}>Projects</a></li>
                <li className="aboutme"><a href="#pokebattle" onClick={() => handleSmoothScroll("pokebattle")}>Poke</a></li>
                <li><a href={pdf} target="_blank">Resume</a></li>
                
            </ul>
            

        </nav>

        <Routes>
            {/* ... */}
        </Routes>

        </Router>


    )
//<li><a href="#contact" onClick={() => handleSmoothScroll("contact")}>Contact Me</a></li>
    
    
}

export default Navbar;

