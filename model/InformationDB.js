const knex = require("../knex");

// 1
let postData = (update) => {
    return knex('user').insert(update)
};

// 2
let login = (email) => {
    return knex.select('email').from('user').havingIn('user.email',email)
};

let else_login = (password) => {
    return knex.select('password').from('user').havingIn('user.password',password)
};

// 1.2
let putData = (id,updata) => {
    return knex('user').update(updata).where('id',id)
};

// 2
let postdata = (update) => {
    return knex('Information').insert(update)
};

// Features:-
// 1
let putdata = (id,updata) => {
    return knex('Information').update(updata).where('id',id)
};

// 1
let getdata = () => {
    return knex('Information').select('*')
};

// 2
let get = (id) => {
    return knex('Information').select('*').where('id',id)
};

let insert = (id,update) => {
    return knex('Information').insert(update).where('id',id)
};

// 2.1
let get_data = (id) => {
    return knex('Information').select('*').where('id',id)
};

let insertdata = (id,update) => {
    return knex('APPROVAL_TABLE').insert(update).where('id',id)
};

let datapost = (insertData) => {
    return knex('EMI_Table').insert(insertData)
};

let updata = (id,updata) => {
    return knex('EMI_Table').update(updata).where('id',id)
};

module.exports = {postData,login,else_login,putData,postdata,putdata,getdata,get,insert,get_data,insertdata,datapost,updata}
