//Exercise1
let nums = [123, 8409, 100053, 333333333, 7];
for (let i = 0; i < nums.length; i++) {
    if(nums[i]%3==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}

//Exercise2


let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

let studentName = prompt("Please enter you name");

if(studentName in guestList){
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
} else {
    console.log("Hi! I'm a guest.");
}


//Exercise3

let age = [20,5,12,43,98,55];
let sum = 0;
let highestAge = age[0];
for (let i = 0; i < age.length; i++) {
   sum+= age[i];
    if(highestAge<age[i]){
        highestAge = age[i];
    }
}
console.log(sum);
console.log(highestAge);