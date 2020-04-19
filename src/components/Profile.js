import React, { Component } from "react";
import MuralCard from './MuralCard'
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

import EditMural from './EditMural'

class Profile extends Component {

    constructor() {
        super()
        this.state = {
            user: {},
            favorite_murals: [],
            mural: {},
            isLoading: false,
            favObjs: [],
            form : null
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

    editMural = (favObj) => {
        
       return (this.setState({
        mural: favObj.mural,
        form: "form"
        }))

        // const reqObj = {
        //     method: 'PATCH',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({postBody: this.state.postBody})
        // }

        // fetch("http://localhost:3000/murals", reqObj)
        // .then( resp => resp.json() )
        // .then( editedMural => console.log(editedMural)) 

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
                <EditMural form={this.state.form} mural={this.state.mural}/>
                <div>
                    {this.state.favObjs.map(favObj => {
                        return (
                            <Card key={favObj.id}>
                                <Card.Body>
                                    <Card.Title onClick={() => { this.handleMuralClick(favObj.mural) }}>
                                        {favObj.mural.mural_title}
                                    </Card.Title>
                                    <Button variant="test" onClick={() => { this.deleteFavorite(favObj.id) }}>Delete From Favorites</Button>
                                    <Button variant="test" onClick={() => {this.editMural(favObj)}}>Edit</Button>
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