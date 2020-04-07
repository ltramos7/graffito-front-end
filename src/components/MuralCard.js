import React, { Component } from "react";

class MuralCard extends Component{
    render(){
        console.log(this.props.mural)
        return(
            <div>
                <p>Mural Title: {this.props.mural.mural_title}</p>
                <p>Year installed: {this.props.mural.year_installed}</p>
                <p>Description: {this.props.mural.description}</p>
                <p>Artist(s): {this.props.mural.artists}</p>
            </div>
        )
    }
}
export default MuralCard