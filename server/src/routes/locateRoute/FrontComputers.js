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

frontCompRouter.patch("/frontComputers/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body.user;

  try {
    const USER = await userModel.findById(user);
    const location = await locateModel.findById(id);

    // Toggle state between 0 and 1
    const updatedState = location.state === 1 ? 0 : 1;

    if(USER.username!=location.user)return res.json({success:false});

    // Update only state and user fields, preserve other fields
    const updatedDocument = await locateModel.findByIdAndUpdate(
      id,
      {
        $set: {
          state: updatedState,
          user: USER.username
          // Add other fields here if needed
        }
      },
      { new: true } // To return the updated document
    );

    res.json({ done: true, updatedDocument });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export { frontCompRouter };


// import express from "express";

// import { locateModel } from "../../models/locateLeftSection/frontComputers.js";
// import { userModel } from "../../models/googleusers.js";

// const frontCompRouter = express.Router();

// frontCompRouter.get("/frontComputers", async (req, res) => {
//   const data = await locateModel.find({ area: "computer" });
//   res.json(data);
// });

// frontCompRouter.get("/frontWall", async (req, res) => {
//   const data = await locateModel.find({ area: "wall" });
//   res.json(data);
// });

// frontCompRouter.patch("/frontComputers/:id",async(req,res)=>{
//   const {id}=req.params;
//   const user=req.body.user;
  
//   try{
//     const USER = await userModel.findById(user);
//     await locateModel.findByIdAndUpdate(
//       id,
//       {$set:{state:1,user:USER.username}},
//       {new:true})
//       res.json({done:true})
//   }
//   catch(err){
//     console.log(err);
//   }
// })

// export { frontCompRouter };
