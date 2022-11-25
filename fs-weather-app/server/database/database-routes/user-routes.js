/*
  These are the routes that govern the interface to the user database

  For the user database we provide:
  - POST data to the database
  - GET data based on ID
  - UPDATE data based on ID
  - DELETE data based on ID

  References:
  https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
*/

const express = require('express');
const axios = require('axios');
const router = express.Router();
module.exports = router;

// Import our database schema into the routes.js file
const UserSchema = require('../table-schema/user-table-schema')

// REGISTER using json-server-auth
router.post('/register', async (req, res) => {
  // console.log(`BODY: ${JSON.stringify(req.body)}`);
  if (
    (req?.body?.id === undefined) 
    || (req?.body?.email === undefined)
    || (req?.body?.password === undefined)
    || (req?.body?.displayName === undefined)) {
    res.status(400).send(`Error! Requests for user registration must include in the body: id, email, password, and displayName`);
    } 
    
    else {
      const newUser = {
        "id": req.body.id,
        "email": req.body.email,
        "password": req.body.password,
        "displayName": req.body.displayName,
      }

      try {
        const databaseResponse = await axios.post(`http://localhost:8001/register`, newUser)
        console.log(`${databaseResponse}`)
        res.send(databaseResponse);
      }
      catch (error) {
        res.send(error?.response?.data)
      }
    }
})


// POST to databse
// Example POST endpoint: localhost:5001/data/user/post
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

// GET by ID
// Example GET endpoint: localhost:5001/data/user/get
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
// Example PATCH endpoint: localhost:5001/data/user/update
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
// Example DELETE endpoint: localhost:5001/data/user/delete
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

// Catch any malformed requests
router.all('*', (req, res) => {
  res.status(400).send(`Error! Invalid databse request at /data${req.path}`)
})