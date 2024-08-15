import React, { Component } from 'react';
import './Exercise.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends Component {
    render() {
        return (
          <div>
            <h1 style={style_header}>This is a heading</h1>
            <p className="para">This is a paragraph.</p>
            <a href="https://www.google.com">This is a link</a>
            <form>
            <label>
                Enter your name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            </form>
            <img src="https://via.placeholder.com/150" alt="placeholder" />
            <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            </ul>
            </div>
        );
    }
  }
  


export default Exercise;
