import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'


const data = []

for(let cont=0;cont<20;cont++){
  if(cont%2===0){
    data.push({ option: `${cont}`, style: { backgroundColor: 'red', textColor: 'black' }  })
  }else{
    data.push({ option: `${cont}`, style: { backgroundColor: 'black', textColor: 'red' }  })
  }
}
const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColor='#0074D9' // Set the background color to blue

        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </div>
  )
}

export default Roulette;
