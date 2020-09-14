const router = require('express').Router()
let Lash = require('../models/Lashes.models');
const Lashes = require('../models/Lashes.models');



router.route('/').get((req,res) => {
    Lash.find()
        .then(Lashes => res.json(Lashes))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req,res) => {
    Lash.findById(req.params.id)
        .then(Lashes => res.json(Lashes))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const Style = req.body.Style;
    const Price = Number(req.body.Price);
    const Time = Number(req.body.Time);
    const Refill = Number(req.body.Refill);


    const newLash = new Lash({Style,Price,Time,Refill});


    newLash.save()
        .then(() => res.json('New Lash Added'))
        .catch(err => res.status(400).json('Error: ' + err))

})

router.route('/:id').delete((req, res ) => {
    Lash.findByIdAndDelete(req.params.id)
    .then(() => res.json('Lashes deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));

});


router.route('/update/:id').post((req , res) => {

    Lash.findById(req.params.id)
    .then( Lashes => {
        Lashes.Style = req.body.Style;
        Lashes.Price = Number(req.body.Price);
        Lashes.Time = Number(req.body.Time);
        Lashes.Refill = Number(req.body.Refill);
        
        Lashes.save()
        .then(() => res.json('Lashes have been updated'))
        .catch(err => res.status(400).json('Error: '+ err))
    })

})

module.exports = router;