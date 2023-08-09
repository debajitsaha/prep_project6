import React, { useContext } from 'react'
import {Store} from './DataStore'
import { useParams } from 'react-router-dom';

function Details() {
     const [ContextData]=useContext(Store);
    const params=useParams();
    // const IndexValue=useLocation().state.Data;
    // console.log(IndexValue)
    console.log(params.id)
    console.log(ContextData)

  return (
    <div>
      {ContextData.filter((item)=>(item.id === params.id)).map((item,index)=>{
       
        return(
            <>
            
            <h1 key={index}>{item.heading}</h1>
            <img src={item.image} alt='not found'/>
            </>
            
        )
      })}
      <h1>hi</h1>
    </div>
  )
}

export default Details
