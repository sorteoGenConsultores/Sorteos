import React from 'react';

function ParticipanteUnidad({ nombre, index }) {

   return (
      <div className='participante'>
         {nombre}
      </div>
   );
}

export default ParticipanteUnidad;