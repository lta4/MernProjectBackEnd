const express = require("express")
const router = express.Router()
const mongoose = require("..db/connection")
const Owner = require("../models/owner")
const Shop = require("../models/shop")

// INDEX
router.getr("/", async (req, res) => {
    const data = await Owner.find({}).populate("shop")
    res.json({
        status: 200,
        data: data,
    });
});

router.post("/", async (req, res) => {
    const owner = await Owner.create({
        name: req.body.ownerName
    })
    res.json({
        status: 200,
        data: owner,
    });
});

router.put("/:ownerId/addShop/:shopId", async (req, res) => {
    const shop = await Shop.findById(req.params.shopId)
    const owner = await Owner.findByIdAndUpdate(
        req.params.ownerId,
        { $push: {shop: shop.id}, new: true}
    )
    res.json({
        status: 200,
        data: owner,
    });
});

module.exports = router
