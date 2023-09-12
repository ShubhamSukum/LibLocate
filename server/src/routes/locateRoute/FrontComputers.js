import express from "express";

import {locateModel} from "../../models/locateModel.js/frontComputers.js";

const frontCompRouter = express.Router();

frontCompRouter.get("/frontComputers",async(req,res)=>{
    const data= await locateModel.find({});
    res.json(data);
})

export { frontCompRouter };