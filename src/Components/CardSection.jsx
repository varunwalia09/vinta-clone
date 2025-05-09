import React from 'react';

const CardSection = () => {
  const cards = [
    { logo: '/src/assets/logo5.jpg', name: 'Vinta', position: 'CEO' },
    { logo: '/src/assets/logo4.jpg', name: 'Diwakar Kalia', position: 'CTO' },
    { logo: '/src/assets/logo3.jpg', name: 'Reza', position: 'Designer' },
    { logo: '/src/assets/logo7.jpg', name: 'Leisha', position: 'WordPress Developer' },
    { logo: '/src/assets/logo6.jpg', name: 'Manoj', position: 'Designer' },
  ];

  return (
    <div className="card-wrapper"> {/* Wrapper div added here */}
      <section className="card-section">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.logo} alt={card.name} className="card-logo" />
            <h2 className="card-name">{card.name}</h2>
            <p className="card-position">{card.position}</p>
            <button className="card-button">Watch Now</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardSection;
