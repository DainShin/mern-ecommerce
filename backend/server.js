// const express = require('express');
import express from 'express';  // package.json 에  "type": "module" 추가하면 이렇게 사용 가능
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

// call the config function
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // allows us to accept JSON data in the req.body


app.use("/api/products", productRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});


