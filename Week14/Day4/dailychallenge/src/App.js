import React, { Component } from "react";
import FormComponent from "./Components/FormComponent";

class App extends Component {
  constructor() {
    super();
    // Define the initial state for the form inputs
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      vegan: false,
    };
  }

  // Handle input changes and update the state
  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission and update the URL
  handleSubmit = (event) => {
    event.preventDefault();
    const queryParams = new URLSearchParams(this.state).toString();
    window.location.href = `http://localhost:3000/?${queryParams}`;
  };

  render() {
    return (
      <div>
        <h1>React Form Container</h1>
        <FormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          formData={this.state}
        />
      </div>
    );
  }
}

export default App;
