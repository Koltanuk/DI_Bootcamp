document.getElementById('userForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    const userData = {
        name: name,
        lastName: lastName
    };

    const jsonString = JSON.stringify(userData);

    const outputDiv = document.getElementById('output');
    outputDiv.textContent = jsonString;
});