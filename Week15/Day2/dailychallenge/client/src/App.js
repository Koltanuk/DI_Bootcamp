
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      inputValue: '',
      responseMessage: '',
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('http://localhost:5000/api/hello');
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { inputValue } = this.state;
    try {
      const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });
      const data = await response.json();
      this.setState({ responseMessage: data.message });
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  render() {
    const { message, responseMessage, inputValue } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseMessage}</p>
      </div>
    );
  }
}

export default App;
