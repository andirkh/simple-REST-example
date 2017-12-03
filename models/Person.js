var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = ({
  name: String,
  age: Number,
  stories: [{ type: Schema.Types.ObjectId, ref: 'Story'}]
});

var Person = module.exports = mongoose.model('Person', personSchema);

// Get All person
module.exports.getAllPersons = function(callback){
  Person.find().populate('stories').exec(callback)
}

// Add One Person
module.exports.addOnePerson = function(person, callback){
  Person.create(person, callback)
}
