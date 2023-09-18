import express from "express";

import { rightWallModel } from "../../models/locateRightSection/rightWall.js";
import { smallWallModel } from "../../models/locateRightSection/smallWall.js"

const rightWallRouter = express.Router();

rightWallRouter.get("/rightWall",async(req,res)=>{
    const data=await rightWallModel.find({});
    return res.json(data);
})

rightWallRouter.get("/smallWall",async(req,res)=>{
    const data=await smallWallModel.find({});
    return res.json(data);
})

export { rightWallRouter };