
const {products} = require('./products.js');

function findProductByName(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        console.log(`Product found: Name: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    } else {
        console.log(`Product not found: ${productName}`);
    }
}

// Test the function with different product names
findProductByName('Laptop');
findProductByName('Phone');
findProductByName('Shirt');
findProductByName('Shoes');
findProductByName('Coffee Maker');
findProductByName('Tablet'); // This should not be found

