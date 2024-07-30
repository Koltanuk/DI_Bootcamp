document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
    const gifForm = document.getElementById('gifForm');
    const categoryInput = document.getElementById('categoryInput');
    const gifContainer = document.getElementById('gifContainer');
    const deleteAllButton = document.getElementById('deleteAllButton');

    gifForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const category = categoryInput.value.trim();
        if (category) {
            await fetchRandomGif(category);
        }
        categoryInput.value = '';
    });

    deleteAllButton.addEventListener('click', () => {
        gifContainer.innerHTML = '';
    });

    async function fetchRandomGif(category) {
        const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${apiKey}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const data = await response.json();
            const gifUrl = data.data.images.fixed_height.url;
            appendGif(gifUrl);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    function appendGif(gifUrl) {
        const gifItem = document.createElement('div');
        gifItem.classList.add('gif-item');
        gifItem.innerHTML = `
            <img src="${gifUrl}" alt="GIF">
            <button class="delete-button">Delete</button>
        `;
        gifContainer.appendChild(gifItem);

        const deleteButton = gifItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            gifItem.remove();
        });
    }
});
