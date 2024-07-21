const express = require('express');
const {products} = require("./config/data.js");

const app = express();

app.listen(5001, () =>{
    console.log('run on 5001');
});

app.get('/users', (req, res) =>{
    let users = [
        {name:'John', age: 40},
        {name:'Anne', age: 45},
        {name:'Marry', age: 21}

    ];
    //res.send(users);
    res.status(200).json(users);
})

app.get('/api/products', (req, res) =>{
    res.json(products);
})

