import React from 'react'
import{NavLink, Route, BrowserRouter, Routes}from 'react-router-dom';
import Home from './Home';
import Bollywood from './Bollywood';
import Techonology from './Techonology';
import Hollywood from './Hollywood';
import Food from './Food';

import './App.css';
import Fitness from './Fitness';
import Details from './Details';
import DataStore from './DataStore';
function RouteCompo() {
 
  return (
    <div>
        {/* Heading */}
        <BrowserRouter >
        <div className='heading'>
              <span className='vartical'>The</span><span id='head'>Siren</span> 
        </div>
        {/* Navbar */}
        <div className="parent">
            <NavLink to={'/'} className="navbar"> Home </NavLink>
            <NavLink to={'/bollywood'} className="navbar">Bollywood</NavLink>
            <NavLink to={'/hollywood'} className="navbar">Hollywood</NavLink>
            <NavLink to={'/technology'} className="navbar">Technology</NavLink>
            <NavLink to={'/fitness'} className="navbar">Fitness</NavLink>
            <NavLink to={'/food'} className="navbar">Food</NavLink>
            </div>
            
            <DataStore>
            <Routes>
                <Route path={'/bollywood'} element={<Bollywood/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/technology' element={<Techonology/>}></Route>
                <Route path='/hollywood' element={<Hollywood/>}></Route>
                <Route path='/food' element={<Food/>}></Route>
                <Route path='/Fitness' element={<Fitness/>}></Route>
                <Route path='/:page/:id' element={<Details/>}></Route>
            </Routes>
            </DataStore>
        </BrowserRouter>
      
    </div>
  )
}

export default RouteCompo
