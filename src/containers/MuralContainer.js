import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddMuralForm from '../components/AddMuralForm'

import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'



class MuralContainer extends Component {

    // once the function below works, pass it as props to <Murals>
    // also might want another map function to pass a single Mural object to render a MuralObj in <aMural>

    constructor() {
        super()
        this.state = {
            murals: [],
            form: null
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/murals")
            .then(resp => resp.json())
            .then(muralData => this.setState({
                murals: muralData
            }))
    }

    addMuralButton = () => {

        if (this.props.user){
            return(
                this.setState({
                    form: "form"
                })
            ) 
        }else{
            alert("Please log in or sign up to add a mural")
        }
       
    }

    render() {


        return (
            <div>
                <Button variant="test" onClick={this.addMuralButton}>Add A Mural</Button>
                <AddMuralForm form={this.state.form}/>
                

                <CardDeck>
                    {this.state.murals.map(muralObj => {
                        return (
                            <Card key={muralObj.id}>
                                <Card.Body >
                                    <Card.Title onClick={() => this.props.handleClick(muralObj)}>
                                        <Link to={`/murals/${muralObj.id}`}>{muralObj.mural_title}</Link>
                                    </Card.Title>
                                    <Card.Text>
                                        {muralObj.description}
                                    </Card.Text>
                                    <Button variant="test" onClick={() => { this.props.addFavorite(this.props.user, muralObj) }}>Add to Favorites</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardDeck>
            </div>
        )
    }
}

export default MuralContainer

