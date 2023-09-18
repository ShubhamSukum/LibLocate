import express from "express";

import { NonElecTableModel } from "../../models/locateRightSection/nonElectricTable.js";

const  nonElecTableRouter= express.Router();

nonElecTableRouter.get("/nonElecTable",async(req,res)=>{
    const data=await NonElecTableModel.find({});
    return res.json(data);
})

export { nonElecTableRouter };