const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contacts');
const connectDB = require('./config/db');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contacts', contactRoutes);

connectDB();
app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});