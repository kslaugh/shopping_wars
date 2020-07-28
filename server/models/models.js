const mongoose = require('mongoose');
const listSchema = new mongoose.Schema({
    item: {type:String},
    quantity: {type:Number}
}, { timestamps: true });
module.exports.List = mongoose.model('List', listSchema);