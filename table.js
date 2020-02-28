var knex = require("knex")({
    client: 'mysql',
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "navgurukul",
        database: "RedCarpet"
    }
});
module.exports = knex;

knex.schema.hasTable('Information').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('Information', (table) => {
            table.increments('id')
            table.string('admin')
            table.string('agent')
            table.string('customer')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});