import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MuralContainer from './containers/MuralContainer';
import Mural from './components/Mural'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'


//flesh out the Home component (done)
//flesh out the Mural component (done)
//flesh out the NavBar component (done)
//import them here
//arrange the return to include the <Router> and <Route (with the junk inside here)>

class App extends Component {

  constructor(){
    super()
    this.state = {
      mural: null,
      user: null,
      isLoading: true,
      loggedIn: false
    }
  }

  componentDidMount(){
    const token = localStorage.token

    if (token) {
      fetch("http://localhost:3000/current_user", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`}
      })
      .then(resp => resp.json() )
      .then( data => this.setState({
        user: data,
        isLoading: false
      }) )
    }

  }



  handleLoginSubmit = (user_name, password, loggedIn, history) => {
     const reqObj = {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify({
           user_name: user_name,
           password: password,
           loggedIn: loggedIn
         })
     }
    
     fetch("http://localhost:3000/login", reqObj)
     .then( resp => resp.json() )
     .then( data => { 
         if (data.error){
             alert(data.error)
         }else{
             this.setState({
               user: data
             })
             localStorage.setItem('token', data.token)
             history.push(`/profile/${this.state.user.id}`)
            // history.push(`/`)
         }

     } )
}

updateUser = (user) => {
  this.setState({
    user: user
  })
} 

  handleClick = (muralObj) => {
    return(this.setState({
      mural: muralObj
    }))  
  }


  handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({
      user: null
    })

  }

  favoriteButton = () => {
    return (console.log("favorite button clicked"))
  }

  render(){
  
      return(

        <BrowserRouter>
          <div>
            
            {this.state.user ? <Navbar user={this.state.user} handleLogout={this.handleLogout}/> : <Navbar/>}
            
            <Route exact path='/' component={Home}/>
      
            <Route exact path='/murals' render={(props) => (<MuralContainer {...props} handleClick={this.handleClick} favoriteButton={this.favoriteButton} user={this.state.user}/>)}/>
            <Route exact path='/murals/:id' render={(props) => (<Mural {...props} mural={this.state.mural}/>)}/>
            <Route exact path='/signup' render={(props => (<Signup {...props} updateUser={this.updateUser}/>))}/>
            <Route exact path='/login' render={ (props) => <Login {...props} handleLoginSubmit={this.handleLoginSubmit} /> }/>
            <Route exact path='/about' component={About}/>
            {this.state.isLoading ? null : <Route exact path='/profile/:id' render={(props) => (<Profile {...props} user={this.state.user} />)}/>}


          </div>
        </BrowserRouter>
      )
    }
}

export default App;
