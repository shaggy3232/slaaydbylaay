const router = require('express').Router()
let Lash = require('../models/Lashes.models');



router.route('/').get((req,res) => {
    Lash.find()
        .then(Lashes => res.json(Lashes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const Style = req.body.Style;
    const Price = req.body.Price;
    const Time = req.body.Time;
    const Refill = req.body.Refill;


    const newLash = new Lash({Style,Price,Time,Refill});


    newLash.save()
        .then(() => res.json('New Lash Added'))
        .catch(err => res.status(400).json('Error: ' + err))

})

module.exports = router;