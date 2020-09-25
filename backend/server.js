import express from 'express'
import data from "./data";

const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

// Express JS will start running and the first parameter is port number
app.listen(5000, () => console.log("Server started at http://localhost:5000"));