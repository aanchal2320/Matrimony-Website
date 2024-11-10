import mongoose from 'mongoose';

const ContactUsSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    mobNo : {
        type : Number,
        required : true
    },
    query : {
        type : String,
        required : true
    }
})

const contactUs = mongoose.model("ContactUs", ContactUsSchema);
export default contactUs;  