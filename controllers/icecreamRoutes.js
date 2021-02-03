const { Router } = require("express");
const express = require("express");
const router = express.Router();
const icecream = require("../db/connection");
const mongoose = require("../db/connection");
const Icecream = require("../models/Icecream");
const db = mongoose.connection

// SEED
router.get("/seed", async (req, res) => {
    await Icecream.deleteMany({})
    const seedData = await Icecream.insertMany(icecream)
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

// GET-by first name
// router.get("/:id", (req, res) => {
//     Icecream.findById(req.params.id)
//         .then((icecream) =>
//             res.json({
//                 status: 200,
//                 icecream: icecream,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// GET-by flavor
// router.get("/:id", (req, res) => {
//     Icecream.findById(req.params.id)
//         .then((icecream) => 
//             res.json({
//                 status: 200,
//                 icecream: icecream,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// PUT -by name and flavor
// router.put("/:id", (req, res) => {
//     Icecream.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then((icecream) =>
//             res.json({
//                 status: 200,
//                 icecream: icecream,
//             })
//         ).catch((err) => res.json({
//             status: 400,
//             err: err,
//         }));
// });

// CREATE
// router.post("/", async (req, res) => {
//     res.json(await Icecream.create(req.body));
// });

// DELETE- by id
router.delete("/:id", (req, res) => {
    Icecream.findByIdAndDelete(req.params.id)
        .then((icecream) =>
            res.json({
                status: 200,
                msg: "item deleted",
            })
        ).catch((err) => res.json({
            status: 400,
            err: err,
        }));
});





module.exports = router