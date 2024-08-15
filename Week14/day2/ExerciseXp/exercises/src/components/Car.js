import React from 'react';
import Garage from './Garage';

const Car = ({ model }) => {
    const [color, setColor] = useState("red");

    return (
        <>
          <h2>This car is {color} {model}</h2>
          <Garage size="small" />
        </>
      );
};

export default Car;
