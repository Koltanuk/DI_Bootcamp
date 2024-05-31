const genres = document.getElementById('genres');

let selectedGenre = genres.value;

console.log(selectedGenre);

let newOption = document.createElement('option');
newOption.value = 'classic';
newOption.textContent = 'Classic';

genres.appendChild(newOption);

genres.value = 'classic';
selectedGenre = genres.value;

console.log(selectedGenre);

//exercise2

function removeColor() {
    const colorSelect = document.getElementById('colorSelect');
    const selectedOption = colorSelect.options[colorSelect.selectedIndex];
    colorSelect.removeChild(selectedOption);
}
document.querySelector('input[type="button"]').addEventListener('click', removeColor);

//Exercise3

let shoppingList = [];
const root = document.getElementById('root');
const form = document.createElement('form');
let inputField = document.createElement('input');

inputField.type = 'text';
inputField.placeholder='Add a new item';
inputField.id = 'inputItem';

let addButton = document.createElement('button');
addButton.type = 'button';
addButton.textContent = 'Add Item';
addButton.addEventListener('click', addItem);

let clearButton = document.createElement('button');
clearButton.type = 'button';
clearButton.textContent = 'ClearAll';
clearButton.addEventListener('click', clearAll);

form.appendChild(inputField);
form.appendChild(addButton);

root.appendChild(form);
root.appendChild(clearButton);

function addItem(){
    let inputValue = document.getElementById('inputItem').value;
    if(inputValue.trim()!==''){
        shoppingList.push(inputValue.trim());
        console.log('Shopping List:', shoppingList);
        inputField.value = '';
    }
}

function clearAll() {
    shoppingList = [];
    console.log('Shopping List cleared');
}