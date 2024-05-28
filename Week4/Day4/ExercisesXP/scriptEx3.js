    // Change the value of the id attribute from navBar to socialNetworkNavigation
    const navBar = document.getElementById('navBar');
    navBar.setAttribute('id', 'socialNetworkNavigation');

    // Create a new <li> tag
    const newLi = document.createElement('li');

    // Create a new text node with “Logout” as its specified text
    const logoutText = document.createTextNode('Logout');

    // Append the text node to the newly created list node (<li>)
    newLi.appendChild(logoutText);

    // Append this updated list node to the unordered list (<ul>)
    const ul = navBar.querySelector('ul');
    ul.appendChild(newLi);

    // Retrieve the first and last <li> elements and display their text content
    const firstLi = ul.firstElementChild;
    const lastLi = ul.lastElementChild;

    console.log(`First link text: ${firstLi.textContent}`);
    console.log(`Last link text: ${lastLi.textContent}`);