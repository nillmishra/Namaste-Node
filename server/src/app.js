const express = require('express');
const app = express();
const {adminAuth, userAuth} = require('./middleware/auth');



app.use("/admin", adminAuth);
app.get("/user", userAuth, (req, res) => {
    res.send("User route final");
});

app.get('/admin/getAllData', (req, res) => {
    res.send("Admin get all data");
});

app.get('/admin/deleteUser', (req, res) => {
    res.send("Admin delete user");
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
