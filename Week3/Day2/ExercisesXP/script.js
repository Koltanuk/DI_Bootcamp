//Exercise1

let favoriteFood="yogurt";
let favoriteMeal = "breakfast";
let finalPhrase = "I eat "+ favoriteFood + " at every " + favoriteMeal;
console.log(finalPhrase);

//Exercise2

//part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
console.log(myWatchedSeries.toString);
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.join(", ");
console.log("I watched 3 series : "+myWatchedSeriesSentence);

//part 2
myWatchedSeries.splice(2,1,'friends');
myWatchedSeries.push('how i meet your mother');
myWatchedSeries.unshift('boys');
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1].charAt(2));
console.log(myWatchedSeries);

//Exercise3
let celsiusTemp = 20;
let farenheit = celsiusTemp/5 * 9 + 32;
console.log(celsiusTemp+' C is ' + farenheit + " F");

//Exercise4

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 cause a and b numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 cause a is changed
// Actual:23

// c is not difined

console.log(3 + 4 + '5');
// Prediction: 75 cause first numbers will be summerised and five is a string
// Actual:75


//Exercise5

typeof(15)
// Prediction:number
// Actual:number

typeof(5.5)
// Prediction:number
// Actual:number

typeof(NaN)
// Prediction:not a number
// Actual:number

typeof("hello")
// Prediction:string
// Actual:string

typeof(true)
// Prediction:boolean
// Actual:

typeof(1 != 2)
// Prediction:boolean
// Actual:

"hamburger" + "s"
// Prediction:hamburgers
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:error
// Actual:NaN

"1" + "3"
// Prediction:4
// Actual:13

"1" - "3"
// Prediction:-2
// Actual:-2

"johnny" + 5
// Prediction:johny5
// Actual:

"johnny" - 5
// Prediction:NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction:false
// Actual:false

1 == "1"
// Prediction:true
// Actual:true

1 === "1"
// Prediction:false
// Actual:false



//Exercise6

5 + "34"
// Prediction:534
// Actual:534

5 - "4"
// Prediction:1
// Actual:1

10 % 5
// Prediction:0
// Actual:0

5 % 10
// Prediction:0
// Actual:5

" " + " "
// Prediction:'  ' 
// Actual:'  '

" " + 0
// Prediction: 0
// Actual:' 0'

true + true
// Prediction:true
// Actual:2

true + false
// Prediction:1
// Actual:1

false + true
// Prediction:1
// Actual:1

false - true
// Prediction:-1
// Actual:

!true
// Prediction:false
// Actual:false

3 - 4
// Prediction:-1
// Actual:-1

