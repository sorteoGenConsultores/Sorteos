import React, { useState } from 'react';

const Lottery = () => {
  const [result, setResult] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    setSpinning(true);
    // Replace this with your own logic to generate a random result
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      setResult(randomNumber);
      setSpinning(false);
    }, 3000); // 3 seconds for demo purposes
  };

  return (
    <div>
      <img src="/path/to/your/image.jpg" alt="Lottery Image" />
      <div className={`roulette ${spinning ? 'spinning' : ''}`}>
        {/* Replace these with your own roulette options */}
        <div className="option">1</div>
        <div className="option">2</div>
        <div className="option">3</div>
        <div className="option">4</div>
        <div className="option">5</div>
        <div className="option">6</div>
        <div className="option">7</div>
        <div className="option">8</div>
        <div className="option">9</div>
        <div className="option">10</div>
      </div>
      <button onClick={handleSpin} disabled={spinning}>
        {spinning ? 'Espere por favor...' : 'Registrarse'}
      </button>
      {result !== null && (
        <p>El número ganador es: {result}</p>
      )}
    </div>
  );
};

export default Lottery;
