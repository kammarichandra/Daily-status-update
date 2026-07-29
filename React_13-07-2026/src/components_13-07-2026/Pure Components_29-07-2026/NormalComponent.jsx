import React, { Component } from "react";
import Child from "./Child";

class NormalComponent extends Component {
    state = {
        count: 0,
        name: "React"
    };

    render() {
        console.log("Parent Render");

        return (
            <div>
                
                <h1>Normal Component Example</h1>

                <button onClick={() => this.setState({ name: "chnadra " + Math.random() })}> Change Name</button><br /><br />

                <button onClick={() => this.setState({ count: this.state.count + 1 })}> Increae Count </button>

                <Child count={this.state.count} />

            </div>
        );
    }
}

export default NormalComponent;