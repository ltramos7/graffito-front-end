import React, { Component } from "react";

class Profile extends Component{

    constructor(){
        super()
    }

    render(){
        console.log(this.props)
        return(
            <div>
                Profile Component
            </div>
        )
    }
}

export default Profile