import "./NavbarStyle.css"
import React from 'react'
import { Component } from "react";
import { NavLink } from "react-router-dom";
class Navbar extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
  return (
    <>
    <nav>
        <div className='logo'>
              <span className='vartical'>The</span><span id='head'>Siren</span> 
        </div>
        <div  >
            <ul id="navbar" className={this.state.clicked?"#navbar active":"#navbar"}>
                <li><a href="/" > <NavLink to={'/'} className="navbar" onClick={this.handleClick}> Home </NavLink></a></li>
                <li><a href="/bollywood" ><NavLink to={'/bollywood'} className="navbar"onClick={this.handleClick}>Bollywood</NavLink></a></li>
                <li><a href="/technology" ><NavLink to={'/technology'} className="navbar"onClick={this.handleClick}>Technology</NavLink></a></li>
                <li><a href="/hollywood" > <NavLink to={'/hollywood'} className="navbar"onClick={this.handleClick}>Hollywood</NavLink></a></li>
                <li> <a href="/fitness" ><NavLink to={'/fitness'} className="navbar"onClick={this.handleClick}>Fitness</NavLink></a></li>
                <li><a href="/food" ><NavLink to={'/food'} className="navbar"onClick={this.handleClick}>Food</NavLink></a></li>
            </ul>
        </div>
        <div id="mobile" onClick={this.handleClick}>
            <i id="bar"className={this.state.clicked?'fas fa-times':'fas fa-bars'}></i>
            

        </div>
    </nav>
    </>
  )
}
}

export default Navbar
