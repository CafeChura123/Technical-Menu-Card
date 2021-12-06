const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

adminSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcryptjs.hash(this.password, 12);
    }
    next();
});

const Admin = new mongoose.model("ADMIN", adminSchema);

module.exports = Admin;