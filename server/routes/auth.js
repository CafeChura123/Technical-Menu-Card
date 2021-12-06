const express = require("express");
const Admin = require("../mongoDB/adminModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {secret} = require("../config/key");
const router = express.Router();
const authorization = require("../middleware/authorization");


//code for add Admin secure id and password uncomment when need 
// router.post("/signup", async (req, res) => {
//     try {
//         const userName = req.body.userName;
//         const password = req.body.password;

//         if (!userName || !password) {
//             return res.status(422).json({ err: true, message: "Fill All Field" });
//         }

//         const foundAdmin = await Admin.findOne({ userName: userName });

//         if (foundAdmin) {
//             return res.status(403).json({ err: true, message: "Admin Already Regitered" });
//         }

//         const admin = new Admin({
//             userName: userName,
//             password: password
//         });

//         await admin.save();

//         res.status(201).json({ err: false, message: "Admin Created" });
//     } catch (err) {
//         console.log(err);
//     }
// });

router.post("/signin", async (req, res) => {
    try {        
        const userName = req.body.userName;
        const password = req.body.password;
    
        if (!userName || !password) {
            return res.status(422).json({ err: true, message: "Fill All Field" });
        }

        const foundAdmin = await Admin.findOne({userName: userName});

        if(foundAdmin){
            const matchPassword = await bcryptjs.compare(password, foundAdmin.password);
            if(matchPassword){
                const token = await jwt.sign({_id: foundAdmin._id}, secret);
                return res.status(200).json({err:false, message:"Signin Succes", token: token});
            }else{
                return res.status(422).json({err:true, message:"Wrong Details"});
            }
        }else{
            return res.status(422).json({err:true, message:"Wrong Details"});
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;