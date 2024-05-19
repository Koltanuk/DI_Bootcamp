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