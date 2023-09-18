import express from "express";

import { rightWallModel } from "../../models/locateRightSection/rightWall.js";

const rightWallRouter = express.Router();

rightWallRouter.get("/rightWall",async(req,res)=>{
    const data=await rightWallModel.find({});
    return res.json(data);
})

export { rightWallRouter };