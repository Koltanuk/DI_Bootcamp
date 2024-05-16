//exercise1

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.push('Kiwi');
fruits.splice(0,1);
console.log(fruits);
fruits.reverse();
console.log(fruits);

//exercise2

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let firstInd = moreFruits[1];
let secondArray = firstInd[1];
console.log(secondArray[0]);