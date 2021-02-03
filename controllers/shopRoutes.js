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

// GET-by shop name
// router.get("/:id", (req, res) => {
//     Shop.findById(req.params.id)
//         .then((shop) =>
//             res.json({
//                 status: 200,
//                 shop: shop,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// GET-by yearBuilt
// router.get("/:id", (req, res) => {
//     Shop.findById(req.params.id)
//         .then((shop) => 
//             res.json({
//                 status: 200,
//                 shop: shop,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// PUT -by name and flavor
// router.put("/:id", (req, res) => {
//     Shop.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then((shop) =>
//             res.json({
//                 status: 200,
//                 shop: shop,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// CREATE
// router.post("/", async (req, res) => {
//     res.json(await Shop.create(req.body));
// });

// DELETE- by id
// router.delete("/:id", (req, res) => {
//     Shop.findByIdAndDelete(req.params.id)
//         .then((shop) =>
//             res.json({
//                 status: 200,
//                 msg: "item deleted",
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

module.exports = router