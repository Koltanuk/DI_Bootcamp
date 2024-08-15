let score = 0;
let username = prompt("Enter your name:");

async function startGame() {
    const response = await fetch('/api/game');
    const data = await response.json();
    document.getElementById('emoji').textContent = data.emoji;

    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    data.options.forEach(option => {
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'guess';
        input.value = option;
        label.appendChild(input);
        label.append(option);
        optionsDiv.appendChild(label);
        optionsDiv.appendChild(document.createElement('br'));
    });
}

document.getElementById('guessForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const guess = document.querySelector('input[name="guess"]:checked').value;
    const emoji = document.getElementById('emoji').textContent;

    const response = await fetch('/api/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ guess, emoji })
    });

    const result = await response.json();
    document.getElementById('feedback').textContent = result.message;

    if (result.correct) {
        score++;
    }

    // Save score to leaderboard
    await fetch('/api/leaderboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, score })
    });

    updateLeaderboard();
    startGame(); // Continue with the next game
});

async function updateLeaderboard() {
    const response = await fetch('/api/leaderboard', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, score })
    });
    const leaderboard = await response.json();
    const leaderboardList = document.getElementById('leaderboard');
    leaderboardList.innerHTML = '';
    leaderboard.forEach(player => {
        const li = document.createElement('li');
        li.textContent = `${player.username}: ${player.score}`;
        leaderboardList.appendChild(li);
    });
}

startGame(); // Start the first game
updateLeaderboard(); // Update leaderboard on page load
