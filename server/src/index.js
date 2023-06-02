// Libraries
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// files


// Dotenv
import dotenv from "dotenv";
dotenv.config();

const app=express();
const PORT=process.env.PORT;
const link_DB=process.env.link_DB;

app.use(express.json());
app.use(cors());

// MongoDb Connection 
mongoose.connect(link_DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then(()=>{
    console.log("database connected!!");
    
    app.listen(PORT,()=>{
        console.log("OUR SERVER IS RUNNING!!");
    });
}).catch((error)=>{
    console.log("Connection Failed !!");
    console.log(error);
});
