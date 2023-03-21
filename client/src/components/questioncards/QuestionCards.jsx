import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
// import QuestionCards from "./QuestionCards.css"

function QuestionCards() {
  const [isFlipped1, setIsFlipped1] = useState(false);
  const [isFlipped2, setIsFlipped2] = useState(false);
  const [isFlipped3, setIsFlipped3] = useState(false);

  const handleClick1 = () => {
    setIsFlipped1(!isFlipped1);
  };

  const handleClick2 = () => {
    setIsFlipped2(!isFlipped2);
  };

  const handleClick3 = () => {
    setIsFlipped3(!isFlipped3);
  };

  return (
    <div>
      <button onClick={handleClick1}>Flip Card 1</button>
      <ReactCardFlip isFlipped={isFlipped1}>
        <div className="card-front" key="front1">Front of Card 1</div>
        <div className="card-back" key="back1">Back of Card 1</div>
      </ReactCardFlip>

      <button onClick={handleClick2}>Flip Card 2</button>
      <ReactCardFlip isFlipped={isFlipped2}>
        <div className="card-front" key="front2">Front of Card 2</div>
        <div className="card-back" key="back2">Back of Card 2</div>
      </ReactCardFlip>

      <button onClick={handleClick3}>Flip Card 3</button>
      <ReactCardFlip isFlipped={isFlipped3}>
        <div className="card-front" key="front3">
          <div className="card-header">
            <h2>Card Title</h2>
            <div className="card-icon">Icon</div>
          </div>
          <div className="card-content">Front of Card 3</div>
        </div>
        <div className="card-back" key="back3">
          <div className="card-header">
            <h2>Card Title</h2>
            <div className="card-icon">Icon</div>
          </div>
          <div className="card-content">Back of Card 3</div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default QuestionCards;
