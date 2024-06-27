//Exercise 1
//1
// function funcOne() {
//     let a = 5;
//     if (a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
//  Prediction: The value of `a` will be 3 because the if condition is true and `a` is reassigned to 3.
// funcOne()

// 1.2
// What will happen if the variable is declared 
// with const instead of let ?
// Prediction: If `a` is declared with const, it will throw an error when trying to reassign `a` to 3 because const variables cannot be reassigned.

// 2

// let a = 0;

// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

//  #2.1 - run in the console:
// funcThree() // Prediction: The value of `a` will be 0 because funcTwo has not been called yet.
// funcTwo()
// funcThree() // Prediction: The value of `a` will be 5 because funcTwo has been called and `a` was reassigned to 5.
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// Prediction: If `a` is declared with const, it will throw an error in funcTwo when trying to reassign `a` to 5 because const variables cannot be reassigned.

// #3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// 3.1 - run in the console:
// funcFour()
// funcFive() // Prediction: The value of `a` will be "hello" because funcFour assigns a global variable `a` with the value "hello".
// Explanation: window.a creates a global variable which is accessible in funcFive.

// 4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// 4.1 - run in the console:
// funcSix() // Prediction: The value of `a` will be "test" inside funcSix because `a` is locally scoped within the function and shadows the outer variable.
// 4.2 What will happen if the variable is declared 
//  with const instead of let ?
// Prediction: If `a` is declared with const inside funcSix, the value of `a` will still be "test" inside funcSix. This is because const variables are block-scoped just like let, and the outer variable is still shadowed.

// 5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// Prediction: The value of `a` will be 5 inside the if block because `a` is locally scoped within the block.
// Prediction: The value of `a` will be 2 outside the if block because the outer variable `a` is not affected by the block-scoped variable.
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Prediction: If `a` is declared with const, the values inside and outside the if block will remain the same because const variables are block-scoped just like let. The inner block variable will still shadow the outer one.

//Exercise 2

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
console.log(experiencePoints);

//Exercise 3

const isString = (value) => typeof value === 'string';

console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
console.log(isString(123)); // false
console.log(isString({})); // false

//Exercise 4
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, index) => {
    console.log(`${index + 1}# choice is ${color}.`);
});

if (colors.includes("Violet")) {
    console.log("Yeah");
} else {
    console.log("No...");
}

//Exercise 5

const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
    let suffix = (index + 1) <= 3 ? ordinal[index + 1] : ordinal[0];
    console.log(`${index + 1}${suffix} choice is ${color}.`);
});

//Exercise 6

let bankAmount = 1000;

const VAT = 0.17;

const details = ["+200", "-100", "+146", "+167", "-2900"];

const updatedDetails = details.map(expense => {
    let amount = parseFloat(expense);
    amount += amount * VAT;
    return (amount >= 0 ? "+" : "") + amount.toFixed(2);
});

updatedDetails.forEach(expense => {
    bankAmount += parseFloat(expense);
});

console.log("Updated Expenses with VAT:", updatedDetails);
console.log("Current Bank Account Standing:", bankAmount.toFixed(2));
