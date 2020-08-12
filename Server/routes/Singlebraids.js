const router = require('express').Router()
let Singlebraid = require('../models/Singlebraids.models');



router.route('/').get((req,res) => {
    Singlebraid.find()
        .then(Singlebraids => res.json(Singlebraids))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const Style = req.body.Style;
    const Price = req.body.Price;
    const Time = req.body.Time;
    const Length = req.body.Length;


    const newSinglebraid = new Singlebraid({Style,Price,Time,Length});


    newSinglebraid.save()
        .then(() => res.json('New Singlebraid Added'))
        .catch(err => res.status(400).json('Error: ' + err))

})

module.exports = router;
