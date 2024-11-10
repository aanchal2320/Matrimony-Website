import mongoose from "mongoose";

const PopupFormtravelSchema = new mongoose.Schema(
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
          min:3,
          max:30,
      },
      budget:{
        type:String,
        default:"",
      },
      travelType:{
        type:String,
        default:"",
      },
      travelDate:{
        type:Date,  
      },

  },
  { timestamps: true }
);
const PopupFormtravel = mongoose.model("PopupFormTravel", PopupFormtravelSchema);
export default PopupFormtravel;