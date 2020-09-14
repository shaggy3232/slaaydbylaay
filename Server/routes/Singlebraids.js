const router = require('express').Router()
let Singlebraid = require('../models/Singlebraids.models');



router.route('/').get((req,res) => {
    Singlebraid.find()
        .then(Singlebraids => res.json(Singlebraids))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Singlebraid.findById(req.params.id)
        .then(Singlebraids => res.json(Singlebraids))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res ) => {
    Singlebraid.findByIdAndDelete(req.params.id)
    .then(() => res.json('Braids deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req,res) => {
    const Style = req.body.Style;
    const Price = Number(req.body.Price);
    const Time = Number(req.body.Time);
    const Length = req.body.Length;


    const newSinglebraid = new Singlebraid({Style,Price,Time,Length});


    newSinglebraid.save()
        .then(() => res.json('New Singlebraid Added'))
        .catch(err => res.status(400).json('Error: ' + err))

})

router.route('/update/:id').post((req , res) => {

    Singlebraid.findById(req.params.id)
    .then( Singlebraids => {
        Singlebraids.Style = req.body.Style;
        Singlebraids.Price = Number(req.body.Price);
        Singlebraids.Time = Number(req.body.Time);
        Singlebraids.Length = req.body.Length
      
        
        Singlebraids.save()
        .then(() => res.json('Singlebraids have been updated'))
        .catch(err => res.status(400).json('Error: '+ err))
    })

})

module.exports = router;
