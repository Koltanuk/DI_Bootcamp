const obj = require("./app.js");

// obj.hello('Avi');

// console.log(obj.sum(3,5));

const { getUsers } = require("./script.js");

// getUsers('https://jsonplaceholder.typicode.com/users').then(
//     users=> {
//         console.log(users);
//     }
// );

// async function info(){
//     const data = await getUsers('https://jsonplaceholder.typicode.com/users');
//     console.log(data);
// }

// info();

const { plus, minus, divide, multiply } = require("./math.js");

console.log(plus(1,2));
console.log(minus(1,2));
console.log(divide(1,2));
console.log(multiply(1,2));


