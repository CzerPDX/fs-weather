// This page will route calls to the database to their respective APIs

const express = require('express');
const axios = require('axios');
const router = express.Router();
module.exports = router;



const userRoute = require('./database-routes/user-routes');
router.use('/user', userRoute);

