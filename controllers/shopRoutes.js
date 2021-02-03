const express = require("express");
const router = express.Router();
const shop = require("../db/connection");
const mongoose = require("../db/connection");
const Shop = require("../models/Shop");
const db = mongoose.connection

// SEED ROUTE
router.get("/seed", async (req, res) => {
    await Shop.deleteMany({})
    const data = await Shop.insertMany(shop)
    res.json({
        status: 200,
        data: shop
    }).catch((err) => res.json({
        status: 400,
        err: err
    }));
});

// INDEX
router.get("/", (req, res) => {
    Shop.find({}).then( allShops => {
        res.json({
            status: 200,
            shop: allShops,
        });
    }).catch((err) => res.json({
        status: 400,
        err: err
    }));
});

module.exports = router