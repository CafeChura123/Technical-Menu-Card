const jwt = require("jsonwebtoken");
const Admin = require("../mongoDB/adminModel");
const { secret } = require("../config/key");

const authorization = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(422).json({ err: true, message:"Only Admin Can Access" });
        }
        const token = authorization.replace("Bearer ", "");
        const verifyToken = jwt.verify(token, secret);
        const admin = await Admin.findById(verifyToken._id);
        if (!admin) {
            return res.status(404).json({ err: true, message:"Only Admin Can Access" });
        }
        req.admin = admin;
        next();
    } catch (err) {
        console.log(err);
        return res.status(422).json({ err: true, message:"Only Admin Can Access" });
    }
};

module.exports = authorization;