import {add, multiply} from './math.js';
import lodash from 'lodash';

const numbers = [1, 2, 3, 4, 5];

// Use lodash to find the sum of the array
const sum = lodash.sum(numbers);
console.log(`Sum of array using lodash: ${sum}`);

// Use custom math module to add two numbers
const additionResult = add(10, 5);
console.log(`Addition of 10 and 5 using custom math module: ${additionResult}`);

// Use custom math module to multiply two numbers
const multiplicationResult = multiply(10, 5);
console.log(`Multiplication of 10 and 5 using custom math module: ${multiplicationResult}`);