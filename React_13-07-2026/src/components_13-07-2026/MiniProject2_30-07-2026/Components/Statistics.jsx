import React, { PureComponent } from "react";

class Statistics extends PureComponent {

  render() {

    console.log("Statistics Rendered");

    return (
      <div className="stats">
        <h2>Total Students : {this.props.total}</h2>
        <h2>Average Marks : {this.props.average.toFixed(2)}</h2>
      </div>
    );
  }
}

export default Statistics;