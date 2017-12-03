var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Story = require('../models/Story.js');

// Get All Stories
router.get('/', function(req, res, next){
  Story.getAllStories(function(err, stories){
    if(err) return next(err);
    res.json(stories)
  })
})

// Add One Story
router.put('/:_id', function(req, res, next) {
  Story.addOneStory(req.params._id, req.body, function(err, story){
    if(err) return next(err);
    res.json(story);
  })
})

// Get One Story with author by id
router.get('/:_id', function(req, res, next){
  Story.getStoryById(req.params._id, function(err, story){
    if(err) return next(err);
    res.json(story);
  })
})

router.get('/author/:_id', function(req, res, next){
  Story.getStoryByAuthorId(req.params._id, function(err, story){
    if(err) return next(err);
    res.json(story);
  })
})

module.exports = router;
