//Exercise 1

let sentence = ["my","favorite","color","is","blue"];
console.log(sentence.join(' '));

//Exercise 2

let str1 = "mix";
let str2 = "pod";
let finalStr1 = str2.substring(0,2)+str1.substring(2);
let finalStr2 = str1.substring(0,2)+str2.substring(2);
let newWord = finalStr1+" "+finalStr2;
console.log(newWord);

//Exercise 3
let num1 = Number(prompt('Enter first number', 0));
let action = prompt('enter action', '+');
let num2 = Number(prompt('Enter second number', 0));
let result;
if(action=='+'){
    result = num1+num2;
}
else if (action=='-'){
    result = num1-num2;
}
else if (action=='*'){
    result = num1*num2;
}
else if (action=='/'){
    result = num1/num2;
}
else {s
    alert("Wrong action");
}
alert(result);
