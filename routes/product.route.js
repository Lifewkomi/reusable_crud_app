import { router } from "express";
import Product from "../models/product.model";
import {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller";

//GET APIs
router.get("/", getProducts);
router.get("/", getProduct);
//POST APIs
router.post("/", createProduct);
//PUT APIs
router.put("/:id", updateProduct);
//DELETE APIS
router.delete('/:id', deleteProduct)

export default productRoute;
