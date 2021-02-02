const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const shopSchema = new Schema (
    {
        name: { type: String, required: true },
        yearBuilt: { type: Number, required: true },
        icecream: { type: mongoose.Types.ObjectId, ref: "Icecream" }
    }
)

const Shop = mongoose.model("Shop", shopSchema);