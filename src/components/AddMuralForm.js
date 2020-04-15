import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class AddMuralForm extends Component {

    constructor() {
        super()
        this.state = {
            mural_title: "",
            year_installed: 0,
            description: "",
            artists: ""
        }
    }

    renderForm = () => {
        if (this.props.form === "form") {
            return (
                <Form>
                    <Form.Group>
                        <Form.Label>Mural Title</Form.Label>
                        <Form.Control name="mural_title" type="text" placeholder="Mural Title" onChange={this.inputChange} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Year Installed</Form.Label>
                        <Form.Control name="year_installed" type="text" placeholder="Year Installed" onChange={this.inputChange} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" type="text-field" placeholder="Year Installed" onChange={this.inputChange} />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Artist(s)</Form.Label>
                        <Form.Control name="artists" type="text" placeholder="Year Installed" onChange={this.inputChange} />
                    </Form.Group>
                
                    <Button variant="test" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            )
        }
    }

    inputChange = (event) => {
        this.setState({
            ...this.state, [event.target.name]: event.target.value
          })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        //will add the post fetch here to create the mural in the backend

        const reqObj = {
            method: 'POST',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch("http://localhost:3000/murals", reqObj)
        .then( resp => resp.json() )
        .then( muralData => console.log(muralData))
    }


    render() {
        
        return (
            <div>
                {this.renderForm()}
            </div>
        )
    }
}

export default AddMuralForm