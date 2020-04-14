import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';



class MuralContainer extends Component {

    // once the function below works, pass it as props to <Murals>
    // also might want another map function to pass a single Mural object to render a MuralObj in <aMural>

    constructor() {
        super()
        this.state = {
            murals: [],
           
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/murals")
            .then(resp => resp.json())
            .then(muralData => this.setState({
                murals: muralData
            }))
    }

    


    render() {
       
        
        return (
            <div>
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

