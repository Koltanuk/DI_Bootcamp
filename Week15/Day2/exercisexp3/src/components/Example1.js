import React, { Component } from 'react';
import data from './data.json'; 

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Social Media Links</h2>
        {data.SocialMedias.map((link, index) => (
          <div key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default Example1;
