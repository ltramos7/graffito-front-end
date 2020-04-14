import React, { Component } from "react";
import {NavLink} from 'react-router-dom'



const link = {
    background: 'pink',
    width: '100px',
    margin: '6px 6px 6px 6px',
    color: 'blue'
}



class Navbar extends Component{



    handleLogout = () => {
        localStorage.removeItem("token")

    }

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

                <NavLink to='/signup' exact style={link}>
                    Signup
                </NavLink>

                {this.props.user ?  <NavLink to='/' exact style={link} onClick={this.props.handleLogout}>
                    Logout
                </NavLink> : <NavLink to='/login' exact style={link}>
                    Login
                </NavLink> } 

                {this.props.user ? <NavLink to= {`/profile/${this.props.user.id}`} exact style={link}>
                    My Profile
                </NavLink> : null}
          

        </div>
    )}
}

export default Navbar