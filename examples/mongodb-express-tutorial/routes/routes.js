// Notes and structure of project is from: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

const express = require('express');
const router = express.Router();
module.exports = router;

// Import our database schema into the routes.js file
const Model = require('../models/model')

/*
  We will cover vive endpoints in our route file:

  1. POST data to the databse
  2. GET ALL data from the database
  3. GET data based on ID
  4. UPDATE data based on ID
  5. DELETE data based on ID

  Each of the functions below:
    - First parameter: The route it covers
    - Second parameter: The callback
*/

// POST to databse
router.post('/post', async (req, res) => {

  // We will get the name and age from the request body
  const data = new Model({
    name: req.body.name,
    age: req.body.age
  })

  // Save the data and handle errors
  try {
    // data.save must be handled asynchronously
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  } 
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

// GET ALL DATA
router.get('/getAll', async (req, res) => {
  try {
    const data = await Model.find();
    res.json(data)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET by ID
router.get('/getOne/:id', async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data)
  }
  catch(error) {
    res.status(500).json({ message: error.message })
  }
})




// UPDATE by ID using the patch method
router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    // Find a document by ID and update it
    const result = await Model.findByIdAndUpdate(
      id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// DELETE by ID
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted...`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})