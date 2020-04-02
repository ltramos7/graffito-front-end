import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Murals from './components/Murals'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
//flesh out the Home component (done)
//flesh out the Mural component (done)
//flesh out the NavBar component (done)
//import them here
//arrange the return to include the <Router> and <Route (with the junk inside here)>




class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route exact path='/murals' component={Murals}/>
          <Route exact path='/about' component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;
