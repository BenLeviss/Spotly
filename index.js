require('dotenv').config(); // Load environment variables at the very top
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Access variables from .env
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;

// Connect to Mongo as required 
mongoose.connect(dbUrl); 
const db = mongoose.connection;

db.on('error', (error) => console.error('Database Error:', error));
db.once('open', () => console.log('Connected to MongoDB'));


// Start server on the configured port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});