import React, { Component } from "react";
import ShallowChild from "./ShallowChild";

class ShallowComparison extends Component {
  state = {
    user: {
      name: "sekhar"
    }
  };

  changeName = () => {
    this.state.user.name = "chnadra";

    this.setState({user: this.state.user});
  };

  render() {
    
    return (
      <div>
        <button onClick={this.changeName}> Change Name </button>

        < ShallowChild user = {this.state.user} />
      </div>
    );
  }
}

export default ShallowComparison;