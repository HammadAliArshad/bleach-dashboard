import { Component } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

export default class classComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount(): void {
    console.log("Mounting");
  }

  componentWillUnmount(): void {
    console.log("Unmount");
  }

  render() {
    return (
      <div>
        <Counter1 number={this.state.count}></Counter1>
        <Counter2 number={this.state.count}></Counter2>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}
