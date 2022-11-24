/*
  From tutorial https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
*/

const express = require('express');
const mongoose = require('mongoose');

// Import the contents of our .env file into index.js
require('dotenv').config();
const mongoString = process.env.DATABASE_URL

// Connect the database to our server using Mongoose
mongoose.connect(mongoString);
const database = mongoose.connection

// Throw a success or error depending on if our database connection succeeds or fails
// database.on means it will connect to the database and throw an error if any occurs
database.on('error', (error) => {
  console.log(error)
})
// database.once will run only one time. If it is successful, it will show a success message
database.once('connected', () => {
  console.log('Database Connected!');
})



// Transfer contents of Express into a constant called "app"
const app = express();
app.use(express.json());


// Import our routes and use them ()
const routes = require('./routes/routes');
app.use('/api', routes)   // base endpoint: '/api', content of routes: 'routes'

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
})
