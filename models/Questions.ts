import mongoose from "mongoose";

const Question = new mongoose.Schema(
  {

    Problem: {
      type: String,
      required: [true, "Please provide the Problem Name"],
      maxlength: [100, "Problem cannot be more than 100 characters"],
    },
    Topic: {
      type: String,
      maxlength: [30, "Topic number must be 30 Digit"],
    },
    url: {
      type: String,
      required: [true, 'Please Enter your url'],
      maxlength: [200, "url cannot be more than 200 characters"],
    },

    boolean: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Question || mongoose.model("Question", Question);
