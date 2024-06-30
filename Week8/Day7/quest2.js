// Write a javascript function that takes an array of numbers and a target number.

// The function should find two different numbers in the array that, when added together, give the target number.

// For example: answer([1,2,3], 4) should return [1,3]

let arrNum = [1,2,3];
let num  = 4;
let resArr = getAnswer(arrNum, num);

function getAnswer(array , number){
    let res = [];
    for (let i = 0; i < array.length-1; i++) {
        for (let j = 1; j < array.length; j++) {
            if ((array[i]+array[j]) == num ){
                res.push(array[i]);
                res.push(array[j]);   
                return res;
            }
        }    
    }
}
console.log(resArr);