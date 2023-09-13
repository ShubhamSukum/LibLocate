import mongoose from 'mongoose';

const mongooseSchema = new mongoose.Schema({
  right: [
    {
      user: {
        type: String,
        required: true
      },
      state: {
        type: Number,
        required: true
      }
    }
  ],
  left: [
    {
      user: {
        type: String,
        required: true
      },
      state: {
        type: Number,
        required: true
      }
    }
  ]
});

export const boxesModel = mongoose.model('boxes', mongooseSchema);