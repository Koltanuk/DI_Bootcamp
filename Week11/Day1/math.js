function plus(a,b){
    return a+b;
}

function minus(a,b){
    return a-b;
}

function divide (a, b){
    if (b==0) return "You can't divide by 0";
    else return a/b;
}

function multiply (a,b){
    return a*b;
}

module.exports ={
    plus,
    minus,
    divide, 
    multiply
}