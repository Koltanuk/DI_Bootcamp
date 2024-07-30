const express = require('express');
const {products} = require("./config/data.js");
const bp = require('body-parser');

// import path from 'path';
// const __dirname = path.resolve();

const app = express();

app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.use('/', express.static(__dirname+"/public"));

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

/** get one product */
/** params */
app.get("/api/products/:id", (req, res) => {
    console.log(req.params);
    const { id } = req.params;
  
    const myprod = products.find((item) => item.id == id);
  
    if (!myprod) return res.status(404).json({ msg: "product not found" });
  
    res.json(myprod);
  });
  
  /** query */
  app.get("/api/search", (req, res) => {
    console.log(req.query);
    const { name } = req.query;
    const filtered = products.filter((item) => {
      return item.name.toLowerCase().includes(name.toLowerCase());
    });
    if (filtered.length === 0) {
      // return res.sendStatus(404);
      return res.status(404).json({msg: 'no product match your search'})
    }
    res.json(filtered);
  });

  
// Create POSt Method

app.post("/api/products", (req, res) => {
    console.log(req.body);
    const newProduct = {...req.body, id:products.length +1};
    products.push(newProduct);
    res.send(products);
})

//update - put

app.put("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
  
    const index = products.findIndex((element) => element.id == id);
  
    if (index === -1) {
      return res.status(404).json({ message: "product not found, can't update" });
    }
  
    products[index] = { ...products[index], name, price };
  
    res.json(products);
  });

  app.delete("/api/products/:id", (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
  
    const index = products.findIndex((element) => element.id == id);
  
    if (index === -1) {
      return res.status(404).json({ message: "product not found, can't update" });
    }
  
    products.splice(index, 1);
  
    res.json(products);
  });