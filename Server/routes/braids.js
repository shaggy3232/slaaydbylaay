const router = require('express').Router()
let Braids = require('../models/braids.models')


router.route('/').get((req,res) => {
    Braids.find()
        .then(braids => res.json(braids))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const Style = req.body.Style;
    const Price = req.body.Price;
    const Time = req.body.Time;


    const newBriads = new Braids({Style,Price,Time});


    newBriads.save()
        .then(() => res.json('New Braid Added'))
        .catch(err => res.status(400).json('Error: ' + err))

})

module.exports =router;