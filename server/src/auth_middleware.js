const express = require('express');
const app = express();


app.use("/admin",
    //middleware function
    (req, res, next) => {
    //logic of checking if the request is authenticated or not
    const token = "abcd"
    const isAdminAuthenticated = token === "abcd"; 
    if(!isAdminAuthenticated) {
        return res.status(403).send("Admin not authenticated");
    }
    else{
        next();
    }
});

app.get('/admin/getAllData', (req, res) => {
    //logic of checking if the request is authenticated or not
    // const token = "abgvbgcd"
    // const isAdminAuthenticated = token === "abcd";
    // if(!isAdminAuthenticated) {
    //     return res.status(403).send("Admin not authenticated");
    // }else{
    res.send("Admin get all data");
    // }
});

app.get('/admin/deleteUser', (req, res) => {
    //logic of checking if the request is authenticated or not
    // const token = "abgvbgcd"
    // const isAdminAuthenticated = token === "abcd";
    // if(!isAdminAuthenticated) {
    //     return res.status(403).send("Admin not authenticated");
    // }else{
    res.send("Admin delete user");
    // }
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
