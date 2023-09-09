import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import { postModel } from "../models/post.js";

const postRouter = express.Router();

postRouter.get("/getPost", async (req, res) => {
    try {
      const postData = await postModel.find({}); // Exclude image data for now
      return res.status(200).json({ success: true, data: postData });
    } 
    catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
});
  
export { postRouter };













// postRouter.get("/getPost", async (req, res) => {
// //   try {
// //     const postData = await postModel.find({});
// //     return res.send(postData);
// //   } catch (err) {
// //     console.error(err);
// //   }
// // });

// // Define the storage and upload middleware
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });






// import express from "express";
// import cors from "cors";

// const app=express();

// app.use(express.json());
// app.use(cors());

// import {postModel} from "../models/post.js";

// const postRouter=express.Router();

// postRouter.get("/getPost",async(req,res)=>{
//     try{
//         const postData= await postModel.find({});
//         return res.send(postData);
//     }catch(err){
//         console.error(err);
//     }
// });

// postRouter.post('createPost', upload.single('image'), async (req, res) => {
//     try {
//       const newPost = new postModel({
//         title:req.body.title,
//         description:req.body.description,
//         image: {
//           data: req.file.buffer,
//           contentType: req.file.mimetype
//         },
//         account:req.body.account,
//       });
  
//       await newPost.save();
//       res.send('Image uploaded and profile saved successfully.');

//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   });

// export {postRouter};

