//exercise1

5 >= 1
// Prediction:true
// Actual:true

0 === 1
// Prediction:false
// Actual:false

4 <= 1
// Prediction:false
// Actual:false

1 != 1
// Prediction:false
// Actual:false

"A" > "B"
// Prediction:false
// Actual:false

"B" < "C"
// Prediction:true
// Actual:true

"a" > "A"
// Prediction:true
// Actual:true

"b" < "A"
// Prediction:false
// Actual:false

true === false
// Prediction:false
// Actual:false

true != true
// Prediction:false
// Actual:false

//exercise2

let str = prompt('Enter numbers separated by comma', 0);
let nums = str.split(',');
let sum=0;
nums.forEach(item =>{
    sum+=Number(item);
});
console.log(sum);

//exercise3

let strNemo = prompt('Please write a sentence containing the word “Nemo”');
let arr = strNemo.split(" ");
console.log(arr);
let position = arr.indexOf('Nemo');
if (position !== -1) {
    console.log(`I found Nemo at `+position);
} else {
    console.log("I can’t find Nemo");
}

//exercise4

let number = Number(prompt("Please enter a number:"));
let result;
if (number < 2) {
    result = "boom";
} else {
    result = "B" + "o".repeat(number) + "m";

    if (number % 2 === 0) {
        result += "!";
    }

    if (number % 5 === 0) {
        result = result.toUpperCase();
    }
}

console.log(result);
