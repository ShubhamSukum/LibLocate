import express from "express";

import { locateModel } from "../../models/locateLeftSection/frontComputers.js";
import { userModel } from "../../models/googleusers.js";

const frontCompRouter = express.Router();

frontCompRouter.get("/frontComputers", async (req, res) => {
  const data = await locateModel.find({ area: "computer" });
  res.json(data);
});

frontCompRouter.get("/frontWall", async (req, res) => {
  const data = await locateModel.find({ area: "wall" });
  res.json(data);
});

frontCompRouter.patch("/frontComputers/:id",async(req,res)=>{
  const {id}=req.params;
  const user=req.body.user;
  

  try{
    const USER = await userModel.findById(user);
    await locateModel.findByIdAndUpdate(
      id,
      {$set:{state:1,user:USER.username}},
      {new:true})
      res.json({done:true})
  }
  catch(err){
    console.log(err);
  }

  
})

export { frontCompRouter };
