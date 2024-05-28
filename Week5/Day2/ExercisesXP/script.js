// Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.

// Using DOM methods, remove the last paragraph in the <article> tag.

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

document.addEventListener('DOMContentLoaded', () => {

    let h1 = document.querySelector("h1");
    console.log(h1);

    let article = document.querySelector("article");
    let lastParagraph = article.querySelector('p:last-of-type');
    lastParagraph.remove();

    let h2 = document.querySelector('h2');
    h2.addEventListener('click', () => {
        h2.style.backgroundColor = 'red';
    });

    let h3 = document.querySelector("h2");
    h3.addEventListener('click', () => {
        h3.style.display = 'none';
    });


    let button = document.getElementById('boldButton');
    button.addEventListener('click', () => {
    let paragraphs = document.querySelectorAll('article p');
        paragraphs.forEach(paragraph => {
        paragraph.style.fontWeight = 'bold';
        });
    });

    h1.addEventListener('mouseover', () => {
        const randomSize = Math.floor(Math.random() * 101);
        h1.style.fontSize = `${randomSize}px`;
    });

    let secondParagraph = document.querySelector('article p:nth-of-type(2)');
    secondParagraph.addEventListener('mouseover', () => {
        secondParagraph.classList.add('fade-out');
    });

// Exercise 2

// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.


    // Retrieve the form and console.log it
    const form = document.getElementById('userForm');
    console.log(form);

    // Retrieve the inputs by their id and console.log them
    const firstNameInput = document.getElementById('fname');
    const lastNameInput = document.getElementById('lname');
    console.log(firstNameInput);
    console.log(lastNameInput);

    // Retrieve the inputs by their name attribute and console.log them
    const firstNameByName = document.querySelector('input[name="firstname"]');
    const lastNameByName = document.querySelector('input[name="lastname"]');
    console.log(firstNameByName);
    console.log(lastNameByName);

    // Add event listener for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the values of the input tags
        const firstNameValue = firstNameInput.value.trim();
        const lastNameValue = lastNameInput.value.trim();

        // Check that the input values are not empty
        if (firstNameValue !== '' && lastNameValue !== '') {
            // Create an li per input value
            const firstNameLi = document.createElement('li');
            firstNameLi.textContent = firstNameValue;

            const lastNameLi = document.createElement('li');
            lastNameLi.textContent = lastNameValue;

            // Append the li elements to the <ul class="usersAnswer"></ul>
            const usersAnswerList = document.querySelector('.usersAnswer');
            usersAnswerList.appendChild(firstNameLi);
            usersAnswerList.appendChild(lastNameLi);

            // Optionally, clear the input fields after submission
            firstNameInput.value = '';
            lastNameInput.value = '';
        } else {
            alert('Please fill in both the first name and last name.');
        }
    });

//     Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :

// <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
// <strong>end</strong> you <strong>will</strong> be great Developers!
// <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>


// In the JS file:

// Declare a global variable named allBoldItems.

// Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// Create a function called highlight() that changes the color of all the bold text to blue.

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


    let allBoldItems;
    function getBoldItems() {
        allBoldItems = document.querySelectorAll('#sentence strong');
    }

    function highlight() {
        getBoldItems(); 
        allBoldItems.forEach(item => {
            item.style.color = 'blue';
        });
    }

    function returnItemsToDefault() {
        allBoldItems.forEach(item => {
            item.style.color = 'black';
        });
    }

    const parag= document.getElementById('sentence');
    parag.addEventListener('mouseover', highlight);
    parag.addEventListener('mouseout', returnItemsToDefault);

    getBoldItems();

});