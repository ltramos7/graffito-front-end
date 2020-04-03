import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MuralContainer from './containers/MuralContainer';
import Mural from './components/Mural'
//flesh out the Home component (done)
//flesh out the Mural component (done)
//flesh out the NavBar component (done)
//import them here
//arrange the return to include the <Router> and <Route (with the junk inside here)>

class App extends Component {

  constructor(){
    super()
    this.state = {
      murals: [],
      mural: {}
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/murals")
    .then( resp => resp.json() )
    .then( muralData => this.setState({
      murals: muralData
    }))
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
          {/* <Route exact path='/murals' render={(props) => (<Murals {...props} onClick={this.onClick} murals={this.state.murals}/>)}/> */}
          <Route exact path='/murals' render={(props) => (<MuralContainer {...props} handleClick={this.handleClick} murals={this.state.murals} mural={this.state.mural}/>)}/>
{/* 
          <Route exact path='/murals/:id' component={Mural}/> */}
          <Route exact path='/murals/:id' render={(props) => (<Mural {...props} mural={this.state.mural}/>)}/>
          
          <Route exact path='/about' component={About}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
