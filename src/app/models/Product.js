import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  featured: { type: Boolean, default: false },
  customizationOptions: {
    modelOptions: [
      {
        name: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],
    colorOptions: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
    interiorOptions: [
      {
        name: { type: String, required: true },
        image: { type: String, required: true },
      },
    ],
  },
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;
