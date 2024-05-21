//Exercise1

let firstYear = 2024;
let secondYear = 1987;
let youngerYear, ageDifference;
if (firstYear>secondYear){
    youngerYear = firstYear;
    ageDifference = firstYear-secondYear;
}
else{
    youngerYear = secondYear;
    ageDifference = secondYear-firstYear;
}

console.log(youngerYear+ageDifference);


//Exercise 2

let zip = prompt("please enter Zip code");
//part1

for(let i = 0; i<zip.length; i++){
    if (zip[i] < '0' || zip[i] > '9') {
        console.log("error");
    }    
}

if (zip.includes(" ") || zip.length<6){
    console.log("error");
}
else{
    console.log("success");
}

// part2

const zipPattern = /^\d{5}$/;
if (zipPattern.test(zip)) {
    console.log("success");
} else {
    console.log("error");
}

//Exercise 3

let word = prompt("please enter a word");

let replacedWord = word.replace(/[aeiouAEIOU]/g, function(match) {
    switch (match.toLowerCase()) {
        case 'a':
            return '1';
        case 'e':
            return '2';
        case 'i':
            return '3';
        case 'o':
            return '4';
        case 'u':
            return '5';
        default:
            return match;
    }
});

console.log("Word with vowels replaced:", replacedWord);