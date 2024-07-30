//Exercise1
// const giphyUrl = 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// function fetchGiphyData() {
//   fetch(giphyUrl)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }
      
//       return response.json();
//     })
//     .then(data => {
      
//       console.log(data);
//     })
//     .catch(error => {
      
//       console.error('There has been a problem with your fetch operation:', error);
//     });
// }


// fetchGiphyData();


//Exercise 2
// const apiKey = 'rywcP7ZyLadygFzL7YsS88dWcUwoHeAm';
// const searchQuery = 'sun';
// const limit = 10;
// const offset = 2; // Starting position of the results

// const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchQuery}&limit=${limit}&offset=${offset}`;

// fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });


//Exercise 3
// async function fetchStarship() {
//     try {
//         const response = await fetch("https://www.swapi.tech/api/starships/9/");

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const objectStarWars = await response.json();
//         console.log(objectStarWars.result);
//     } catch (error) {
//         console.error('Error fetching the starship data:', error);
//     }
// }

// fetchStarship();

//Exercise 4
// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }

// asyncCall();

// The console output of running this code will be:
// calling
// resolved