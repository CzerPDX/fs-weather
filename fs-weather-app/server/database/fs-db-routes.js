// Notes and structure of project is from: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/

const express = require('express');
const router = express.Router();
module.exports = router;

// Import our database schema into the routes.js file
const UserSchema = require('./table-schema/user-table-schema')

/*

  - POST data to the databse
  - GET data based on ID
  - UPDATE data based on ID
  - DELETE data based on ID

  Each of the functions below:
    - First parameter: The route it covers
    - Second parameter: The callback
*/

// POST to databse
// Example url: localhost:5001/dev/post
router.post('/post', async (req, res) => {
  
  msg = `POST: id=${req.body.id}, email=${req.body.email}, displayName=${req.body.displayName}`

  try {
    console.log(msg)
    res.status(200).send(msg)
  }
  catch (error) {
    const errMsg = `ERROR! ${error}`;
    console.error(errMsg)
    res.status(400).send(errMsg)
  }

})

// // GET ALL DATA
// router.get('/get-all', async (req, res) => {
//   res.status(200).send('get-all')
// })

// GET by ID
// Example url: localhost:5001/db/get
router.get('/get', async (req, res) => {
  msg = `GET: id=${req.body.id}`
  try {
    console.log(msg)
    res.status(200).send(msg)
  }
  catch (error) {
    const errMsg = `ERROR! ${error}`;
    console.error(errMsg)
    res.status(400).send(errMsg)
  }
})


// UPDATE by ID using the patch method
// Example url: localhost:5001/db/update
router.patch('/update', async (req, res) => {
  msg = `UPDATE: id=${req.body.id}, email=${req.body.email}, displayName=${req.body.displayName}`
  try {
    console.log(msg)
    res.status(200).send(msg)
  }
  catch (error) {
    const errMsg = `ERROR! ${error}`;
    console.error(errMsg)
    res.status(400).send(errMsg)
  }
})

// DELETE by ID
// Example url: localhost:5001/db/delete
router.delete('/delete', async (req, res) => {
  msg = `DELETE: id=${req.body.id}`
  try {
    console.log(msg)
    res.status(200).send(msg)
  }
  catch (error) {
    const errMsg = `ERROR! ${error}`;
    console.error(errMsg)
    res.status(400).send(errMsg)
  }
})

router.all('*', (req, res) => {
  res.status(400).send(`Error! Invalid databse request at /data${req.path}`)
})