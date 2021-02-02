const mongoose = require("./connection");
const Icecream = require("../models/Icecream");
const manyIcecream = require("./seeData.json");
const db = mongoose.connection;

Icecream.deleteMany({}).then(() => {
    Icecream.insertMany(manyIcecream).then((icecream) => {
        console.log("icecream", icecream);
        db.close();
    })
})