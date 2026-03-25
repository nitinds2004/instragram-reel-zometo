// start server 
require('dotenv').config();// to acces env file and use npm i dotenv packages
const app = require('./src/app');
const connectDB = require('./src/db/db');


connectDB();


app.listen(3000,()=>{
    console.log("server is running on port 3000");

})