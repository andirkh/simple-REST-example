var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = Schema({
  author: { type: Schema.Types.ObjectId, ref: 'Person' },
  title: String,
  fans: [{type: Schema.Types.ObjectId, ref: 'Person'}]
})

var Story = module.exports = mongoose.model('Story', storySchema);

// Get All Stories
module.exports.getAllStories = function(callback){
  Story.find().populate('author').exec(callback);
}

// Add One Story
module.exports.addOneStory = function(id, story, callback){
  var query = {
    title: story.title,
    author: id
  }
  Story.create(query, callback);
}

// Get One Story with story by id
module.exports.getStoryById = function(id, callback){
  var query = { _id: id };
  Story.findOne(query).populate('author').exec(callback);
}

// Get Stories by author id
module.exports.getStoryByAuthorId = function(id, callback){
  var query = { author: id };
  Story.find(query).exec(callback)
}
