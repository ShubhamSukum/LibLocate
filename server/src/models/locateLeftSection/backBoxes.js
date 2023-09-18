import mongoose from "mongoose";

const backBoxesSchema=new mongoose.Schema({
    area:{
        type:String,
    },
    state:{
        type:Number,
    },
    User:{
        type:String
    }
});

export const backBoxesModel=mongoose.model("backboxes",backBoxesSchema);