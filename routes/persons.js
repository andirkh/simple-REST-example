var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Person = require('../models/Person.js');

// Get All Person
router.get('/', function(req, res, next){
  Person.getAllPersons(function (err, persons){
    if(err) return next(err);
    res.json(persons)
  })
})

// Add one Person
router.put('/', function(req, res, next) {
  Person.addOnePerson(req.body, function(err, person){
    if(err) return next(err);
    res.json(person)
  })
})

module.exports = router;
