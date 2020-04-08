import React, { Component } from "react";

class Signup extends Component{

    constructor(){
    
        super()

        this.state={
            first_name: "",
            last_name: "",
            user_name:"",
            password: ""
        }
    }

    handleInputChange = (event)=> {
  
        this.setState({
          ...this.state, [event.target.name]: event.target.value
        })
      }

    handleSubmit = (event) => {

        event.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }
        
        fetch("http://localhost:3000/signup", reqObj)
        .then( resp => resp.json() )
        .then( data => {
            if (data.error){
                alert(data.error)
            }else{
                localStorage.setItem('token', data.token)
                this.props.history.push(`/profile/${data.id}`)
            }

        })
    }

    render(){
        
        return(
            
            <div>
                <form onSubmit={this.handleSubmit}>
                <input name='first_name' onChange={this.handleInputChange} placeholder="First Name"/>
                    <input name='last_name' onChange={this.handleInputChange} placeholder="Last Name"/>
                    <input name='user_name' onChange={this.handleInputChange} placeholder="username"/>
                    <input name='password' type="password" onChange={this.handleInputChange} placeholder="password"/>
                    <input type="submit" value="Submit" />
                </form>
                Signup page
            </div>
        )
    }
}

export default Signup