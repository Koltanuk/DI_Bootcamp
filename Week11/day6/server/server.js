const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

const PORT = process.env.PORT|| 3001;
app.listen(PORT, () => {
    console.log(`run on ${PORT}`);
})