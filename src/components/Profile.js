import React, { Component } from "react";
import MuralCard from './MuralCard'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            user: {},
            allFavorites: [],
            favorite_murals: [],
            mural: {},
            isLoading: false,
            favObjs: []
        }
    }
   
    componentDidMount() {
        fetch("http://localhost:3000/favorites")
            .then(resp => resp.json())
            .then(favObjs => {
        
                const filteredFavs = favObjs.filter(favObj => favObj.user.id === this.props.user.id)
                this.setState({
                    favObjs: filteredFavs
                })
            })

    }

    handleMuralClick = (favorite_mural) => {
        return (this.setState({
            mural: favorite_mural
        }))
    }

    deleteFavorite = (favObjId) => {
    
        const deleteObj = {
            method: 'DELETE',
        }
        fetch(`http://localhost:3000/favorites/${favObjId}`, deleteObj)
        this.setState({
            favObjs : this.state.favObjs.filter(favObj => favObjId !== favObj.id)
        })
    }

    render() {
        
        return (
            <div>
                <p>Hello {this.props.user.first_name}!</p>
                <p>Here is a list of your favorite murals:</p>
                <div>
                    {this.state.favObjs.map(favObj => {
                        return (
                            <Card key={favObj.id}>
                                <Card.Body>
                                    <Card.Title onClick={() => { this.handleMuralClick(favObj.mural) }}>
                                        {favObj.mural.mural_title}
                                    </Card.Title>
                                    <Button variant="test" onClick={() => { this.deleteFavorite(favObj.id) }}>Delete From Favorites</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
                <MuralCard mural={this.state.mural} />
            </div>
        )
    }
}

export default Profile