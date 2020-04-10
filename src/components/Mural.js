import React, { Component } from "react";



class Mural extends Component{

    render(){
        
        return(
            <div>
            Mural Component paged reached
                <h3>Title: {this.props.mural.mural_title}</h3>
                <p>Description: {this.props.mural.description}</p>
                <p>Artist(s): {this.props.mural.artists}</p>
                <p>Year installed: {this.props.mural.year_installed}</p>
            </div>
        )
    }
}

export default Mural