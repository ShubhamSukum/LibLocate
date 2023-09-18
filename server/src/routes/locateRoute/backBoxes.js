import express from "express";

const app=express();
app.use(express.json());

import {backBoxesModel} from "../../models/locateLeftSection/backBoxes.js";

const backBoxesRouter = express.Router();

backBoxesRouter.get("/backboxes",async(req,res)=>{
    const data= await backBoxesModel.find({});
    res.json(data);
})

export { backBoxesRouter };