import React, { Component } from "react";

class Signup extends Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input name={'first_name'} onChange={this.props.handleInputChange} placeholder="First Name"/>
                    <input name={'last_name'} onChange={this.props.handleInputChange} placeholder="Last Name"/>
                    <input name={'user_name'} onChange={this.props.handleInputChange} placeholder="username"/>
                    <input name={'password'} onChange={this.props.handleInputChange} placeholder="password"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Signup