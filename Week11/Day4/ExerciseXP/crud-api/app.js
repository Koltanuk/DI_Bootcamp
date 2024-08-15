const express = require('express');
const dataService = require('./data/dataServis');
const app = express();

app.use(express.json());

// GET /posts: Fetch posts using dataService
app.get('/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).send('Error retrieving posts');
    }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
