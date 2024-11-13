const express=require('express');
const { register, login } = require('../repository/auth-repository');
const router=express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const dotenv=require('dotenv');



dotenv.config();
const SECRET_KEY=process.env.SECRET_KEY;


//register
router.post('/register',async (req,res)=>{
    try {
        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        req.body.password=hashedPassword;
        const {username,email,password}=req.body;
        const user=await register(username,email,password);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})





//login
router.post('/login',async (req,res)=>{
    try {
        const user=await login(req.body.email);
        if(!user) return res.status(404).json("User not found");

        const match=await bcrypt.compare(req.body.password,user.password);
        if(!match) return res.status(401).json("Wrong password");

        const TOKEN=jwt.sign({userId:user._id},SECRET_KEY,{expiresIn:'3d'});
        res.cookie("Token",TOKEN).status(200).json({
            username:user.username,
            email:user.email
        });

    } catch (error) {
        res.status(500).json(error);
    }
})





//logout
router.get('/logout',async(req,res)=>{
    try {
        res.clearCookie("Token",{sameSite:"none",secure:true}).status(200).send("User Logged Out ");
    } catch (error) {
        res.status(500).json(error);
    }
});




module.exports=router;