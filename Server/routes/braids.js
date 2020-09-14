const router = require('express').Router()
let Braids = require('../models/braids.models')


router.route('/').get((req,res) => {
    Braids.find()
        .then(braids => res.json(braids))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Braids.findById(req.params.id)
        .then(braids => res.json(braids))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res ) => {
    Braids.findByIdAndDelete(req.params.id)
    .then(() => res.json('Braids deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/add').post((req,res) => {
    const Style = req.body.Style;
    const Price = Number(req.body.Price);
    const Time = Number(req.body.Time);


    const newBriads = new Braids({Style,Price,Time});


    newBriads.save()
        .then(() => res.json('New Braid Added'))
        .catch(err => res.status(400).json('Error: ' + err))

})

router.route('/update/:id').post((req , res) => {

    Braids.findById(req.params.id)
        .then( braids => {
        braids.Style = req.body.Style;
        braids.Price = Number(req.body.Price);
        braids.Time = Number(req.body.Time);
      
        
        braids.save()
        .then(() => res.json('Braids have been updated'))
        .catch(err => res.status(400).json('Error: '+ err))
        })
   
})

module.exports =router;