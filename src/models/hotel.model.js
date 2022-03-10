const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    title: { type: String, required: true },
    review: { type: Int, required: false },
    price: { type: String, required: true },
    distance: { type: Int, required: false },
    picture: { type: String, required: false },
},
{
    timestamps: true
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;