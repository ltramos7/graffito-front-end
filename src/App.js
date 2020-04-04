import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import MuralContainer from './containers/MuralContainer';
import Mural from './components/Mural'
import Signup from './components/Signup'
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
      mural: {},
      first_name: "",
      last_name: "",
      user_name:"",
      password: ""
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

  handleInputChange = (event)=> {
  
    return (console.log("What in the world!!"))
    // this.setState({
    //   [event.target.first_name]: event.target.value,
    //   [event.target.last_name]: event.target.value,
    //   [event.target.user_name]: event.target.value,
    //   [event.target.password]: event.target.value
    // })
  }

  handleSubmit = (event) => {
  
    event.preventDefault()

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({first_name: this.state.first_name,
                           last_name: this.state.last_name,
                           user_name: this.state.user_name,
                           password: this.state.password})
    }
    
    fetch("http://localhost:3000/users", reqObj)
    .then( resp => resp.json() )
    .then( data => console.log(data))
  }


  render(){
    console.log(this.state.murals)
    return(
      <BrowserRouter>
        <div>
          <Navbar/>

          <Route exact path='/' component={Home}/>
    
          <Route exact path='/murals' render={(props) => (<MuralContainer {...props} handleClick={this.handleClick} murals={this.state.murals} mural={this.state.mural}/>)}/>

          <Route exact path='/murals/:id' render={(props) => (<Mural {...props} mural={this.state.mural}/>)}/>
        
          <Route exact path='/signup' render={(props) => (<Signup {...props} handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />)}/>

          <Route exact path='/about' component={About}/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
