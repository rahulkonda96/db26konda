const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    Flavour: String,
    liters: Number,
    price: Number
})
module.exports = mongoose.model("icecream", icecreamSchema)

