import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './QuestionCards.css';

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
    <div className="card-container">
      <ReactCardFlip isFlipped={isFlipped1} className="card" onClick={handleClick1}>
        <div className="card-front" key="front1">
          <img src="https://via.placeholder.com/150x150" alt="front card 1" onClick={handleClick1}/>
          <p>Front of Card 1</p>
        </div>
        <div className="card-back" key="back1">
          <img src="https://via.placeholder.com/150x150" alt="back card 1" onClick={handleClick1}/>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped2} className="card" onClick={handleClick2}>
        <div className="card-front" key="front2">
          <img src="https://via.placeholder.com/150x150" alt="front card 2" onClick={handleClick2}/>
          <p>Front of Card 2</p>
        </div>
        <div className="card-back" key="back2">
          <img src="https://via.placeholder.com/150x150" alt="back card 2" onClick={handleClick2}/>
        </div>
      </ReactCardFlip>

      <ReactCardFlip isFlipped={isFlipped3} className="card" onClick={handleClick3}>
        <div className="card-front" key="front3">
          <img src="https://via.placeholder.com/150x150" alt="front card 3" onClick={handleClick3}/>
          <p>Front of Card 3</p>
        </div>
        <div className="card-back" key="back3">
          <img src="https://via.placeholder.com/150x150" alt="back card 3" onClick={handleClick3}/>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default QuestionCards;
