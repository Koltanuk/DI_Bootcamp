// Exercise 1
//part1
const people = ["Greg", "Mary", "Devon", "James"];
//1
people.shift();
//2
let indJames = people.indexOf("James");
people[indJames]="Jason";
//3
people.push("Irina");
//4
console.log(people.indexOf("Mary"));
//5
let people2 = people.slice(1,3);
console.log(people2);
//6
console.log(people.indexOf("Foo")); //return -1 cause there is no such element in array
//7
let lastElemnent = people[people.length-1];
console.log(lastElemnent);

//part2
//1
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}
//2
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if(people[i]=="Devon"){break;}
}

// Exercise 2

let colors = ["red", "blue", "yellow", "green", "purple"];
for (let i = 0; i < colors.length; i++) {
    console.log("My #" + (i+1) + " choice is "+colors[i]);
}
//bonus
let suffixes = ["st", "nd", 'rd', "th"];

for (let i = 0; i < colors.length; i++) {
    if(i<3){
        console.log("My "+ (i+1) + suffixes[i]+ " choice is "+colors[i]);
    }
    else{
        console.log("My "+ (i+1) + suffixes[3]+ " choice is "+colors[i]);
    }
}

//Exercise 3
let num = parseInt(prompt("please enter a number"));
while(num<10){
    num = parseInt(prompt("please enter a number"));
}

//Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1]+", "+building.numberOfRoomsAndRent.dan[0]);
if(building.numberOfRoomsAndRent.david[1]+building.numberOfRoomsAndRent.sarah[1] > building.numberOfRoomsAndRent.dan[1] ){
    building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);

//Exercise 5

let family = {
    father: "John",
    mother: "Jane",
    son: "Mike",
    daughter: "Mary"
};


for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}

//Exercise 6

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  for (let key in details) {
    console.log(key + " "+details[key]);
}

//Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let alfNames = names.sort();

let result="";
for (let i = 0; i < alfNames.length; i++) {
    result+=alfNames[i].charAt(0);
}
console.log(result);

