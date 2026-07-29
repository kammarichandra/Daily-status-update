import { Component } from "react";
import React from "react";

class Child extends Component {

    render(){
        console.log("child render");

        return(
            <div>
                <h2>Count : {this.props.count}</h2>
            </div>
        )
    }
}
export default Child;