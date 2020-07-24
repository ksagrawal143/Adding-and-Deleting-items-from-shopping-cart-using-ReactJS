import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };
  styles = {
    fontSize: 40,
    fontWeight: "bold",
  };
  handleIncrement = (product) => {
    alert("New Item added");
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  handleDecrement = () => {
    if (this.state.value === 0) alert("Your cart is empty");
    else this.setState({ value: this.state.value - 1 });
  };
  render() {
    return (
      <div>
        {this.props.children}
        <span>Quantity of Item to bought: {this.formatCount()} </span>
        <button onClick={() => this.handleIncrement({ id: 1 })}>
          Add to Cart
        </button>
        <button onClick={this.handleDecrement}>Let's Checkout </button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.state;
    return <b>{value}</b>;
  }
}

export default Counter;
