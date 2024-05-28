const solarSystem = [
    { name: 'Mercury', color: 'gray', moons: [] },
    { name: 'Venus', color: 'yellow', moons: [] },
    { name: 'Earth', color: 'blue', moons: ['Moon'] },
    { name: 'Mars', color: 'red', moons: ['Phobos', 'Deimos'] },
    { name: 'Jupiter', color: 'orange', moons: ['Io', 'Europa', 'Ganymede', 'Callisto'] },
    { name: 'Saturn', color: 'goldenrod', moons: ['Titan', 'Enceladus'] },
    { name: 'Uranus', color: 'lightblue', moons: ['Miranda', 'Ariel', 'Umbriel', 'Titania', 'Oberon'] },
    { name: 'Neptune', color: 'darkblue', moons: ['Triton'] }
];

// Select the section to append the planets to
const section = document.querySelector('.listPlanets');

// Loop through the solar system array and create a div for each planet
solarSystem.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');
    planetDiv.classList.add(planet.name.toLowerCase());
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;

    // Create moons
    planet.moons.forEach((moon, index) => {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        moonDiv.style.left = `${index * 35}px`; // Position moons around the planet
        moonDiv.style.top = `${index * 35}px`;  // Adjust this for better moon positioning
        moonDiv.textContent = moon;
        planetDiv.appendChild(moonDiv);
    });

    // Append the planet div to the section
    section.appendChild(planetDiv);
});