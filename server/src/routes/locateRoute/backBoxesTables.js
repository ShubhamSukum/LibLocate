import express from "express";

import { backboxesTablesModel } from "../../models/locateLeftSection/backBoxesTables.js";

const backBoxesTablesRouter = express.Router();

backBoxesTablesRouter.get("/backBoxesTables",async(req,res)=>{
    const data=await backboxesTablesModel.find({});
    return res.json(data);
})

export { backBoxesTablesRouter };