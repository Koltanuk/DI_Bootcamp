const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Sample emojis
const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🚗', name: 'Car' },
    { emoji: '🌈', name: 'Rainbow' }
];

let leaderboard = [];

// Route to fetch a random emoji and options
app.get('/api/game', (req, res) => {
    const correctEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const options = shuffle([...emojis].filter(e => e !== correctEmoji).slice(0, 2));
    options.push(correctEmoji);
    shuffle(options);

    res.json({
        emoji: correctEmoji.emoji,
        options: options.map(opt => opt.name)
    });
});

// Route to submit a guess
app.post('/api/guess', (req, res) => {
    const { guess, emoji } = req.body;
    const correctEmoji = emojis.find(e => e.emoji === emoji);

    if (correctEmoji.name === guess) {
        res.json({ correct: true, message: 'Correct!' });
    } else {
        res.json({ correct: false, message: `Wrong! The correct answer is ${correctEmoji.name}.` });
    }
});

// Leaderboard route
app.post('/api/leaderboard', (req, res) => {
    const { username, score } = req.body;
    leaderboard.push({ username, score });
    leaderboard = leaderboard.sort((a, b) => b.score - a.score).slice(0, 10); // Keep top 10
    res.json(leaderboard);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Helper function to shuffle array
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
