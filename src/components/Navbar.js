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
        <div>
            <NavLink to='/' exact style={link}>
                Home
            </NavLink>

            <NavLink to='/murals' exact style={link}>
                Murals
            </NavLink>

            <NavLink to='/about' exact style={link}>
                About
            </NavLink>
        </div>
    )}
}

export default Navbar