const knex = require('knex');

const PGHOST='ep-mute-resonance-a5oe2ad0.us-east-2.aws.neon.tech'
const PGDATABASE='neondb'
const PGUSER='neondb_owner'
const PGPASSWORD='EVNIZ5TrY3up'
const PGPORT = 5432

const db = knex({
    client:'pg',
    connection:{
        host:PGHOST,
        port:PGPORT,
        user:PGUSER,
        database:PGDATABASE,
        password:PGPASSWORD,
        ssl:{rejectUnauthorized: false}
    }
})

async function getVersion(){
    try{
        const res = await db.raw('select version()');
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

//getVersion();


// db("products")
//  .insert([
//     { name:"ccc", price:1010 },
//     { name:"ddd", price: 1011 }
//  ],
//  ["id", "name", "price"]
// )
//  //.returning(["id", "name", "price"])
//  .then((data)=> {
//     console.log(data);
//  })
//  .catch((e) => {
//     console.log(e)
//  })

db("products")
 .update
    ({ name:"product111", price:1100 })
 .where({id: 9})
 .returning(["id", "name", "price"])
 .then((data)=> {
    console.log(data);
 })
 .catch((e) => {
    console.log(e)
 });

