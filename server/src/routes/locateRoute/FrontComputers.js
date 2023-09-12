import express from "express";

import {locateModel} from "../../models/locateModel.js/frontComputers.js";

const frontCompRouter = express.Router();

frontCompRouter.get("/frontComputers",async(req,res)=>{
    const data= await locateModel.find({area:"computer"});
    res.json(data);
})

frontCompRouter.get("/frontWall",async(req,res)=>{
    const data= await locateModel.find({area:"wall"});
    res.json(data);
})

export { frontCompRouter };