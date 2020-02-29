const knex = require("../knex");

let postData = (update) => {
    return knex('user').insert(update)
};

let postdata = (update) => {
    return knex('user').insert(update)
};

module.exports = {postData,postdata}
