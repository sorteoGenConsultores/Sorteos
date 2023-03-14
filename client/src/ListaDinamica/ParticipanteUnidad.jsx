import React from 'react';

function ParticipanteUnidad({ nombre, index, isWinner }) {

   return (
      <div className={`participante delay-1 ${isWinner ? "transformed-state" : ""}`}>
         {nombre}
      </div>
   );
}

export default ParticipanteUnidad;