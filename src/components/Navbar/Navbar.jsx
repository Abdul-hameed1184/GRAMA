import { useRef, useState } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
const Navbar = () => {
  
  	const navRef = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };

  return (
    <nav>
      <div className="logo">
        <img src="images/GRAMA LOGO REMAKE 4.png" alt="" />
        <p>
          GRAMA <br /> LAGOS{" "}
        </p>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <div className="hidden" ref={navRef}>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <ul className="nav-links">
          <li>
            <a href="#">About GRAMA</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Become a Sponsor</a>
          </li>
        </ul>
        <button>Register Now</button>
      </div>
    </nav>
  );
}

export default Navbar
