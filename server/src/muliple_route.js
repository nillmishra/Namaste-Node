const express = require('express');
const app = express();

//using query params

// app.get("/user", (req, res) => {
//     console.log(req.query);
//     res.send({firstName: "Nill", lastName: "Mishra"});
// });


//using path params

app.get("/user/:userId/:name/:password", (req, res) => {
    console.log(req.params);
    res.send({firstName: "Nill", lastName: "Mishra"});
});

app.use("/users", (req, res, next) => {
    console.log("Handling the route user 1");
    //res.send("User route 1");
    next();
}, (req, res, next) => {
    console.log("Handling the route user 2");
    //res.send("User route 2");
    next();
}, (req, res, next) => {
    console.log("Handling the route user 3");
    //res.send("User route 3");
    next();
}, (req, res, next) => {
    console.log("Handling the route user 4");
    // res.send("User route 4");
    next();
});

app.use("/users", (req, res) => {
    console.log("Final handler");
    res.send("User route final");
});

app.post("/user", (req, res) => {
    res.send("Post API called");
}); 

app.delete("/user", (req, res) => {
    res.send("Delete API called");
});


//this will match all the http methods API calls to /test
//issme get post delete sab mai ek hi response dega

// Home route
app.use("/", (req, res) => {
    res.send("Hello from Dashboard");
});

// Test route
app.use("/test", (req, res) => {
    res.send("Hello from test");
});

// Hello route
app.use("/hello", (req, res) => {
    res.send("Hello from hello");
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
