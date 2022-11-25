const mongoose = require('mongoose');

// Here we define the schema for our database
const userSchema = new mongoose.Schema({
  id: {
    required: true,
    type: Number
  },
  email: {
    required: true,
    type: String
  },
  displayName: {
    required: false,
    type: String
  }
})

module.exports = mongoose.model('Data', userSchema)