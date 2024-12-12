//Exercise 1

type Person1 = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person1 & Address;

const personWithAddress: PersonWithAddress = {
    name: "John Doe",
    age: 30,
    street: "123 Main St",
    city: "New York"
};

console.log(personWithAddress);

//Exercise 2

function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    } else {
        return "This is a string";
    }
}

console.log(describeValue(42));
console.log(describeValue("hello"));

//Exercise 3

let someValue: any = "This is a string";
let stringValue = someValue as string;

console.log(stringValue.toUpperCase());

//Exercise 4

function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
}

console.log(getFirstElement(["hello", 42]));
console.log(getFirstElement([100, "world"]));

//Exercise 5

function logLength<T extends { length: number }>(input: T): void {
    console.log(`Length: ${input.length}`);
}

logLength("Hello, TypeScript!");
logLength([1, 2, 3, 4]);

//Exercise 6

type Person = {
    name: string;
    age: number;
};

type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in the ${employee.department} department.`;
    } else if (employee.position === "Developer") {
        return `${employee.name} is a Developer in the ${employee.department} department.`;
    }
    return `${employee.name} has a position of ${employee.position}.`;
}

const employee1: Employee = {
    name: "Alice",
    age: 28,
    position: "Manager",
    department: "Sales"
};

const employee2: Employee = {
    name: "Bob",
    age: 25,
    position: "Developer",
    department: "Engineering"
};

console.log(describeEmployee(employee1));
console.log(describeEmployee(employee2));

//Exercise 7

function formatInput<T extends { toString(): string }>(input: T): string {
    return `Formatted: ${(input as unknown as string).toString()}`;
}

console.log(formatInput(123));
console.log(formatInput("Hello"));
console.log(formatInput(true));