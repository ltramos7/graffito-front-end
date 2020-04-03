import React, { Component } from "react";


class Murals extends Component{

    // allMurals = () => {
    //     return this.props.murals.map(muralObj => {
    //         return (
    //         <div key={muralObj.id}>
    //             <h3 onClick={(e, muralObj)=>{this.props.onClick(e, muralObj)}}>{muralObj.mural_title}</h3>
    //             <p>{muralObj.description}</p>
    //         </div>)
    //         // return console.log(mural)
    //     })
    // }

    // when Mural title is clicked it should go the the murals show page
    // set up the back end's mural's show page
    // put event listener on the mural titles
    // flesh out <aMural> to render the basics of a mural
    // might need to fix the artists associated with that mural
    render(){
        return(
            <div>
                <h1>Murals Component...List</h1>
                {/* {this.allMurals()} */}
            </div>
        )
    }
}

export default Murals