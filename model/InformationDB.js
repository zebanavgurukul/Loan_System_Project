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

// Features:-
// 2
let getdata = () => {
    return knex('Information').select('*')
};

module.exports = {postData,putData,postdata,putdata,getdata}
