import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class MuralContainer extends Component{
   
    // once the function below works, pass it as props to <Murals>
    // also might want another map function to pass a single Mural object to render a MuralObj in <aMural>

    constructor(){
        super()
        this.state = {
            murals: []
        }
    }

    componentDidMount(){
        fetch("http://localhost:3000/murals")
        .then( resp => resp.json() )
        .then( muralData => this.setState({
          murals: muralData
        }))
      }
    
   
  
    render(){
        
        return(
            
            <div>
                <div>
                    <ul>
                        {this.state.murals.map(muralObj => {
                            return (
                                <li key={muralObj.id}>
                                    <h3 onClick={() => this.props.handleClick(muralObj)}>
                                        <Link to={`/murals/${muralObj.id}`}>{muralObj.mural_title}</Link>
                                    </h3>
                                    <p>{muralObj.description}</p>
                                </li> 
                            )
                        })}
                    </ul>
                </div>
                <div>Mural container here!</div>
            </div>
        )
    }
}

export default MuralContainer


