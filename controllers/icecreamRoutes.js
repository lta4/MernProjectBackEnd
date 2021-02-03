const express = require("express");
const router = express.Router();
const icecream = require("../db/connection");
const mongoose = require("../db/connection");
const Icecream = require("../models/Icecream");
const db = mongoose.connection

// SEED ROUTE
router.get("/seed", async (req, res) => {
    await Icecream.deleteMany({})
    const seedData = await Icecream.insertMany(icecreams)
    res.json({
        status: 200,
        data: seedData
    }).catch((err) => res.json({
        status: 400,
        err: err
    }));
});

// INDEX
router.get("/", (req, res) => {
    Icecream.find({}).then( allIcecreams => {
        res.json({
            status: 200,
            icecream: allIcecreams,
        });
    }).catch((err) => res.json({
        status: 400,
        err: err
    }));
});





module.exports = router