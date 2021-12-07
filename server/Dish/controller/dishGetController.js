const Dish = require("../model/dishModel");

const getDishes = async (req, res) => {
    try {
        const dishes = await Dish.find();
        res.status(200).json({err:false, message:"Success", dishes:dishes});
    } catch (err) {
        console.log(err);
    }
}

module.exports = {getDishes}