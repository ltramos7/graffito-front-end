import React, { Component } from "react";
import MuralCard from './MuralCard'

class Profile extends Component{

    constructor(){
        super()
        this.state={
            user: {},
            favorite_murals: [],
            mural: {}
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.user.id}`)
        .then( resp => resp.json() )
        .then( userData => this.setState({
            user: userData,
            favorite_murals: userData.favorite_murals
        }))
    }

    handleMuralClick = (favorite_mural) => {
        return (this.setState({
            mural: favorite_mural
        }))
    }
    

    render(){
        // console.log(this.state.mural)
        return(
            <div>
                <p>Hello {this.state.user.first_name}!</p>
                <p>Here is a list of your favorite murals:</p>
                <ul>
                    {this.state.favorite_murals.map(favorite_mural => {
                        return (<li key={favorite_mural.id} onClick={() => {this.handleMuralClick(favorite_mural)}}>{favorite_mural.mural_title}</li>)
                    })}
                </ul>     
                <MuralCard mural={this.state.mural}/>
            </div>
        )
    }
}

export default Profile