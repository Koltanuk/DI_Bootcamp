document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('libform');
    const storyElement = document.getElementById('story');
    const shuffleButton = document.getElementById('shuffle-button');

    const stories = [
        (noun, adjective, person, verb, place) => `${person} decided to ${verb} in the ${adjective} ${noun} at ${place}.`,
        (noun, adjective, person, verb, place) => `In a ${adjective} ${place}, ${person} found a ${noun} and decided to ${verb} it.`,
        (noun, adjective, person, verb, place) => `Once upon a time, a ${adjective} ${noun} was ${verb} by ${person} in ${place}.`
    ];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (!noun || !adjective || !person || !verb || !place) {
            alert('Please fill in all the fields.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * stories.length);
        storyElement.textContent = stories[randomIndex](noun, adjective, person, verb, place);
    });

    shuffleButton.addEventListener('click', () => {
        const noun = document.getElementById('noun').value.trim();
        const adjective = document.getElementById('adjective').value.trim();
        const person = document.getElementById('person').value.trim();
        const verb = document.getElementById('verb').value.trim();
        const place = document.getElementById('place').value.trim();

        if (!noun || !adjective || !person || !verb || !place) {
            alert('Please fill in all the fields.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * stories.length);
        storyElement.textContent = stories[randomIndex](noun, adjective, person, verb, place);
    });
});