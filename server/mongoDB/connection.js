const mongoose = require("mongoose");

const { database } = require("../config/key");

mongoose.connect(database).then(() => {
    console.log("Connection Success");
}).catch(() => {
    console.log("Connection Failed");
});