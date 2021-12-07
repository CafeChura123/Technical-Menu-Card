const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    prize: {
        type: Number,
        required: true
    },
    dishTag: {
        type: String,
        required:true
    },
    catagory: {
        type: String,
        required: true
    },
    dishType: {
        type: String,
        required: true
    }
});

const Dish = new mongoose.model("DISH", dishSchema);

module.exports = Dish;