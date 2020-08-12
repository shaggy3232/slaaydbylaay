const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const LashesSchema = new Schema({
    Style:{type: String, required: true},
    Price:{type: Number, required: true},
    Refill:{type: Number, required: true },
    Time :{type: Number, requred: true}


},{
    timestamps:false,
});

const Lashes = mongoose.model('Lashes', LashesSchema);

module.exports = Lashes