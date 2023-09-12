import mongoose from "mongoose";

const FrontSchema=new mongoose.Schema({
    computers: {
        type: [Number]
    },
    wall:{
        type:[Number]
    }
});

export const locateModel=mongoose.model("frontcomputers",FrontSchema);