const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const SinglebraidsSchema = new Schema({
    Style:{type: String, required: true},
    length:{type: String, required:true },
    Price:{type: Number, required: true},
    Time :{type: Number, requred: true}


},{
    timestamps:false,
});

const Singlebraids = mongoose.model('Singlebraids', SinglebraidsSchema);

module.exports = Singlebraids