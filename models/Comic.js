import mongoose from "mongoose";

const comicSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required..."] },
    author: { type: String, required: [true, "Author name is required..."] },
    yearOfPublication: {
      type: Number,
      required: [true, "Year of publication is required..."],
    },
    price: {
      type: Number,
      required: [true, "Price must be filled correctly..."],
    },
    discount: { type: Number, default: 0 },
    pages: {
      type: Number,
      required: [true, "Number of pages are required..."],
    },
    condition: { type: String, enum: ["new", "used"], default: "new" },
    description: { type: String },
    coverPhoto: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comic = mongoose.model("Comic", comicSchema);
export default Comic;
