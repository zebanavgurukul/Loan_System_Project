const knex = require("../knex");

let login_table = (updata) => {
    return knex('login_table').insert(updata)
}

// chashing
let postsiup = (updata) => {
    return knex('login').insert(updata)
};

// login 
let datalogin = (email) => {
    return knex.select('*').from('login_table').havingIn('login_table.email',email)
};

let logindata = (password) => {
    return knex.select('*').from('login_table').havingIn('login_table.password',password)
};

// 1
let putData = (id,updata) => {
    return knex('login_table').update(updata).where('id',id)
};

// 1.2
let login = (email) => {
    return knex.select('*').from('login_table').havingIn('login_table.email',email)
};

let else_login = (password) => {
    return knex.select('*').from('login_table').havingIn('login_table.password',password)
};

// Features:-
// 1
let postdata = (update) => {
    return knex('Information').insert(update)
};

// 1.2
let putdata = (id,updata) => {
    return knex('Information').update(updata).where('id',id)
};

// 1.3, 1.4
let getdata = () => {
    return knex('Information').select('*')
};

// 2,3
let get_data = (id) => {
    return knex('Information').select('*').where('id',id)
};

let insertdata = (id,update) => {
    return knex('APPROVAL_TABLE').insert(update).where('id',id)
};

// 2.1
let dataget = (id) => {
    return knex('APPROVAL_TABLE').select('*').where('id',id)
}

let datapost = (insertData) => {
    return knex('EMI_Table').insert(insertData)
};

// 2.2
let updata = (id,updata) => {
    return knex('EMI_Table').update(updata).where('id',id)
};

// 4
let get = (id) => {
    return knex('Information').select('*').where('id',id)
};

let insert = (id,update) => {
    return knex('Information').insert(update).where('id',id)
};

// 5
let search = (search_value) => {
    return knex('EMI_Table').select('*').where('Name','like',  '%' +search_value+ '%')
};

// 5.1
let Dataget = () => {
    return knex('EMI_Table').select('*')
}

module.exports = {postsiup,datalogin,logindata,login_table,login,else_login,putData,postdata,putdata,getdata,get,insert,get_data,insertdata,dataget,datapost,updata,search,Dataget}
