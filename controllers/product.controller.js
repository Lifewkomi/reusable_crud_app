import Product from "../models/product.model.js";

export const getProducts = async(req, res) => {
    try {
      const products = await Product.find({}); //finds all  products in the database
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
} 

export const getProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);//finds a specific product
        res.status(200).send(product);
      } catch (error) {
        res.status(500).send(error);
      }
}

export const createProduct = async(req,res) => {
    try {
        const product = await Product.create(req.body); //takes time to analyze
        res.status(200).send(product);
        console.log("Product added successfully to database!");
      } catch (error) {
        res.status(500).send(error);
      }
}

export const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
          return res.status(404).send("Product Not Found!");
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).send(updatedProduct);
      } catch (error) {
        res.status(500).send(error);
      }
}

export const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
    
        if (!product) {
          res.status(400).send({ error: "Product not found" });
        }
        res.status(200).send({ message: "Product deleted successfully!" });
      } catch (error) {
        res.status(500).send(error);
      }
}

//Exporting multiple defaults in ES6+
export default {
    getProduct, 
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}