const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    TotalSeats: {type: Number, default:80},
    remail:{type:Number,default:70},
    Booked: {type: Number},
    user: {type:String}
})

const model = mongoose.model('dataModel',dataSchema)

module.exports = model