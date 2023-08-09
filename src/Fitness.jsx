import React, { useContext } from 'react'
import DataStore from './DataStore';

function Fitness() {
    const Context=useContext(DataStore);
    
    
  return (
    <div>
      <h1>Fitness</h1>
      <p>{Context.data[1].heading}</p>
    </div>
  )
}

export default Fitness
