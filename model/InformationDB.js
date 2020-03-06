const knex = require("../knex");

// 1
let postData = (update) => {
    return knex('user').insert(update)
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
let get_data = (id) => {
    return knex('Information').select('*').where('id',id)
};

let insertdata = (id,update) => {
    return knex('APPROVAL_TABLE').insert(update).where('id',id)
};

let datapost = (insertData) => {
    return knex('EMI_Table').insert(insertData)
};

module.exports = {postData,putData,postdata,putdata,getdata,get_data,insertdata,datapost}
