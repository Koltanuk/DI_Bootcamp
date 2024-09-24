import React, { Component } from 'react';
import data from './data.json'; // Import the JSON data

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((experience, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <h3>{experience.companyName}</h3>
            <img src={experience.logo} alt={experience.companyName} style={{ width: '100px' }} />
            <a href={experience.url} target="_blank" rel="noopener noreferrer">Company Website</a>
            {experience.roles.map((role, idx) => (
              <div key={idx}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p>{role.startDate} - {role.endDate}</p>
                <p>Location: {role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
