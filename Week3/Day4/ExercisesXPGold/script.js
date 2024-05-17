//Exercise1

let language = prompt("enter language you speak");
let lowLanguage = language.toLowerCase();
switch(lowLanguage){
    case "french":
        console.log("Bonjour");
        break;
    case "english":
        console.log("Hello");
        break;
    case "hebrew":
        console.log("Shalom");
        break;
    default:
        console.log("01110011 01101111 01110010 01110010 01111001");
}

//Exercise2

let grade = Number(prompt("enter your grade"));


if(grade>90){
    console.log("A");
}
else if (grade<=90 && grade>80){
    console.log("B");
}
else if (70<=grade<=80){
    console.log("C");
}
else{
        console.log("D");
}

//Exercise3

let verb = prompt("enter a verb");
let verbLength = verb.length;
if(verbLength>=3){
    if(verb.substring(verbLength-3, verbLength) =="ing"){
        console.log(verb+"ly")
    }
    else{
        console.log(verb+"ing");
    }
}
else{
        console.log(verb);
    }