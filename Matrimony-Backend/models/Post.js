import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicturePath: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    comments: { type : Array , "default" : [] }
  ,
  },
  { timestamps: true }
);

// Remove method to delete post
postSchema.methods.remove = async function() {
  await this.model('Post').deleteOne({ _id: this._id });
};

const Post = mongoose.model("Post", postSchema);

export default Post;