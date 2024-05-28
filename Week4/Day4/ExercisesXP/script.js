const containerDiv = document.getElementById('container');
console.log(containerDiv);

// Change the name “Pete” to “Richard”.
const lists = document.querySelectorAll('.list');
lists[0].children[1].textContent = 'Richard';

// Delete the <li> that contains the text node “Sarah”.
lists[1].children[1].remove();

// Change each first name of the two <ul>'s to your name.
lists.forEach(list => {
    list.children[0].textContent = 'Irina'; // Replace 'YourName' with your actual name
});

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
lists.forEach(list => {
    list.classList.add('student_list');
});

// Add the classes university and attendance to the first <ul>.
lists[0].classList.add('university', 'attendance');