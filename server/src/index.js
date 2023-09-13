// Libraries
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

// files
import {userAuthRouter} from "./routes/userAuthRouter.js";
import {postRouter} from "./routes/post.js";

// locate
import {frontCompRouter} from "./routes/locateRoute/FrontComputers.js"
import {boxesRouter} from "./routes/locateRoute/boxes.js";

// Dotenv
import dotenv from "dotenv";
dotenv.config();

const app=express();

// Environmentals
const PORT=process.env.PORT;
const link_DB=process.env.link_DB;
const meNahiBataunga=process.env.apiStart;

// app.use(express.json());
// // app.use(cors());


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

app.use(cors());


// APIs
app.use(meNahiBataunga,userAuthRouter);
app.use(meNahiBataunga,postRouter);

app.use(meNahiBataunga,frontCompRouter);
app.use(meNahiBataunga,boxesRouter);

// MongoDb Connection 
mongoose.connect(link_DB,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }
).then(()=>{    
    console.log("database connected!!");
    
    app.listen(PORT,()=>{
        console.log("OUR SERVER IS RUNNING!!");
    });
}).catch((error)=>{
    console.log("Connection Failed !!");
    console.log(error);
});
