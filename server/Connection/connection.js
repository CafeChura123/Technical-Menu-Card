const mongoose = require("mongoose");

const { database } = require("../Config/key");

mongoose.connect(database).then(() => {
    console.log("Connection Success");
}).catch(() => {
    console.log("Connection Failed");
});