import React from 'react';

const MarqueeText = () => {
  return (
    <>
      <div className="marquee-container">
        <div className="marquee marquee-left">
          <h1>WILD IDEA'S! --------WILD IDEA'S! --------WILD IDEA'S! --------WILD IDEA'S! -------- </h1>
          <h1>WILD IDEA'S! --------WILD IDEA'S! --------WILD IDEA'S! --------WILD IDEA'S! -------- </h1>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee marquee-right">
          <h1>LETS DIVE IN!--------LETS DIVE IN!--------LETS DIVE IN!--------LETS DIVE IN!--------</h1>
          <h1>LETS DIVE IN!--------LETS DIVE IN!--------LETS DIVE IN!--------LETS DIVE IN!--------</h1>
        </div>
      </div>
    </>
  );
};

export default MarqueeText;


