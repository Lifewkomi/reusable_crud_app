import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/product.route.js";

const app = express();

//MIDDLEWARES
app.use(express.json()); //allows us to add items to body in json format
app.use(express.urlencoded({ extended: false })); //allows us to add items to body in form format

//ROUTES
app.use('/api/products', productRoutes);


//API's Endpoints
app.get("/", (req, res) => {
  res.send("HELLO FROM BACKEND SERVER");
});


//MONGOOSE CONNECTION
const port = 9073;
mongoose.connect(
    "mongodb+srv://philemonkomi46:j2yx3KMIiaXnG7qV@backenddb.uaor4.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Conneced to Database");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Conneced Failed!");
  });
