import { Router } from "express";
import productController from "../controllers/product.controller.js";

const router = Router();
const { getProduct, getProducts, createProduct, updateProduct, deleteProduct }  = productController


//GET APIs
router.get("/", getProducts);
router.get("/:id", getProduct);

//POST APIs
router.post("/", createProduct);

//PUT APIs
router.put("/:id", updateProduct);

//DELETE APIS
router.delete('/:id', deleteProduct)

export default router;
