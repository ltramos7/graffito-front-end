import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav'


class Navigation extends Component{

    handleLogout = () => {
        localStorage.removeItem("token")

    }

    render(){
        return(
        <div>
            <Nav >
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/murals">Murals</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    {this.props.user ? null : <Nav.Link href="/signup">Signup</Nav.Link> } 
                </Nav.Item>

                <Nav.Item>
                    {this.props.user ?  <Nav.Link href="/" onClick={this.props.handleLogout}>
                        Logout
                    </Nav.Link> : <Nav.Link href="/login">
                        Login
                    </Nav.Link> } 
                </Nav.Item>

                <Nav.Item>
                    {this.props.user ? <Nav.Link href= {`/profile/${this.props.user.id}`}>My Profile</Nav.Link> : null}
                </Nav.Item>
            </Nav>
        </div>
    )}
}

export default Navigation