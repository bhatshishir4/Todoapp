const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require('./routes/ToDoRoutes.js')
const port = 3000;
const cors = require ("cors")
require('dotenv').config()

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL)
.then(()=> console.log("connected to mongodb"))
.catch((err) => console.log(err) )

app.use('/api',router);



app.listen(port, () => {
    console.log("Listening on port 3000")
})