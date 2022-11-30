/*
  These are the routes that govern the interface to the user database

  For the user database we provide:
  - POST data to the database
  - GET data based on ID
  - UPDATE data based on ID
  - DELETE data based on ID

  References:
  https://www.npmjs.com/package/json-server-auth
  https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
*/

const express = require('express');
const axios = require('axios');
const router = express.Router();
module.exports = router;

const DB_URL = 'http://localhost:8001';


// REGISTER using json-server-auth
router.post('/register', async (req, res) => {

  // Verify the proper information was passed in
  if ((req?.body?.email === undefined) || (req?.body?.password === undefined) || (req?.body?.displayName === undefined)) {
    res.status(400).send(`Error! Requests for user registration must include in the body: email, password, and displayName`);
  } 
    
  // If all information is correct
  else {
    // Build the new user object
    const newUser = {
      "email": req.body.email,
      "password": req.body.password,
      "displayName": req.body.displayName,
    }

    try {
      // Send the new user to the database and wait for the response
      const databaseResponse = await axios.post(`${DB_URL}/register`, newUser)
      res.status(databaseResponse.status).send(databaseResponse.data);
    }
    catch (error) {
      res.status(error?.response?.status).send(error?.response?.data)
    }
  }
})

// LOGIN using json-server-auth
router.post('/login', async (req, res) => {

  // Verify the proper information was passed in
  if ((req?.body?.email === undefined) || (req?.body?.password === undefined)) {
    res.status(400).send(`Error! Requests for user login must include in the body: email and password`);
  } 
  else {
    // Build an object with the email and password for the login attempt
    const loginInfo = {
      "email": req.body.email,
      "password": req.body.password
    }
    try {
      const databaseResponse = await axios.post(`${DB_URL}/login`, loginInfo)
      console.log(databaseResponse.data)
      res.status(databaseResponse.status).send(databaseResponse.data);
    }
    catch (error) {
      res.status(error?.response?.status).send(error?.response?.data)
    }
  }
})



// // POST to databse
// // Example POST endpoint: localhost:5001/data/user/post
// router.post('/post', async (req, res) => {
  
//   msg = `POST: email=${req.body.email}, displayName=${req.body.displayName}`

//   try {
//     console.log(msg)
//     res.status(200).send(msg)
//   }
//   catch (error) {
//     const errMsg = `ERROR! ${error}`;
//     console.error(errMsg)
//     res.status(400).send(errMsg)
//   }

// })

// GET by ID
// Example GET endpoint: localhost:5001/data/user/get
// router.get('/get', async (req, res) => {
//   msg = `GET: email=${req.body.email}`
//   try {
//     console.log(msg)
//     res.status(200).send(msg)
//   }
//   catch (error) {
//     const errMsg = `ERROR! ${error}`;
//     console.error(errMsg)
//     res.status(400).send(errMsg)
//   }
// })


// // UPDATE by ID using the patch method
// // Example PATCH endpoint: localhost:5001/data/user/update
// router.patch('/update', async (req, res) => {
//   msg = `UPDATE: email=${req.body.email}, displayName=${req.body.displayName}`
//   try {
//     console.log(msg)
//     res.status(200).send(msg)
//   }
//   catch (error) {
//     const errMsg = `ERROR! ${error}`;
//     console.error(errMsg)
//     res.status(400).send(errMsg)
//   }
// })

// // DELETE by ID
// // Example DELETE endpoint: localhost:5001/data/user/delete
// router.delete('/delete', async (req, res) => {
//   msg = `DELETE: email=${req.body.email}`
//   try {
//     console.log(msg)
//     res.status(200).send(msg)
//   }
//   catch (error) {
//     const errMsg = `ERROR! ${error}`;
//     console.error(errMsg)
//     res.status(400).send(errMsg)
//   }
// })

// // Catch any malformed requests
// router.all('*', (req, res) => {
//   res.status(400).send(`Error! Invalid databse request at /data${req.path}`)
// })