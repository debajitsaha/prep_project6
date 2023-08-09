import React, { useContext } from 'react'
import DataStore from './DataStore'
import { Link } from "react-router-dom";

function Bollywood() {
    
    const ContextData=useContext(DataStore);
    // const Navi=useNavigate()

  return (
    <div>
      {ContextData.data.filter((item)=>item.cat==="Bollywood").map((item,index)=>{
        console.log(item.id)
        return(
            // <div className='parent1'>
            <span className='card'>
            <h3 key={index} >{item.heading}</h3>
            <Link to={'/bollywood/'+item.id}><img src={item.image} alt="Not found"/></Link>
            <p>{item.description}</p>
            </span>
            // </div>
           
        )
      })}
      <h1>bollywood</h1>
    </div>
  )
}

export default Bollywood