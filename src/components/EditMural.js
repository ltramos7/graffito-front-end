import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class EditMural extends Component {

    constructor() {
        super()
        this.state = {
            mural_title: "",
            year_installed: 0,
            description: "",
            artists: ""
        }
    }

    renderEditForm = () => {
        if (this.props.form != null) {
            return (
                <Form>
                    
                    <Form.Label>Mural Title</Form.Label>
                    <Form.Control type="text" name="mural_title" placeholder= {this.props.mural.mural_title} onChange={this.inputChange}/>      
                
                    <Form.Label>Year Installed</Form.Label>
                    <Form.Control type="text" name="year_installed" placeholder= {this.props.mural.year_installed} onChange={this.inputChange}/>

                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" placeholder= {this.props.mural.description} onChange={this.inputChange} />

                    <Form.Label>Artists</Form.Label>
                    <Form.Control type="text" name="artists" placeholder= {this.props.mural.artists} onChange={this.inputChange} />
                            
                    <Button variant="test" type="submit" onClick={this.handleSubmit}>Submit</Button>
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
            method: 'PATCH',
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }

        fetch(`http://localhost:3000/murals/${this.props.mural.id}`, reqObj)
        .then( resp => resp.json() )
        .then( muralData => console.log(muralData))
    }

    render() {
        
        return (
            <div>{this.renderEditForm()}</div>
        )
    }
}

export default EditMural