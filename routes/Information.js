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
// 1
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
    }
    res.send({list});
    }).catch((err) => {
        res.send(err)
    })
});

Information.post('/insert/:id',(req,res) => {
    var id = req.params.id
    InformationDB.insertdata(id)
    .then((Response) => {
    var agent_status = Response[0]['agent_status']
    var admin_status = Response[0]['admin_status']
    var customer = Response[0]['customer']
    if (agent_status == "Yes"){
        if (admin_status == "Yes"){
            var data = "admin and agent is Approved"
            var customer_data = customer
            console.log(customer_data,data)
            res.send({customer_data,data})
        }
        else if (admin_status == "No"){
            var data = "admin no Approved"
            var customerData = customer
            console.log(customerData,data)
            res.send({customerData,data})
        }
    }
    else if (agent_status == "No"){
        var data = "agent Rejected"
        var customerdata = customer
        console.log(customerdata,data)
        res.send({customerdata,data})
    }
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Information