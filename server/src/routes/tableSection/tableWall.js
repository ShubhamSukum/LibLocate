import express from "express";

import { tableWallModel } from "../../models/locateRightSection/tableWall.js";

const tableWallRouter = express.Router();

tableWallRouter.get("/tableWall",async(req,res)=>{
    const data=await tableWallModel.find({});
    return res.json(data);
})

export { tableWallRouter };