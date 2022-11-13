/*
    Code and notes based on tutorial by Arpan Neupane
    https://www.youtube.com/watch?v=w3vs4a03y3I&t=639s
*/

const express = require('express')
const app = express()
const port = 5001

// Set up a route for the API. 
// This is the backened API we will be setting up.
// In the frontend we will fetch this user array and display all the users.
app.get("/api", (req, res) => {
    // Send an JSON array of users back
    res.json({
        "users": [
            "userOne",
            "userTwo",
            "userThree"
        ]
    })
})



// Start up the backend
// React runs on port 3000 by default.
// We are going to run on port 5001 because ControlCe service runs on port 5000 on mac
app.listen(port, () => {
    console.log(`Server started on port ${port}...`)
})