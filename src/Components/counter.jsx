import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    tags: ["item1", "item2", "item3"],
  };
  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Items in cart.</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  handleIncrement = (product) => {
    alert("New Item added");
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if (this.state.count === 0) alert("Your cart is empty");
    else this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <span>
          <h1>Total items in the cart now: {this.formatCount()}</h1>
        </span>
        {this.state.tags.length === 0 &&
          "Please add some items to Cart to Checkout !!"}
        {this.renderTags()}
        <button onClick={() => this.handleIncrement({ id: 1 })}>
          Add to Cart
        </button>
        <button onClick={this.handleDecrement}>Let's Checkout </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return <b>{count}</b>;
  }
}

export default Counter;
