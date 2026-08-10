const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const todoRoutes = require("./Routes/todoRoutes");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Atlas connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error.message);
    });

app.use("/api", todoRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Todo API is running"
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});