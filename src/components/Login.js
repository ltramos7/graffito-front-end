import React, {Component} from 'react'

class Login extends Component{

    constructor(){
        super()
        this.state={
            user_name: '',
            password: '',
            loggedIn: false
        }
    }

    handleInputChange = (event) => {
        
        this.setState({
            [event.target.name]: event.target.value
        })
    }  

    handleLogin = (event) => {
        event.preventDefault()

        this.setState(prevState => ({
            loggedIn: !prevState.loggedIn
        }))   
                
        this.props.handleLoginSubmit(this.state.user_name, this.state.password, this.state.loggedIn, this.props.history)
    }



    render(){
        console.log(".............", this.state.loggedIn)
        return(
            <div>
                <form onSubmit={this.handleLogin} >
                    <input name='user_name' type="text" placeholder="username" onChange={this.handleInputChange}/>
                    <input name='password' type="password" placeholder="password" onChange={this.handleInputChange}/>
                    {/* <input type="submit" value="Submit" onSubmit={this.handleLoginSubmit} onClick={this.props.prUserState}/> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Login