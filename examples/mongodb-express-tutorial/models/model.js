const mongoose = require('mongoose');

// Here we define the schema for our database
const dataSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  }
})

module.exports = mongoose.model('Data', dataSchema)