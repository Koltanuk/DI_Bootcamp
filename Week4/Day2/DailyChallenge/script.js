// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello,World,in,a,frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

let enteredData = prompt("Please enter several words separated by comma");
let array = enteredData.split(",");
console.log(array);
let longestLength=0;
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element.length>longestLength){
        longestLength=element.length;
    }
}

console.log(longestLength);

function firstAndLastLineOutput(){
    let result = "";  
    for (let i = 0; i < longestLength+4; i++) {
        result += "*";  
    }
    console.log(result);
}

function output(){
    firstAndLastLineOutput();

    for (let i = 0; i < array.length; i++) {
        outputLine= "* ";
        outputLine+=array[i];
        let whitespacesCount = longestLength-array[i].length;
        for (let j = 0; j < whitespacesCount; j++) {
            outputLine+=" ";
        }
        outputLine+=" *";
        console.log(outputLine.trim());
    }

    firstAndLastLineOutput();
}

output();

