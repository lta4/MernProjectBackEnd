const mongoose = require("../db/connection")
const ownerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    Shop: [
        {
            ref: "Shop",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})

const Owner = mongoose.model("Owner", ownerSchema)

module.exports = Owner