const foodModel = require('../models/fooditem.model');
const storageService = require('../services/storage.services');
const {v4: uuid} = require("uuid");




async function createFood(req, res){
    // console.log(req.foodPartner);

    // console.log(req.body)
    // console.log(req.file)

    const fileUploadResult = await storageService.uploadFile(req.file.buffer,uuid())
    console.log(fileUploadResult)

   const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    video: fileUploadResult.url,
    foodPartner: req.foodPartner._id
   })

   res.status(201).json({
    message: "food created successfully",
    food: foodItem
   })

}
//dowafile or validation


async function getFoodItems(req, res){
    const foodItems =await foodModel.find({})
    res.status(200).json({
        message:"Food items fetched successfully",
        foodItems
    })

}


module.exports ={
    createFood,
    getFoodItems
}