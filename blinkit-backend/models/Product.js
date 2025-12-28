import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  stock: Number
});

export default mongoose.model("Product", productSchema);
