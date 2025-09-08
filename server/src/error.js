const express = require('express');

const app = express();


// app.get('/getUserData', (req, res) => {
//     throw new Error("dbfdxgbhfvg");
//     res.send("User data");
// }
// );

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

//yaha error hoga he nahin tho isse koi error nahin aayega


app.get('/getUserData', (req, res, next) => {
    // try {
        throw new Error("dbfdxgbhfvg");
        res.send("User data");
    // } catch (err) {
    //     res.status(500).send("Some Error Occurred");
    // }
});



app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});



