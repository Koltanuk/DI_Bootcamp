const express = require('express');
const app = express();

app.use(express.json()); 


const posts = [
    { id: 1, title: 'First Post', content: 'This is the first blog post' },
    { id: 2, title: 'Second Post', content: 'This is the second blog post' }
];


app.get('/posts', (req, res) => {
    res.json(posts);
});

// GET /posts/:id: Return a post by ID
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
});

// POST /posts: Create a new post
app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /posts/:id: Update a post by ID
app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
});

// DELETE /posts/:id: Delete a post by ID
app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send('Post not found');
    posts.splice(postIndex, 1);
    res.status(204).send();
});

// Error handling for invalid routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
