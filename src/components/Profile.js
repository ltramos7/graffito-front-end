import React, { Component } from "react";
import MuralCard from './MuralCard'
import Card from "react-bootstrap/Card";

class Profile extends Component{

    constructor(){
        super()
        this.state={
            user: {},
            favorite_murals: [],
            mural: {},
            isLoading: false
        }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${this.props.user.id}`)
        .then( resp => resp.json() )
        .then(
            userData => this.setState({
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
        
        return(
            <div>
                <p>Hello {this.state.user.first_name}!</p>
                <p>Here is a list of your favorite murals:</p>
                <div>
                    {this.state.favorite_murals.map(favorite_mural => {
                        return (
                            <Card>
                                <Card.Body>
                                    <Card.Title onClick={() => {this.handleMuralClick(favorite_mural)}}>
                                        {favorite_mural.mural_title}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>     
                <MuralCard mural={this.state.mural}/>
            </div>
        )
    }
}

export default Profile