import React, { Component } from "react";
import Card from 'react-bootstrap/Card';

class MuralCard extends Component{

    renderMuralCard = () => {
        if(this.props.mural.mural_title != null){
            return (
                <div>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>{this.props.mural.mural_title}</Card.Header>
                        <Card.Body>
                            <Card.Text>Description: {this.props.mural.description}</Card.Text>
                            <Card.Text>Artist(s): {this.props.mural.artists}</Card.Text>
                            <Card.Text>Year installed: {this.props.mural.year_installed}</Card.Text>
                            
                        </Card.Body>
                    </Card>
                </div>
            )
        }
    }


    render(){
        console.log(this.props.mural)
        return(
            <div>
                {this.renderMuralCard()}
            </div>
        )   
    }
}
export default MuralCard