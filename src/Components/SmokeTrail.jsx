import React, { useEffect, useRef, useState } from 'react';
import './SmokeTrail.css'
const SmokeTrail = () => {
  const containerRef = useRef(null);
  const [dots, setDots] = useState([]);  // Store dots for rendering

  useEffect(() => {
    const container = containerRef.current;
    let timeout;

    const handleMouseMove = (e) => {
      const smoke = document.createElement('div');
      smoke.className = 'smoke';

      const dot = document.createElement('div');
      dot.className = 'dot';  // Create the dot

      // Set position for smoke
      smoke.style.left = `${e.clientX}px`;
      smoke.style.top = `${e.clientY}px`;

      // Set position for dot
      dot.style.left = `${e.clientX - 5}px`; // Adjust for dot size
      dot.style.top = `${e.clientY - 5}px`;

      // Add direction class for smoke movement
      const direction = {
        x: e.movementX,
        y: e.movementY,
      };
      if (direction.x < 0) smoke.classList.add('left');
      if (direction.x > 0) smoke.classList.add('right');
      if (direction.y < 0) smoke.classList.add('up');
      if (direction.y > 0) smoke.classList.add('down');

      // Append smoke and dot to container
      container.appendChild(smoke);
      container.appendChild(dot);

      // Add dot to state to track it
      setDots((prevDots) => [...prevDots, dot]);

      // Remove smoke and dot after animation ends
      setTimeout(() => {
        smoke.remove();
      }, 1000);

      // Reset timeout if mouse is moving
      if (timeout) {
        clearTimeout(timeout);
      }

      // Remove dot after 1 second of inactivity
      timeout = setTimeout(() => {
        setDots((prevDots) => prevDots.filter((d) => d !== dot)); // Remove dot from state
        dot.remove();
      }, 2000);  // Dot stays for 2 seconds of inactivity
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={containerRef} className="smoke-container"></div>;
};

export default SmokeTrail;
