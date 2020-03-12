const express = require("express");
var jwt = require('jsonwebtoken');
const Information = express.Router();
const InformationDB   = require("../model/InformationDB")

// 1
Information.post('/update', function (req, res) {
    let updata = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    InformationDB.postData(updata)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

// 1.2
Information.put('/upData/:id',(req,res) => {
    var id = req.params.id
    var update = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    InformationDB.putData(id,update)
    .then(() => {
        res.send('update')
    }).catch((err) => {
        res.send(err)
    })
});

// 1.3
Information.post("/login",(req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    InformationDB.login(email)
    .then((data)=>{
        if(data.length==0){
            res.send('worng email')
        }else{InformationDB.else_login(password).then((data)=>{
            if(data.length==0){
                res.send('wrong password ')
            }else{
                let token = jwt.sign({"costomer":data},"zeba")
                    res.cookie(token)
                    res.send('loing successful')
                }
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
});

// Features:-
// 1
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

// 1.2
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

// 1.3
Information.get('/getdata', (req,res) => {
    InformationDB.getdata()
    .then((Data) => {
        res.send(Data)
    }).catch((err) => {
        res.send(err)
    })
});

// 1.4
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

// 2
Information.post('/insert/:id',(req,res) => {
    var id = req.params.id
    InformationDB.get_data(id)
    .then((Response) => {
    var agent_status = Response[0]['agent_status']
    var admin_status = Response[0]['admin_status']
    var customer = Response[0]['customer']
    if (agent_status == "Yes"){
        if (admin_status == "Yes"){
            var data = "admin and agent is Approved"
            var customer_data = customer
            console.log(customer_data,data)
        }
        else if (admin_status == "No"){
            var data = "admin no Approved"
            var customerdata = customer
            console.log(customerdata,data)
        }
    }
    else if (agent_status == "No"){
        var data = "agent Rejected"
        var customerdata = customer
        console.log(customerdata,data)
    }
    var updatae = {
        NEW : req.body.NEW,
        REJECTED : customerdata,
        APPROVED : customer_data
    }
    InformationDB.insertdata(id,updatae)
    .then(() => {
        res.send('insert')
    })
    }).catch((err) => {
        res.send(err)
    })
});

// 2.1
Information.post('/post',(req,res) => {
    var insertData = {
        Month : req.body.Month,
        Interest : req.body.Interest,
        Discount : req.body.Discount,
        Total_cost : req.body.Total_cost,
        Total_Payment : req.body.Total_Payment
    }
    InformationDB.datapost(insertData)
    .then(() => {
        res.send("insert")
    }).catch((err) => {
        res.send(err)
    })
});

// 2.2
Information.put('/up/:id',(req,res) => {
    var id = req.params.id
    var updata = {
        Total_Payment : req.body.Total_Payment
    }
    InformationDB.updata(id,updata)
    .then(() => {
        res.send("updatae")
    }).catch((err) => {
        res.send(err)
    })
});

// 4
Information.put('/get/:id',(req,res) => {
    var id = req.params.id
    InformationDB.get(id)
    .then((Response) => {
    var agent_status = Response[0]['agent_status']
    var customer = Response[0]['customer']
    var agent = Response[0]['agent']
    var admin = Response[0]['admin']
    if (agent_status == "No"){
        var APPROVED_DATA = {
            customer : customer,
            agent : agent,
            agent_status : req.body.agent_status,
            admin : admin,
            admin_status : req.body.admin_status
        }
        InformationDB.insert(id,APPROVED_DATA)
        .then(() => {
            res.send('update')
        }).catch((err) => {
            res.send(err)
        })
    }
    else{
        res.send('agent_status APPROVED hai')
    }
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = Information