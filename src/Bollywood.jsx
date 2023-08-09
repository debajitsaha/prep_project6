import React, { useContext } from 'react'
import {Store} from './DataStore'
import { Link } from "react-router-dom";

function Bollywood() {
    
    const [ContextData]=useContext(Store);
    // const Navi=useNavigate()

  return (
    <div>
      <h1 className='bolly'>bollywood</h1>
      {ContextData.filter((item)=>item.cat==="Bollywood").map((item,index)=>{
        console.log(item.id)
        return(
            // <div className='parent1'>
            <span className='card'>
            <h3 key={index} >{item.heading}</h3>
            <Link to={'/bollywood/'+item.id}><img src={item.image} alt="Not found" state={{Data:index}}/></Link>
            <p>{item.description}</p>
            </span>
            // </div>
           
        )
      })}
      
    </div>
  )
}

export default Bollywood