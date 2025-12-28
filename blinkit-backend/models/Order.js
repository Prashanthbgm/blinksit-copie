import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  items: [
    {
      productId: String,
      name: String,
      price: Number,
      qty: Number
    }
  ],
  totalAmount: Number,
  address: String,
  paymentMode: String,
  status: {
    type: String,
    default: "PLACED"
  }
});

export default mongoose.model("Order", orderSchema);
