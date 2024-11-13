const User = require("../models/User");




const register=async (username,email,password)=>{
    try{
        const newUser=await User.create({
            username,email,password
        }); 
        return newUser;

    }
    catch(err){
        return err;
    }
}
const login=async (email)=>{
    try {
        const user=await User.findOne({email:email});
        return user;
    } catch (error) {
        return error;
    }
}
module.exports={
    register,
    login
}