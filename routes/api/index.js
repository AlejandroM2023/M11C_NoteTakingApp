const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');
const idGen = require('uniqid');



router.get('/notes', (req,res)=> {
    res.send(notes);
});

router.post('/notes', (req,res)=> {
    req.body.id = idGen();
    notes.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => err?console.log(err):console.log('Note saved'));
    res.status(201).json(req.body);
});


module.exports = router;
