const express = require('express');
var bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json())

const Information = require("./routes/Information")
app.use("/Information",Information)

app.listen(9000, () => {
    console.log("server is listening 9000.........")
});