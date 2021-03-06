import express from 'express'
import data from "./data";
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';
import bodyParser from 'body-parser';
import productsRoute from "./routes/productsRoute";
import orderRoute from "./routes/orderRoute";
dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productsRoute);
app.use("/api/orders", orderRoute);

// app.get("/api/products", (req, res) => {
//     res.send(data.products);
// });

// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id;
//     console.log("Finding Product: " + productId);
//     const product = data.products.find(x=>x._id === productId);
//     // Instead of sending right away, check if it exists, if not show the user a 404.
//     // res.send(data.products.find(x=>x._id === productID));
//
//     if (product) {
//         console.log(product)
//         res.send(product);
//     }
//     else {
//         res.status(404).send({msg: "Product Not Found."});
//         console.log("Product Not Found", productId);
//     }
// });

// Express JS will start running and the first parameter is port number
app.listen(5000, () => console.log("Server started at http://localhost:5000"));