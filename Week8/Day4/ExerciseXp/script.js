//Exercise 1
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];

console.log(result);
//['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

const country = "USA";
console.log([...country]);

//['U', 'S', 'A']

let newArray = [...[,,]];
console.log(newArray);

//[undefined, undefined]

// Exercise 2 

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const welcomeStudents = users.map(user => `Hello ${user.firstName}`);
console.log(welcomeStudents);

const fullStackDevLastNames = users.filter(user => user.role=='Full Stack Resident')
                        .map(user => user.lastName);
console.log(fullStackDevLastNames);

//Exercise 3

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const combinedString = epic.reduce((acc, curr) => `${acc} ${curr}`);
console.log(combinedString);

//Exercise 4

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}];

const studPass = students.filter (student => student.isPassed == true).forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`));
