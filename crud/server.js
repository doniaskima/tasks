// import packages 

const express = require('express');
const app = express();
const mongoose = require("mongoose");

// DB connections

mongoose.connect(
    "mongodb+srv://donia:crud@cluster0.q3pkn9c.mongodb.net/MYFIRSTDATABSE?retryWrites=true&w=majority"
);

mongoose.connection.addListener("connected", () => {
    console.log("DB CONNECTED SUCCEFULLY !!");
});

// middlewares  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/subscribers", require("./routes/subscriber.routes"));

const port = 5000;
app.listen(port, () => {
    console.log("LISTENING TO PORT  " + port);
});