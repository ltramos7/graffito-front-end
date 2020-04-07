import React, { Component } from "react";

class MuralCard extends Component{

    renderMuralCard = () => {
        if(this.props.mural.mural_title != null){
            return (
                <div>
                    <p>Mural Title: {this.props.mural.mural_title}</p>
                    <p>Year installed: {this.props.mural.year_installed}</p>
                    <p>Description: {this.props.mural.description}</p>
                    <p>Artist(s): {this.props.mural.artists}</p>
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