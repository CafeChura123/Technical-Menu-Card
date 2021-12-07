const mongoose = require("mongoose");

const placeOrderSchema = new mongoose.Schema({
    tableNum:{
        type:String,
        required: true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    orderList:[
        {
            name:{
                type:String,
                required:true
            },
            prize:{
                type:Number,
                required:true
            },
            amount:{
                type:String,
                required: true
            }
        }
    ]
});

const PlaceOrder = new mongoose.model("ORDER", placeOrderSchema);

module.exports = PlaceOrder;