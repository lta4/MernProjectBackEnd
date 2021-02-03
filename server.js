require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const app = express();
const { PORT = 4000, NODE_ENV = "development" } = process.env;
const mongoose = require("./db/connection");
const cors = require("cors");
const corsOptions = require("./configs/cors.js");
const icecreamRoutes = require("./controllers/icecreamRoutes");
const shopRoutes = require("./controllers/shopRoutes");

/// MIDDLEWARE ///
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(logger("tiny"));
// app.use(express.urlencoded({extended:false}));
app.use(express.json());

// ROUTE FOR TESTING SERVER IS WORKING
app.get("/", (req, res) => {
    res.json({
        status: 200, 
        msg: "Hello World Backend!", 
    });
});

// Icecream Routes sent to icecream router
app.use("/icecream", icecreamRoutes);

//LISTENER
app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`);
});