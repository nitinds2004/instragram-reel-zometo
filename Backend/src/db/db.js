const { default: mongoose } = require('mongoose');
const monogoose =require('mongoose');


function connectDB(){
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("MongoDB connected ");
    })
    .catch((err)=>{
        console.log("Mongodb connection error:",err);
    })
}

module.exports = connectDB;