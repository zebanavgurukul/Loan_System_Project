const express = require("express");
const bcrypt = require('bcrypt');
const saltRounds = 14;
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

Information.put('/upData/:id',(req,res) => {
    var id = req.params.id
    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
    var update = {
        name: req.body.name,
        email: req.body.email,
        password: hash
    }
    InformationDB.putData(id,update)
    .then(() => {
        res.send('update')
    }).catch((err) => {
        res.send(err)
    })
    })
});

Information.post('/post_data', function (req, res) {
    let updata = {
        customer : req.body.customer,
        agent : req.body.agent,
        agent_status : req.body.agent_status,
        admin : req.body.admin,
        admin_status : req.body.admin_status
    }
    InformationDB.postdata(updata)
    .then((data) => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

Information.put('/put/:id',(req,res) => {
    var id = req.params.id
    var updata = {
        customer : req.body.customer,
        agent : req.body.agent,
        agent_status : req.body.agent_status,
        admin : req.body.admin,
        admin_status : req.body.admin_status
    }
    InformationDB.putdata(id,updata)
    .then(() => {
        res.send('update')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Information