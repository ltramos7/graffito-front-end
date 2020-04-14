import React, { Component } from "react";
import MuralCard from './MuralCard'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

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

   

    // Cesar's method
    // deleteFavorite = (data) => {
        
    //     const allMurals = this.state.favorite_murals
    //     const filteredMurals = allMurals.filter(mural => mural.id !== data.id)
    //     console.log(filteredMurals)
        
    //     const deleteObj = {
    //             method: 'PUT',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({
    //               user: {favorite_murals: filteredMurals}})
        
    //     }
    //     fetch(`http://localhost:3000/users/${this.props.user.id}`, deleteObj)
    //     .then( resp => resp.json() )
    //     .then( data => {
    //         this.setState({
    //             ...this.state, favorite_murals:data.favorite_murals
    //         })
    //     })
    // }

    render(){
        console.log(this.props.favoriteId)
        return(
            <div>
                {/* <p>Hello {this.state.user.first_name}!</p> */}
                <p>Hello {this.props.user.first_name}!</p> 
                {/* This will only work if I refresh it */}
                <p>Here is a list of your favorite murals:</p>
                <div>
                    {this.state.favorite_murals.map(favorite_mural => {
                        return (
                            <Card key={favorite_mural.id}>
                                <Card.Body>
                                    <Card.Title onClick={() => {this.handleMuralClick(favorite_mural)}}>
                                        {favorite_mural.mural_title}
                                    </Card.Title>
                                    <Button variant="test" onClick={()=> {this.props.deleteFavorite(favorite_mural)}}>Delete From Favorites</Button>
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