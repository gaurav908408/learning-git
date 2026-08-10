const express = require("express");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());

// Test API
app.get("/", (req, res) => {
    res.json({
        message: "Todo API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});