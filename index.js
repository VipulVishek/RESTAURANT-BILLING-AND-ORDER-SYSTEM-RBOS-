const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 8080;

//middleware to parse json request body
app.use(express.json());

//routes
app.use('/api/items', require('./routes/itemRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bills', require('./routes/billsRoutes'));

//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
})

//connect to the database
const dbConnect = require("./config/database");
dbConnect();

default Route
 app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})