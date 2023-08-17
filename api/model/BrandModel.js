import mongoose from "mongoose";

//======================create schema
const BrandSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    status: {
      type: Boolean,
      default: false,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
  },
  { timestamps: true }
);

//========================product model
export const BrandModel = mongoose.model("Brand", BrandSchema);
