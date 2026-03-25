const foodPartnermodel = require("../models/foodpartner.model");
const userModel =require("../models/user.model")
const jwt =require('jsonwebtoken');

async function authFoodPartnerMiddleware(req,res,next){
    const token =req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "Plaese Login first"
        })

    }

    try{
        const decoded =jwt.verify(token, process.env.JWT_SECRET)
        const foodPartner =await foodPartnermodel.findById(decoded.id);
        req.foodPartner = foodPartner;// new property to store the food partner details in the request object

        next();
    }catch(err){
         return res.status(401).json({
            message: "Invalid token"
         })
    }
}

async function authUserMiddleware(req,res,next){
    const token =req.cookies.token;
    if(!token){
        return res.status(401).json({
            message: "please login first"
        })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded.id);

        req.user =user
        next()
    }catch(err){

        return res.status(401).json({
            message: "Invalid token"
        })

    }
}




module.exports ={
    authFoodPartnerMiddleware,
    authUserMiddleware
}