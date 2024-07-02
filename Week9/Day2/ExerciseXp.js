//exercise 1

// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
//output I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise2

function displayStudentInfo(objUser){
    console.log(`Your full name is ${objUser.first} ${objUser.last}`);
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

//Exercise3

const users = { user1: 18273, user2: 92833, user3: 90315 };
console.log(Object.entries(users));
let usersArray = Object.entries(users);

usersArray.forEach((item, i, arr)=> arr[i][1] *=2);
console.log(usersArray);

//Exercise 4

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
  //the output will be object

 //Exercise 5
 
 class Dog {
    constructor(name) {
      this.name = name;
    }
  };

//the right class will be 2 option:
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };

// Exercise 6

//p1
// [2] === [2];  // False
// {} === {};    // False

//p2
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5

//p3

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}
class Mamal extends Animal {
    sound(animalSound) {
        return `Moooo I'm a ${this.type}, named ${this.name} and I'm ${this.color}. I make a ${animalSound} sound.`;
    }
}

const farmerCow = new Mamal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('moo'));

