const { hello, sum } = require("./app.js");

hello('Dan');





async function getUsers(url){
    try{
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch (error){
        console.log(error);
    }
}



module.exports ={
    getUsers
}