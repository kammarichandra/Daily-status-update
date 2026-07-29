import React, { PureComponent } from "react";

class ShallowChild extends PureComponent {

  render() {

    console.log("Child Render");

    return (

      <h2>{this.props.user.name}</h2>
      
    );

  }

}

export default ShallowChild;