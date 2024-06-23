//Exercise1

const findSum = (a, b) => a + b;

console.log(findSum(3, 4));

//Exercise2

// Function declaration
function kgToGrams(weightKg) {
    return weightKg * 1000;
}

// invocation
console.log(kgToGrams(5)); // Output: 5000

// Function expression
const kgToGramsExpression = function(weightKg) {
    return weightKg * 1000;
};

// invocation
console.log(kgToGramsExpression(5)); // Output: 5000

// Arrow function
const kgToGramsArrow = weightKg => weightKg * 1000;

// invocation
console.log(kgToGramsArrow(5)); // Output: 5000

// Difference: Function declarations are hoisted, whereas function expressions are not.

//Exercise 3 

(function(numChildren, partnerName, location, jobTitle) {
    const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.body.innerHTML = message;
})(2, 'Alice', 'New York', 'Developer');

//Exercise 4

(function(userName) {
    const navbar = document.querySelector('.navbar-nav');
    const userDiv = document.createElement('div');
    userDiv.classList.add('nav-item');
    userDiv.innerHTML = `<span>Welcome, ${userName}!</span>`;
    navbar.appendChild(userDiv);
})('John');

//Exercise 5

function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        const message = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        document.body.innerHTML = message;
    }
    addIngredients('apple', 'banana', 'orange');
}

makeJuice('large');

//part2

function makeJuice(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.body.innerHTML = message;
    }

    addIngredients('apple', 'banana', 'orange');
    addIngredients('mango', 'pineapple', 'kiwi');
    displayJuice();
}

makeJuice('large');