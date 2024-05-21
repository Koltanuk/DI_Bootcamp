
const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method convert the array to a string.
const numbersString = numbers.toString();
console.log(numbersString);  


// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)

const joinWithComma = numbers.join(",");
console.log(joinWithComma);  

const joinWithPlus = numbers.join("+");
console.log(joinWithPlus);  

const joinWithSpace = numbers.join(" ");
console.log(joinWithSpace);  

const joinWithoutSeparator = numbers.join("");
console.log(joinWithoutSeparator);  


// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.


for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] < numbers[j + 1]) {
            
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
    console.log(`After pass ${i + 1}: ${numbers}`);
}

console.log("Sorted array in descending order:", numbers);

