const mongoose = require("mongoose")
const icecreamSchema = mongoose.Schema({
    Flavour: String,
    liters: Number,
    price: {type: Number , min : 2 , max: 56 , default: 0}
})
module.exports = mongoose.model("icecream", icecreamSchema)

