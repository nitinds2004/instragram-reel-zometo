const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    video: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    foodPartner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "foodPartner"
    }
})

const foodSchemamodel =mongoose.model("foodModel", foodSchema);
module.exports= foodSchemamodel;