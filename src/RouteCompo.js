import React, { useState } from 'react'
import{NavLink, Route, BrowserRouter, Routes}from 'react-router-dom';
import DataStore from './DataStore';
import Home from './Home';
import Bollywood from './Bollywood';
import Tollywood from "./Tollywood"
import Hollywood from './Hollywood';
import Food from './Food';

import './App.css';
import Fitness from './Fitness';
import Details from './Details';
function RouteCompo() {
 const [data]=useState([
    {
        id:1,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        heading:"Bholaa Movie Review : Bholaa serves great action in this fast-paced thriller",
        description:"Bholaa (Ajay Devgn), who is released from prison after 10 years, is desperately waiting to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to help her in a high-pressure situation that involves the drug mafia, the common man and a truck-load of cops.",
        cat:"Bollywood"


    },
    {
        id:2,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        heading:"Bholaa Movie Review : Bholaa serves great action in this fast-paced thriller",
        description:"Bholaa (Ajay Devgn), who is released from prison after 10 years, is desperately waiting to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to help her in a high-pressure situation that involves the drug mafia, the common man and a truck-load of cops.",
        cat:"Bollywood"


    },
    {
        id:3,
        image:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRI_Owr6ghUx2TRlF-if7hc9usc-59VppAk2HoY7nIyzPhBCpPj",
        heading:"Bholaa Movie Review : Bholaa serves great action in this fast-paced thriller",
        description:"Bholaa (Ajay Devgn), who is released from prison after 10 years, is desperately waiting to meet his daughter for the first time. However, he finds himself in a precarious situation when IPS officer Diana Joseph (Tabu) leaves him with no choice but to help her in a high-pressure situation that involves the drug mafia, the common man and a truck-load of cops.",
        cat:"Bollywood"


    },
  
 ])
  return (
    <div>
        <BrowserRouter >
        <h1>The Siren</h1>
        <div className="parent">
            <NavLink to={'/'} className="navbar"> Home </NavLink>
            <NavLink to={'/bollywood'} className="navbar">Bollywood</NavLink>
            <NavLink to={'/hollywood'} className="navbar">Hollywood</NavLink>
            <NavLink to={'/tollywood'} className="navbar">Tollywood</NavLink>
            <NavLink to={'/food'} className="navbar">Food</NavLink>
            <NavLink to={'/fitness'} className="navbar">Fitness</NavLink>
            </div>
            <Routes>
                <Route path={'/bollywood'} element={
                    <DataStore.Provider value={{data}}>
                        <Bollywood/>
                    </DataStore.Provider>
                }></Route>
                 <Route path='/' element={<Home/>}></Route>
                <Route path='/tollywood' element={<Tollywood/>}></Route>
                <Route path='/hollywood' element={<Hollywood/>}></Route>
                <Route path='/food' element={<Food/>}></Route>
                <Route path='/Fitness' element={<Fitness/>}></Route>
                <Route path='/:page/:id' element={<Details/>}></Route>
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default RouteCompo
