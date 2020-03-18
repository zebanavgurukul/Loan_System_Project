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
// bcrypt.hash('password123',10,(err,hash) => {
//     console.log(hash)
//     bcrypt.compare('password123',hash,(err,res) => {
//         if (res) {
//             console.log('password match')
//         }
//         else {
//             console.log('password dont match')
//         }
//     })
// });

