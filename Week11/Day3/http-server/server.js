const http = require('http');

const server = http.createServer((request, response) =>{
    //send response
    let users = [
        {name:'John', age: 40},
        {name:'Anne', age: 45},
        {name:'Marry', age: 21}

    ];
    response.end(JSON.stringify(users));
  //  response.end('Hello from my httpServer');
});

server.listen(3002);