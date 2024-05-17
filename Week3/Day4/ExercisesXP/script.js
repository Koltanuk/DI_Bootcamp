//Exercise1

let x = 5;
let y = 10;
if(x>y){
    console.log(x + " is the biggest number");
}
else if (y==x){
    console.log("numbers are even");
}
else{
    console.log(y + " is the biggest number");
}

//Exercise2

let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase);
console.log(newDog.toLowerCase);
if(newDog=="Chihuahua"){
    console.log('I love Chihuahuas, it’s my favorite dog breed');
}
else{
    console.log("I dont care, I prefer cats");
}


//Exercise3

let num = Number(prompt("Please enter the number"));
if(num%2 == 0){
    console.log(num+" is even");
}
else {
    console.log(num + " is odd");
}



//Exercise4

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let count = users.length;
console.log(count);
switch(count){
    case 0:
        console.log("no one is online");
        break;
    case 1:
        console.log(users[0] +" is online");
        break;
    case 2:
        console.log(users[0] +"and" + users[1]+" are online");
        break;
    default:
        let usersLeft = count-2;
        console.log(users[0] +", " + users[1]+" and " + usersLeft+ " more are online");
}