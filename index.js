import express from "express";
import mongoose from "mongoose";
import Product from "./models/product.model.js";

const app = express();

//MIDDLEWARES
app.use(express.json())


//MONGOOSE CONNECTION
const port = 9073;
mongoose.connect("mongodb+srv://philemonkomi46:j2yx3KMIiaXnG7qV@backenddb.uaor4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Conneced to Database")
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
})
.catch(() => {
    console.log("Conneced Failed!")

})


//API's Endpoints
app.get('/', (req, res) => {
    res.send("HELLO FROM BACKEND SERVER");
});

app.post('/api/products', async (req, res) => {   //whenever we use await, we use async function
    try {
        const product = await Product.create(req.body); //takes time to analyze
        res.status(200).send(product)
        console.log("Product added successfully to database!")
    } catch (error) {
        res.status(500).send(error);
    }
});

//API to Get and View all my created Products
app.get('/api/products', async(req, res) => {
    try {
        const products = await Product.find({});       //finds the products in the database
        res.status(200).send(products)
    } catch (error) {
        res.status(500).send(error)
    }
})
