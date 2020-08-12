const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const BraidsSchema = new Schema({
    Style:{type: String, required: true},
    Price:{type: Number, required: true},
    Time :{type: Number, requred: true}


},{
    timestamps:false,
});

const Braids = mongoose.model('Braids', BraidsSchema);

module.exports = Braids