const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const Information = require("./routes/Information")
app.use("/Information",Information)

app.listen(9000, () => {
    console.log("server is listening 9000.........")
});

// const bcrypt = require('bcrypt');
// let saltRounds = 5
// let myString = 'zeba'

// bcrypt.hash(myString, saltRounds, (err,hash) => {
//     if(!err) {
//         console.log(hash)
//     }
//     else {
//         console.log(err)
//     }
// });

