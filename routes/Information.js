const express = require("express");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const Information = express.Router();
const InformationDB   = require("../model/InformationDB")

Information.post('/update', function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
    let updata = {
        name: req.body.name,
        email: req.body.email,
        password: hash
    }
    InformationDB.postData(updata)
    .then((data) => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
    })
});

Information.post('/post_data', function (req, res) {
    let updata = {
        admin: req.body.admin,
        agent: req.body.agent,
        customer: req.body.customer
    }
    InformationDB.postdata(updata)
    .then((data) => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Information