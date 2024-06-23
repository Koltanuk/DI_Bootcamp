

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();

let client = "John";

const cloneGroceries = () => {
   
    let user = client;
    

    client = "Betty";
    console.log(user); // Output: John (because user is a primitive value copy of client)
    
    // Step 2.3: Create a variable named shopping that is equal to the groceries variable
    let shopping = groceries;
    
    // Step 2.4: Change the value of the totalPrice key to "35$"
    shopping.totalPrice = "35$";
    console.log(groceries.totalPrice); // Output: 35$ (because shopping is a reference to groceries)
    
    // Step 2.5: Change the value of the paid key to false
    shopping.other.paid = false;
    console.log(groceries.other.paid); // Output: false (because shopping is a reference to groceries)
};


cloneGroceries();