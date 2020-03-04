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

// 2.2
let putdata = (id,updata) => {
    return knex('Information').update(updata).where('id',id)
};

// Features:-
// 1
let getdata = () => {
    return knex('Information').select('*')
};

let get = () => {
    return knex('Information').select('*')
};

module.exports = {postData,putData,postdata,putdata,getdata,get}
