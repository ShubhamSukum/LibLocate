import express from "express";

const app=express();
app.use(express.json());

import {boxesModel} from "../../models/locateModel/boxes.js";

const boxesRouter = express.Router();

boxesRouter.get("/boxes",async(req,res)=>{
    const data= await boxesModel.find({});
    res.json(data);
})

export { boxesRouter };
