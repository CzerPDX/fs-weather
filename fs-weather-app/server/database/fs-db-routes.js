// This page will route calls to the database to their respective APIs

const express = require('express');
const router = express.Router();
module.exports = router;



const userRoute = require('./routes/user-routes');
router.use('/user', userRoute);

