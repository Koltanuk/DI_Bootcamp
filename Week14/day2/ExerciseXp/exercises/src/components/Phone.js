import React, { useState } from 'react';

const Phone = () => {
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  const changeColor = () => {
    setPhone({ ...phone, color: 'blue' });
  };

  return (
    <div>
      <h2>Brand: {phone.brand}</h2>
      <p>Model: {phone.model}</p>
      <p>Color: {phone.color}</p>
      <p>Year: {phone.year}</p>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export default Phone;
