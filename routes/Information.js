const express = require("express");
const bcrypt = require('bcrypt');
const saltRounds = 14;
const Information = express.Router();
const InformationDB   = require("../model/InformationDB")

// 1
Information.post('/update', function (req, res) {
    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
    let updata = {
        name: req.body.name,
        email: req.body.email,
        password: hash
    }
    InformationDB.postData(updata)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
    })
});

// 1.2
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

// 2
Information.post('/post_data', function (req, res) {
    let updata = {
        customer : req.body.customer,
        agent : req.body.agent,
        agent_status : req.body.agent_status,
        admin : req.body.admin,
        admin_status : req.body.admin_status
    }
    InformationDB.postdata(updata)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

// Features:-
// 1
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

// Features:-
// 2
Information.get('/getdata', (req,res) => {
    InformationDB.getdata()
    .then((Data) => {
        res.send(Data)
    }).catch((err) => {
        res.send(err)
    })
});

Information.get('/get', (req,res) => {
    list = []
    InformationDB.getdata()
    .then((Response) => {
    list = []
    for (j = 0; j < Response.length; j++){
        var customer = Response[j]['customer']
        list.push(customer)
        // console.log(list)  
    }
    res.send({list});
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Information