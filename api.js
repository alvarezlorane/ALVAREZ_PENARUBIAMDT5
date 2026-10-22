// Backend API Demo (Express + In-Memory Database)
const express = require('express');
const app = express();
app.use(express.json());

// Simulated Database Table
let database = [
    { id: 1, name: "Sample Item", status: "Active" }
];

// GET Endpoint: Retrieves database items
app.get('/api/data', (req, res) => {
    res.json({
        success: true,
        data: database
    });
});

// POST Endpoint: Adds new item to database
app.post('/api/data', (req, res) => {
    const newItem = {
        id: database.length + 1,
        name: req.body.name || "New Entry",
        status: "Active"
    };
    database.push(newItem);
    res.status(201).json({
        message: "Data successfully saved to database",
        data: newItem
    });
});

// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API Server running on port ${PORT}`));