import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./listaDinamica.css"

import dummyData from './listaDummy.json';
import ParticipanteUnidad from './ParticipanteUnidad';

function ListaDinamica(props) {
   const { participantes } = dummyData
   const [selected, setSelected] = useState(0)
   const [changing, setChanging] = useState(true)

   function change() {
      const elements = document.querySelectorAll("div.box");
      for (const element of elements) {
         element.classList.toggle("transformed-state");
      }
   }

   function changeSelected(max = 10) {
      const actual = selected
      console.log('me corro')
      if (actual >= max - 1) {
         setSelected(0)
         return
      }
      setSelected(actual + 1)
   }

   async function running() {
      while (changing) {
         await setTimeout(changeSelected, 10000)
      }
   }

   useEffect(() => {
      running()
   }, [])


   return (
      <div className="listaCompleta">
         {selected}
         <div className="box delay-1">0.5 seconds</div>

         <button id="change" onClick={() => { change() }}>Change</button>
         {participantes.map((participante, index) => {
            return <ParticipanteUnidad nombre={participante} index={index} key={`Participante_${index}_${participante}`} />
         })}
      </div>
   );
}

export default ListaDinamica;