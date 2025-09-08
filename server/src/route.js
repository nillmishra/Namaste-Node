const express = require('express');
const app = express();


app.use("/",
    //middleware function
    (req, res, next) => {
    next();
});

app.use("/user", 
    //middleware function
    (req, res, next) => {
    next()
}, (req, res, next) => {
    next()
}, 
//request handler function
(req, res, next) => {
    res.send("User route final");
});


// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

//to run this file use command nodemon src/route.js