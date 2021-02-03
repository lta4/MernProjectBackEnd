const mongoose = require("./connection");
const Icecream = require("../models/Icecream");
const manyIcecream = require("./seedData.json");
const Shop = require("../models/Shop");
const manyShop = require("./data.json");
const db = mongoose.connection;

Icecream.deleteMany({}).then(() => {
    Icecream.insertMany(manyIcecream).then((icecream) => {
        console.log("icecream", icecream);
        db.close();
    });
});

Shop.deleteMany({}).then(() => {
    Shop.insertMany(manyShop).then((shop) => {
        console.log("shop", shop);
        db.close();
    });
});