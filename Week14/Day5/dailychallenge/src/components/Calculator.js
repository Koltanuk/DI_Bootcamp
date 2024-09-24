import React, { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('add');

  const calculateResult = () => {
    let res;
    switch (operation) {
      case 'add':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Addition</option>
        <option value="subtract">Subtraction</option>
        <option value="multiply">Multiplication</option>
        <option value="divide">Division</option>
      </select>
      <button onClick={calculateResult}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
