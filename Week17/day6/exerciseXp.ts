export {}
// Exercise 1

console.log("Hello, World!");

// Exercise 2

let age: number = 30;
let name: string = "John";

console.log(`Age: ${age}, Name: ${name}`);

// Exercise 3

let id: string | number;

id = 123; 
console.log(`ID is: ${id}`);

id = "ABC123"; 
console.log(`ID is: ${id}`);

// Exercise 4

function checkNumber(num: number): string {
    if (num > 0) {
      return "Positive";
    } else if (num < 0) {
      return "Negative";
    } else {
      return "Zero";
    }
  }
  
  console.log(checkNumber(10)); 
  console.log(checkNumber(-5)); 
  console.log(checkNumber(0));

// Exercise 5

function getDetails(name: string, age: number): [string, number, string] {
    return [name, age, `Hello, ${name}! You are ${age} years old.`];
  }
  
  const details = getDetails("Alice", 25);
  console.log(details);

// Exercise 6

type Person = {
  name: string;
  age: number;
};

function createPerson(name: string, age: number): Person {
  return { name, age };
}

const person = createPerson("Alice", 25);
console.log(person);

// Exercise 7

const inputElement = document.getElementById("myInput") as HTMLInputElement;

if (inputElement) {
  inputElement.value = "Hello, TypeScript!";
}

// Exercise 8

function getAction(role: string): string {
    switch (role) {
      case "admin":
        return "Manage users and settings";
      case "editor":
        return "Edit content";
      case "viewer":
        return "View content";
      case "guest":
        return "Limited access";
      default:
        return "Invalid role";
    }
  }
  
  console.log(getAction("admin"));   
  console.log(getAction("editor"));  
  console.log(getAction("viewer"));  
  console.log(getAction("guest"));   
  console.log(getAction("unknown"));

  // Exercise 9

function greet(name: string): string;
function greet(): string;
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}!`;
  } else {
    return "Hello, World!";
  }
}

console.log(greet("Alice")); 
console.log(greet());

