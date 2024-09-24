import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("Component will unmount");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}


class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red", show: true };
  }

  componentDidUpdate() {
    console.log("after update");
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate() {
    return true; 
  }

  handleChangeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div>
        <h1>My favorite color is {this.state.favoriteColor}</h1>
        <button onClick={this.handleChangeColor}>Change Color</button>
        <button onClick={() => this.setState({ show: false })}>Delete</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

export default LifecycleExample;
