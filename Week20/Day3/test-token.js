const jwt = require('jsonwebtoken');


const token = jwt.sign(
    {userid:101, name:'John', email:"john@gmail.com"},
    'dsfqw4dfgdfr5t4er',
    {expiresIn: '60s'}
);

console.log(token)