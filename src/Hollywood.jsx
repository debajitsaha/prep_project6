import React, { useContext } from 'react'
import {Store} from './DataStore'
import { Link } from "react-router-dom";
function Hollywood() {
  const [ContextData]=useContext(Store);
    // const Navi=useNavigate()
    // const

  return (
    <div className='main-container'>
      
      {/* first container */}
      <div className='first_container'>
      <div className='bolly'><p>Hollywood</p></div>
      <div className='fullimg'>
      {ContextData.filter((item)=>item.id==="1").map((item,index)=>{
        console.log(item.id)
        return(
           
            <div >
            
            <Link to={'/bollywood/'+item.id}><img src={item.image} alt="Not found" state={{Data:index}} id='topimg'/></Link>
            <p key={index} className='topheading'>{item.heading}</p>
            </div>
          
           
        )
      })}
      </div>
      <div className='cardname'>
      {ContextData.filter((item)=>item.cat==="Bollywood").map((item,index)=>{
        console.log(item.id)
        return(
          <>
            <div className='card'>
            
            <Link to={'/bollywood/'+item.id}><img src={item.image} alt="Not found" state={{Data:index}} className='img'/></Link>
            <div className='title'>
            <h3 key={index} >{item.heading}</h3>
            <p>{item.description}</p></div>
            
            </div><hr /></>
            // </div>
           
        )
      })}
      
    </div>
    </div> 
    <div className='second_container'>
        <div>
          <h1>Top Story</h1>
        {ContextData.filter((item)=>(item.cat==="Bollywood"&& item.id%3===0)).map((item,index)=>{
        console.log(item.id)
        return(

          <>
            <div className='card1'>
            
            <Link to={'/bollywood/'+item.id}><img src={item.image} alt="Not found" state={{Data:index}} className='img'/></Link>
            <div className='title1'>
            <h3 key={index} >{item.heading}</h3>
            <p>{item.description}</p></div>
            
            </div><hr /></>
            // </div>
           
        )
      })}
        </div>
    </div>
    </div>
  )
}

export default Hollywood
