//Exercise1 

class Employee {
    private name: string;
    private salary: number;
    public position: string;
    protected department: string;

    constructor(name: string, salary: number, position: string, department: string) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
    }

    public getEmployeeInfo(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    }
}

const employee = new Employee("John Doe", 50000, "Software Engineer", "IT");
console.log(employee.getEmployeeInfo());

//Exercise2

class Product {
    public readonly id: number;
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getProductInfo(): string {
        return `Product: ${this.name}, Price: $${this.price}`;
    }
}


const product = new Product(101, "Laptop", 999.99);
console.log(product.getProductInfo()); 

// Attempting to modify readonly property (this will cause a compilation error)
// product.id = 102; // Error: Cannot assign to 'id' because it is a read-only property.


//Exercise3

class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): string {
        return "Some generic animal sound";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }

    public makeSound(): string {
        return "Bark";
    }
}

const dog = new Dog("Buddy");
console.log(dog.name); 
console.log(dog.makeSound()); 

//Exercise4

class Calculator {
    public static add(a: number, b: number): number {
        return a + b;
    }

    public static subtract(a: number, b: number): number {
        return a - b;
    }
}

console.log(Calculator.add(5, 3)); 
console.log(Calculator.subtract(10, 4));

//Exercise5

interface User {
    readonly id: number;
    name: string;
    email: string;
}

interface PremiumUser extends User {
    membershipLevel?: string;
}

function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    } else {
        console.log("Membership Level: Not specified");
    }
}

const user: PremiumUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    membershipLevel: "Gold"
};
printUserDetails(user);
