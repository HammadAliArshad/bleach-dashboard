import React, { Component } from "react";

export default class Counter1 extends Component {
  componentDidUpdate(prevProps, prevState): void {
    if (prevProps !== this.props.number) {
      console.log("Updated...");
    }
  }
  render() {
    return (
      <div>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}
