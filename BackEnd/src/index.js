const express=require('express');
const app=express();
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const router = require('./routes/auth');
const bodyParser = require("body-parser");

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("DB connected");
    } catch (error) {
        console.log("error");
        console.log(error);
    }
}


//middlewares
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api/auth',router);



dotenv.config();
const PORT=process.env.PORT;


app.listen(PORT,()=>{
    console.log(`Server connected to port ${PORT}`);
    connectDB();
});