import React, { Component } from "react";

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    // Initial state with favoriteColor and show property
    this.state = { favoriteColor: "red", show: true };
  }

  // Change color when the button is clicked
  handleChangeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  // Delete button will toggle the "show" property to false, unmounting the Child component
  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.handleChangeColor}>Change Color</button>
        <button onClick={this.handleDelete}>Delete</button>

        {/* Conditionally render Child component based on "show" state */}
        {this.state.show && <Child />}
      </div>
    );
  }
}

class Child extends Component {
  // This lifecycle method is called just before the component is unmounted
  componentWillUnmount() {
    alert("Component will unmount");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

export default LifecycleExample;
