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
      mural: {},
      
    }
  }

  handleClick = (muralObj) => {
    return(this.setState({
      mural: muralObj
    }))  
  }


  render(){
    
    return(
      <BrowserRouter>
        <div>
          <Navbar/>

          <Route exact path='/' component={Home}/>
    
          <Route exact path='/murals' render={(props) => (<MuralContainer {...props} handleClick={this.handleClick} mural={this.state.mural}/>)}/>

          <Route exact path='/murals/:id' render={(props) => (<Mural {...props} mural={this.state.mural}/>)}/>

          <Route exact path='/signup' component={Signup}/>
          {/* <Route exact path='/login' component={Login}/> */}
          <Route exact path='/login' render={ (props) => <Login {...props} /> }/>
        
          {/* <Route exact path='/signup' render={(props) => (<Signup {...props} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />)}/> */}

          <Route exact path='/about' component={About}/>

          <Route exact path='/profile/:id' render={(props) => (<Profile {...props} />)}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
