// Add a “light blue” background color and some padding to the <div>
const div = document.querySelector('div');
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

// Do not display the <li> that contains the text node “John”
const ul = document.querySelector('ul');
const liJohn = ul.children[0];
liJohn.style.display = 'none';

// Add a border to the <li> that contains the text node “Pete”
 const liPete = ul.children[1];
 liPete.style.border = '1px solid black';

// Change the font size of the whole body
document.body.style.fontSize = '20px';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y”
if (div.style.backgroundColor === 'lightblue') {
    const users = [];
    for (let i = 0; i < ul.children.length; i++) {
        users.push(ul.children[i].textContent);
    }
    alert(`Hello ${users.join(' and ')}`);
}