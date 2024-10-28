const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Todorouter = require('./routes/ToDoRoutes.js')
const Userrouter = require('./routes/UserRoutes.js')
const port = 4000;
const cors = require ("cors")
require('dotenv').config()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

    
app.use('/api/todos',Todorouter);
app.use('/api/users',Userrouter)


app.listen(port, () => {
    console.log("Listening on port:", {port})
})