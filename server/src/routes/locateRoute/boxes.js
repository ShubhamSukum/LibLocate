import express from "express";

const app=express();
app.use(express.json());

import {boxesModel} from "../../models/locateLeftSection/boxes.js";
import {userModel} from "../../models/googleusers.js"

const boxesRouter = express.Router();

boxesRouter.get("/boxes",async(req,res)=>{
    const data= await boxesModel.find({});
    res.json(data);
})

// ************************ BOXES *********************************

boxesRouter.patch("/boxes/right/:id", async(req, res) => {
    const { id } = req.params;
    const user = req.body.user;
    const index = req.body.ind;

    try {
    // Fetch user and location details
    const USER = await userModel.findById(user);
    const locate = await boxesModel.findById(id);
    const location = locate.right[index];

    // Toggle state between 0 and 1
    const updatedState = location.state === 1 ? 0 : 1;

    // Check if the user is authorized to update the location
    if (USER.username !== location.user && location.user.length !== 0) {
        return res.json({ success: false, message: 'Unauthorized operation' });
    }

    const userDetail = updatedState ? USER.username : '';

    // Update the object in the database
    const updatedObject = await boxesModel.findOneAndUpdate(
        { _id: id, 'right._id': location._id }, // Specify your query to find the specific document here
        { $set: { 'right.$.state': updatedState, 'right.$.user': userDetail } },
        { new: true }
    );

    // Check if the object was successfully updated
    if (updatedObject) {
        res.json(updatedObject);
    } else {
        res.status(404).json({ success: false, message: 'Object not found' });
    }
    } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
    }


    // const { id } = req.params;
    // const user = req.body.user;
    // const index = req.body.ind;

    // const filter = { "_id": id };
    // const update = { $set: { "right.6.user": "novone", "right.6.state": 1 } }; // Note that arrays in JavaScript are zero-based

    // await boxesModel.updateOne(filter, update)
    // .then(result => {
    //     res.json(result)
    //     console.log("ok");
    //     // Handle success
    // })
    // .catch(error => {
    //     console.error(error);
    //     res.json(error)
    //     // Handle errors here
    // });
})


export { boxesRouter };




























// boxesRouter.patch("/boxes/right/:id", async(req, res) => {
//     const { id } = req.params;
//     const user = req.body.user;
//     const index = req.body.ind;

//     try {
//         // Fetch user and location details
//         const USER = await userModel.findById(user);
//         const locate = await boxesModel.findById(id);
//         const location = locate.right[index];

//         // Toggle state between 0 and 1
//         const updatedState = location.state === 1 ? 0 : 1;

//         // Check if the user is authorized to update the location
//         if (USER.username !== location.user && location.user.length !== 0) {
//             return res.json({ success: false, message: 'Unauthorized operation' });
//         }

//         const userDetail = updatedState ? USER.username : '';

//         // Update the object in the database
//             const updatedObject = await boxesModel.updateOne(
//                 { _id: id },
//                 { $set: { [`right.${index}.state`]: updatedState, [`right.${index}.user`]: userDetail } },
//                 { new: true }
//             );

//             // Check if the object was successfully updated
//             if (updatedObject.nModified > 0) {
//                 res.json({ success: true, message: 'Object updated successfully' });
//             } else {
//                 res.status(404).json({ success: false, message: 'Object not found' });
//             }
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }
// });

// boxesRouter.patch("/boxes/right/:id", async (req, res) => {
//     const { id } = req.params;
//     const { user, ind } = req.body; // Destructure ind from req.body

//     try {
//         const USER = await userModel.findById(user);
//         const locate = await boxesModel.findById(id);

//         // Ensure the index is within the range of the right array
//         if (ind >= 0 && ind < locate.right.length) {
//             const location = locate.right[ind];

//             // Toggle state between 0 and 1
//             const updatedState = location.state === 1 ? 0 : 1;

//             if (USER.username !== location.user && location.user.length !== 0) {
//                 return res.json({ success: false });
//             }

//             // Update specific object in the right array
//             locate.right[ind].state = updatedState;
//             locate.right[ind].user = updatedState ? USER.username : "";

//             // Save the updated document
//             const updatedLocate = await locate.save();

//             res.json({ success: true, updatedState, location: updatedLocate.right[ind] });
//         } else {
//             // Handle invalid index
//             res.status(400).json({ error: "Invalid index" });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });


// boxesRouter.patch("/boxes/right/:id", async (req, res) => {
//     const { id } = req.params;
//     const user = req.body.user;
//     const index = req.body.ind; // Assuming this is the index you want to update
//     // section is right only

//     try {
//         const USER = await userModel.findById(user);
//         const locate = await boxesModel.findById(id);
//         const location = locate.right[index];

//         // Toggle state between 0 and 1
//         const updatedState = location.state === 1 ? 0 : 1;

//         if (USER.username !== location.user && location.user.length !== 0) {
//             return res.json({ success: false });
//         }

//         // Update only state and user fields, preserve other fields
//         locate.right[index].state = updatedState;
//         locate.right[index].user = updatedState ? USER.username : "";

//         // Save the updated document
//         const updating = await locate.save();

//         res.json({ updatedState, location: locate.right[index] });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// });


// boxesRouter.patch("/boxes/right/:id",async(req,res)=>{
//     const { id } = req.params;
//     const user = req.body.user;
//     const index = req.body.ind;

//     try {
//     // Fetch user and location details
//     const USER = await userModel.findById(user);
//     const locate = await boxesModel.findById(id);
//     const location = locate.right[index];

//     // Toggle state between 0 and 1
//     const updatedState = location.state === 1 ? 0 : 1;

//     // Check if the user is authorized to update the location
//     if (USER.username !== location.user && location.user.length !== 0) {
//         return res.json({ success: false, message: 'Unauthorized operation' });
//     }

//     const userDetail = updatedState ? USER.username : '';

//     // Update the object in the database
//     const updatedObject = await boxesModel.findOneAndUpdate(
//         { $set: { [`right.${index}.state`]: 1, [`right.${index}.user`]: user } },
//         { new: true }
//     );

//     // Check if the object was successfully updated
//     if (updatedObject) {
//         res.json(updatedObject);
//     } else {
//         res.status(404).json({ success: false, message: 'Object not found' });
//     }
//     } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }


//     // const { id } = req.params;
//     // const user = req.body.user;
//     // const index=req.body.ind;
//     // // section is right only

//     // const USER = await userModel.findById(user);
//     // const locate = await boxesModel.findById(id)
//     // const location=locate.right[index];

//     // // Toggle state between 0 and 1
//     // const updatedState = location.state === 1 ? 0 : 1;

//     // if(USER.username!=location.user && location.user.length != 0)return res.json({success:false});

//     // const userDetail= updatedState? USER.username:"";

//     // await boxesModel.findOneAndUpdate(
//     //     { /* Add your query to find the specific document here */ },
//     //     { $set: { [`right.${index}.state`]: updatedState, [`right.${index}.user`]: userDetail } },
//     //     { new: true },
//     //     (err, updatedObject) => {
//     //       if (err) {
//     //         console.error(err);
//     //         res.status(500).json({ error: 'Internal Server Error' });
//     //       } else {
//     //         res.json(updatedObject);
//     //       }
//     //     }
//     //   );

//     // try {
//     //     const USER = await userModel.findById(user);
//     //     const locate = await boxesModel.findById(id)
//     //     const location=locate.right[index];

//     //     // Toggle state between 0 and 1
//     //     const updatedState = location.state === 1 ? 0 : 1;

//     //     if(USER.username!=location.user && location.user.length != 0)return res.json({success:false});

//     //     const userDetail= updatedState? USER.username:"";

//     //     // const ok={...locate,right.ind.}

//     //     // Update only state and user fields, preserve other fields
//     //     const updating=await boxesModel.findByIdAndUpdate(
//     //     id,
//     //     {
//     //         $set: {
//     //             []

//     //         }
//     //     },
//     //     { new: true } // To return the updated document
//     //     );

//     //     // res.json({ done: true});

//     //     res.json({updatedState,location})
//     // } catch (err) {
//     //     console.error(err);
//     //     res.status(500).json({ error: "Internal Server Error" });
//     // }
// })
