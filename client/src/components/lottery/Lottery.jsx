import React from 'react';
import Roulette from '../Roulette/Roulette';
import QuestionCards from '../questioncards/QuestionCards';

function Lottery() {
  return (
    <div>
      <img src="https://elordenmundial.com/wp-content/uploads/2020/01/loteria-portada.png" alt="Lottery" />
      <Roulette />
      <QuestionCards />
      <button>Register</button>
    </div>
  );
}

export default Lottery;
