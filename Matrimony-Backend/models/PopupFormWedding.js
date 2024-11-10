import mongoose from "mongoose";

const PopupFormWeddingSchema = new mongoose.Schema(
  {
    email: {
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
      phone:{
          type:Number,
          required:true,
          
      },
      city:{
          type:String,
          required:true,
          min:5,
          max:30,
      },
      budget:{
        type:String,
        default:"",
      },
      weddingType:{
        type:String,
        default:"",
      },
      weddingDate:{
        type:Date
      }
  },
  { timestamps: true }
);
const PopupFormWedding = mongoose.model("PopupFormWedding", PopupFormWeddingSchema);
export default PopupFormWedding;