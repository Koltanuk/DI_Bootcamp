const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks');

const app = express();

app.use(bodyParser.json());

app.use('/tasks', tasksRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
