import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter prduct name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      deault: 0,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, //allows us to have two extra fields: when the field is created at and updated at
  }
);
const Product = mongoose.model("Product", ProductSchema);
export default Product;
 