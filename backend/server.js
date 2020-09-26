import express from 'express'
import data from "./data";

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    console.log("Finding Product: " + productId);
    const product = data.products.find(x=>x._id === productId);
    // Instead of sending right away, check if it exists, if not show the user a 404.
    // res.send(data.products.find(x=>x._id === productID));

    if (product) {
        console.log(product)
        res.send(product);
    }
    else {
        res.status(404).send({msg: "Product Not Found."});
        console.log("Product Not Found", productId);
    }
});

// Express JS will start running and the first parameter is port number
app.listen(5000, () => console.log("Server started at http://localhost:5000"));