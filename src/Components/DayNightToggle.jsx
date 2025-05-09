import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DayNightToggle = () => {
  const [isDay, setIsDay] = useState(true);

  const toggleTheme = () => {
    setIsDay(!isDay);
  };

  useEffect(() => {
    // Update body background and text color
    document.body.style.backgroundColor = isDay ? '#EDF2F2' : 'black';
    document.body.style.color = isDay ? '#3F4144' : '#E0EEEE';

    // Update button text color based on theme
    const button = document.querySelector('.day-night-toggle button');
    if (button) {
      button.style.color = isDay ? '#333' : '#EF2200';
    }
  }, [isDay]);

  return (
    <div className="day-night-toggle">
      <button onClick={toggleTheme}>
        {isDay ? <FaMoon size={20} /> : <FaSun size={20} />}
        <span className="toggle-text">{isDay ? ' Night' : ' Day'}</span>
      </button>
    </div>
  );
};

export default DayNightToggle;
