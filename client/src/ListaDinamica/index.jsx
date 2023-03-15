import React from 'react';
// import { useEffect } from 'react';
import { useState } from 'react';
import "./listaDinamica.css"

import dummyData from './listaDummy.json';
// import ParticipanteUnidad from './ParticipanteUnidad';

function ListaDinamica({ listaParticipantes }) {
   const [currentIndex, setCurrentIndex] = React.useState(0);
   const [animationActive, setAnimationActive] = React.useState(false);
   const [intervalId, setIntervalId] = React.useState(null);

   const { participantes } = listaParticipantes ? { participantes: listaParticipantes } : dummyData;
   const partipantesLen = participantes.length;

   function handleStopAnimation() {
      setAnimationActive(false);
      clearInterval(intervalId);
      setIntervalId(null);
   }


   function handleStartAnimation() {
      setAnimationActive(true);
      const id = setInterval(() => {
         setCurrentIndex(currentIndex => (currentIndex + 1) % partipantesLen);
      }, 15);
      setIntervalId(id);
   }



   return (
      <>
         <button onClick={animationActive ? handleStopAnimation : handleStartAnimation}>
            {animationActive ? 'Detener' : 'Iniciar'} animación
         </button>
         <div className="listaCompleta">
            {participantes.map((nombre, index) => {
               return <div className={`participante ${(currentIndex === index) ? 'active' : ''}`}>
                  {nombre}
               </div>
            }
            )}
         </div>
      </>
   );
}

export default ListaDinamica;