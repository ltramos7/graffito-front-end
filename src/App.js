import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

import './App.css';
// import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MuralContainer from './containers/MuralContainer';
import Mural from './components/Mural'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/Profile'
import Navigation from './components/Navigation'


//flesh out the Home component (done)
//flesh out the Mural component (done)
//flesh out the NavBar component (done)
//import them here
//arrange the return to include the <Router> and <Route (with the junk inside here)>

class App extends Component {

  constructor() {
    super()
    this.state = {
      mural: null,
      user: null,
      isLoading: true,
      loggedIn: false,
      favoriteId: null
    }
  }

  componentDidMount() {
    const token = localStorage.token

    if (token) {
      fetch("http://localhost:3000/current_user", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(data => this.setState({
          user: data,
          isLoading: false
        }))
    }

  }

  handleLoginSubmit = (user_name, password, loggedIn, history) => {
    const reqObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_name: user_name,
        password: password,
        loggedIn: loggedIn
      })
    }

    fetch("http://localhost:3000/login", reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          this.setState({
            user: data
          })
          localStorage.setItem('token', data.token)
          history.push(`/profile/${this.state.user.id}`)
          // history.push(`/`)
        }

      })
  }

  updateUser = (user) => {
    this.setState({
      user: user
    })
  }

  handleClick = (muralObj) => {
    return (this.setState({
      mural: muralObj
    }))
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({
      user: null
    })

  }

  addFavorite = (user, muralObj) => {
    const reqObj = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: user,
        mural: muralObj
      })
    }

    fetch('http://localhost:3000/favorites', reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error){
          alert(data.error)
        }else{
          this.setState({
            favoriteId: data.id
          })
          alert("Favorite Added!")
        }
      })

      //get the profile component here and and the favorite ID in as a prop
      
    // eventually, instead of console.log(), there will be a function there showInFavorites() that will concat or use spread to add the new favorite object to the existing list. 
  }

  deleteFavorite = (data) => {  
    
    const deleteObj = {
            method: 'DELETE'
    }
    fetch(`http://localhost:3000/favorites/${this.state.favoriteId}`, deleteObj)
    .then( resp => resp.json() )
    .then( data => console.log(data))

}

  render() {
    console.log(this.state.favoriteId)
    return (

      <BrowserRouter>
        <div>
          {this.state.user ? <Navigation user={this.state.user} handleLogout={this.handleLogout} /> : <Navigation />}
          {/* <Jumbotron>
          
          </Jumbotron> */}
          <div className="jumbotron">
          <h1>Hello</h1>
          </div>


          <Route exact path='/' component={Home} />

          <Route exact path='/murals' render={(props) => (<MuralContainer {...props} handleClick={this.handleClick} addFavorite={this.addFavorite} mural={this.state.mural} user={this.state.user} />)} />
          <Route exact path='/murals/:id' render={(props) => (<Mural {...props} mural={this.state.mural} />)} />
          <Route exact path='/signup' render={(props => (<Signup {...props} updateUser={this.updateUser} />))} />
          <Route exact path='/login' render={(props) => <Login {...props} handleLoginSubmit={this.handleLoginSubmit} />} />
          <Route exact path='/about' component={About} />
          {this.state.isLoading ? null : <Route exact path='/profile/:id' render={(props) => (<Profile {...props} user={this.state.user} deleteFavorite={this.deleteFavorite} />)} />}


        </div>
      </BrowserRouter>
    )
  }
}

export default App;
