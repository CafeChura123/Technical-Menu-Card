const Dish = require("../model/dishModel");

const addDish = async (req, res) => {
    try {
        const { name, prize, dishTag, catagory, dishType } = req.body;
        if (!name || !prize || !dishTag || !catagory || !dishType) {
            return res.status(422).json({ err: true, message: "Enter Details Properly" });
        }
        const checkDish = await Dish.findOne({ name: name });
        if (!checkDish) {
            const dish = new Dish({
                name: name,
                prize: prize,
                dishTag: dishTag,
                catagory: catagory,
                dishType: dishType
            });
            await dish.save();
            return res.status(200).json({ err: false, message: "Dish Added Successfully" });
        } else {
            return res.status(422).json({ err: true, message: "This Dish Already Present In Menu" });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { addDish }