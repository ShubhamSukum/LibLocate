import express from "express";
import cors from "cors";

import {userModel} from "../models/googleusers.js";
import {normalUserModel} from "../models/users.js";

const app=express();

app.use(express.json());
app.use(cors());

const userAuthRouter=express.Router();

userAuthRouter.post("/addGoogleUser",async(req,res)=>{
    const user=req.body;
    const profilePic=user.profilePic;
    const username=user.username;

    const search=await userModel.findOne({username});

    if(!search){
        const newUser=new userModel(user);
        const ok=await newUser.save();
    }
    
    // else{
    //     return res.send({message:"Already Sign In"});
    // }

    res.send({profilePic,username});
});

userAuthRouter.post("/addUser",async(req,res)=>{
    const {logUsername,logPass}=req.body;
    const search=await normalUserModel.findOne({username:logUsername});
    // console.log(logUsername,logPass);

    if(!search){
        const newUser=new normalUserModel({username:logUsername,password:logPass});
        const ok=await newUser.save();
        res.json({message:"User Registered!!"});
    }
    else{
        res.json({message:"User Exist!! Try Another Username or Sign IN with GOOGLE"});
    }
    
})

export {userAuthRouter};
