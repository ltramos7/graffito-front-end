import React, {Component} from 'react'

class Login extends Component{

    constructor(){
        super()
        this.state={
            user_name: '',
            password: ''
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLoginSubmit = (event) => {
        event.preventDefault()


        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        }
        
        fetch("http://localhost:3000/login", reqObj)
        .then( resp => resp.json() )
        .then( data => {
            if (data.error){
                alert(data.error)
            }else{
                localStorage.setItem('token', data.token)
                this.props.history.push(`/profile/${data.id}`)
            }

        } )

        //need to update loggedIn to true in app.js
    }



    render(){
        
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name='user_name' type="text" placeholder="username" onChange={this.handleInputChange}/>
                    <input name='password' type="password" placeholder="password" onChange={this.handleInputChange}/>
                    <input type="submit" value="Submit" onClick={this.handleLoginSubmit}/>
                </form>
            </div>
        )
    }
}

export default Login