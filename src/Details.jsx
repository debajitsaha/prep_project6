import React, { useContext } from 'react'
import {Store} from './DataStore'
import { useParams } from 'react-router-dom';
import "./DetailsStyle.css";
import rythm from "./rythm.svg";
import share from "./share.svg";
import { Link } from "react-router-dom";
import MaskGroup16 from "./MaskGroup16.png"
import Footer from "./Footer"

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
            {/* <h1 key={index}>{item.heading}</h1> */}
            {/* <img src={} alt='not found'/> */}
            <div className='details1'>
              <div className='interdetails1'>
                <div>
                   <img src={rythm} alt="not foumd"/><span className='text'>3.8k</span><br/><br/>
                   <img src={share} alt="not foumd"/><span className='text'>Share this article</span>
                </div>
              </div>
              <div className='interdetails2'>
                <div><h1 key={index}>{item.heading}</h1></div>
                <div className='indetail'>
                <div className='detailinner'>
                  <span><img src={MaskGroup16} alt="not found" /></span>
                  <span className='text1'>Debajit saha</span><br/>
                  <span className='text2'>Aug 17, 2023 10min read</span>
                </div>
                <div className='fblogo'>
                  <img className='fbimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEYw3IUJUK5--MeiWFVuiDK3QcgB2tZiSaA&usqp=CAU" alt="not found" />
                </div>
                </div>
                <div>
                  <img src={item.image} alt=" not found" width="100%" />
                </div>
                <div className='description1'>
                  <p>{item.description}</p>
                </div>
                <div className='detailinner'>
                  <span><img src={MaskGroup16} alt="not found" /></span>
                  <span className='text1'>Written By</span><br/>
                  <span className='text2'>Debajit saha</span>
                </div>
              </div>
              <div className='interdetails3'>
                
              </div>
            </div>
            <div className='details2'>
               <div>
                <h1 id='more'>More From The Siren</h1><br/>
                <div className='detailsparent'>
                {ContextData.filter((item)=>(item.id%16===0)).map((item,index)=>{
        console.log(item.id)
        return(
          <div className='carddetails'>
            <div className='card3'>
            
            <Link to={'/bollywood/'+item.id}><img src={item.image} alt="Not found" state={{Data:index}} className='img'/></Link>
            <div className='title'>
            <h3 key={index} >{item.heading}</h3>
            <p>{item.description}</p></div>
            
            </div>
            <div className='detailinner'>
                  <span><img src={MaskGroup16} alt="not found" /></span>
                  <span className='text1'>Debajit saha</span><br/>
                  <span className='text2'>Aug 17, 2023 10min read</span>
                </div>
            </div>
            // </div>
           
        )
      })}
                  

                </div>
               </div>

            </div>
            </>
            
        )
      })}
      <Footer/>
    </div>
  )
}

export default Details
