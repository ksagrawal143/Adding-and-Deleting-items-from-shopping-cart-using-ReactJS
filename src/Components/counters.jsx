import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        value: null,
      },
      {
        id: 2,
        value: null,
      },
      {
        id: 3,
        value: null,
      },
      {
        id: 4,
        value: null,
      },
    ],
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Item number {counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
