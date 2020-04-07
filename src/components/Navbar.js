import React, { Component } from "react";
import {NavLink} from 'react-router-dom'


const link = {
    background: 'pink',
    width: '100px',
    margin: '6px 6px 6px 6px',
    color: 'blue'
}

class Navbar extends Component{
    render(){
        return(
        <div className="navBar">
            <NavLink to='/' exact style={link} className="left">
                Home
            </NavLink>

            <NavLink to='/murals' exact style={link} className="left">
                Murals
            </NavLink>

            <NavLink to='/about' exact style={link}className="left">
                About
            </NavLink>

            <NavLink to='/signup' exact style={link} className="right">
                Signup
            </NavLink>

            <NavLink to='/login' exact style={link} className="right">
                Login
            </NavLink>

        </div>
    )}
}

export default Navbar