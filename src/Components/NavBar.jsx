import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const backgroundRef = useRef(null); // For background effect

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      // GSAP animation for navbar background and sliding down
      gsap.to(backgroundRef.current, {
        opacity: 0.6, // Fade background
        scale: 1.05,  // Zoom effect
        duration: 1,
        ease: 'power4.out',
      });

      gsap.to(navbarRef.current, {
        y: 0,  // Slide navbar from top to bottom
        opacity: 1, // Fade in navbar
        duration: 1, // Smooth transition
        ease: 'power4.out',
      });

      // Menu items animation
      gsap.to(menuRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2, // Staggered effect for items
      });
    } else {
      // GSAP animation for closing menu (slide up)
      gsap.to(backgroundRef.current, {
        opacity: 0, // Reset background opacity
        scale: 1,   // Reset scale
        duration: 0.7,
        ease: 'power4.in',
      });

      gsap.to(navbarRef.current, {
        y: -100,  // Slide navbar up
        opacity: 0, // Fade out navbar
        duration: 0.7,
        ease: 'power4.in',
      });

      gsap.to(menuRef.current, {
        opacity: 0,
        scale: 0.8, // Shrink menu items
        y: 30,
        duration: 0.7,
        ease: 'power4.in',
        stagger: -0.1, // Reverse stagger for closing
      });
    }
  }, [isOpen]);

  return (
    <nav className="nav">
      <a href="/" className="logo-1">
        <p>Vintaverse</p>
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        ☰ <span className="menu-text">Menu</span>
      </div>

      {isOpen && (
        <div className="menu-fullscreen" ref={backgroundRef}>
          <div className="close-icon" onClick={toggleMenu}>
            ✖ <span className="close-text">Close</span>
          </div>
          <ul className="navbar-1" ref={navbarRef}>
            <li ref={menuRef}>
              <Link to="/" onClick={toggleMenu}>Home</Link>
            </li>
            <li ref={menuRef}>
              <Link to="/about" onClick={toggleMenu}>About</Link>
            </li>
            <li ref={menuRef}>
              <Link to="/skills" onClick={toggleMenu}>Projects</Link>
            </li>
            <li ref={menuRef}>
              <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;





// import React from 'react'
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <nav className='top-1'>
//         <a href="/" className="logo-1">
//         <p>Vintaverse</p>
//         </a>
//         <ul className="navbar-1">
//             <li>
//                 <Link to="/">Home</Link>
//             </li>
//             <li>
//                 <Link to="/about">About</Link>
//             </li>
//             <li>
//                 <Link to="/skills">Skills</Link>
//             </li>
//             <li>
//                 <Link to="/contact">Contact</Link>
//             </li>
//         </ul>
//     </nav>
//   )
// }

// export default NavBar;