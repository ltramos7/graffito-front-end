import React, { Component } from "react";


class Mural extends Component{

    render(){
        return(
            <div>
            Mural Component paged reached
                <h3>{this.props.mural.title}</h3>
                <p>{this.props.mural.description}</p>
                <p>{this.props.mural.artists}</p>
                <p>{this.props.mural.year_installed}</p>
            </div>
        )
    }
}

export default Mural