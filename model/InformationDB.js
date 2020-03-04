const knex = require("../knex");

let postData = (update) => {
    return knex('user').insert(update)
};

let putData = (id,updata) => {
    return knex('user').update(updata).where('id',id)
};

let postdata = (update) => {
    return knex('Information').insert(update)
};

let putdata = (id,updata) => {
    return knex('Information').update(updata).where('id',id)
};

module.exports = {postData,putData,postdata,putdata}
