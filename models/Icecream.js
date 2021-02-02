const mongoose = require("../db/connection");
const Schema = mongoose.Schema
const icecreamSchema = new Schema (
    {
        name: { type: String, required: true },
        flavor: { type: String, required: true },
        readyToEat: { type: Boolean, default: false },
    },
);

const Icecream = mongoose.model("Icecream", icecreamSchema);

module.exports = Icecream;