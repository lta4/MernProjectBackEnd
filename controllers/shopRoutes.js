const express = require("express")
const router = express.Router()
const mongoose = require("../db/connection")
const Shop = require("../models/Shop")
const db = mongoose.connection

// SEED
// router.get("/seed", async (req, res) => {
//     await Shop.deleteMany({})
// })