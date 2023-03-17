import React, { useState } from 'react';
import './styles.css';

const FlipCard = ({ text }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleClick}>
      <div className="flip-card-front">
        <h2>Click to flip</h2>
      </div>
      <div className="flip-card-back">
        <p>{text}</p>
      </div>
    </div>
  );
};

const CardSection = () => {
  const shortText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.';

  return (
    <div className="card-section">
      <div className="centered-card">
        <p>{shortText.substring(0, 200)}</p>
      </div>
      <div className="flip-cards">
        <FlipCard text="Card 1 Text" />
        <FlipCard text="Card 2 Text" />
        <FlipCard text="Card 3 Text" />
      </div>
    </div>
  );
};

export default CardSection;