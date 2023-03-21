import React from 'react';
import Roulette from '../Roulette/Roulette';
import QuestionCards from '../questioncards/QuestionCards';

function Lottery() {
  return (
    <div>
      <img src="https://example.com/lottery-image.png" alt="Lottery" />
      <Roulette />
      <QuestionCards />
      <button>Register</button>
    </div>
  );
}

export default Lottery;
