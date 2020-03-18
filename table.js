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
            table.string('customer')
            table.string('agent')
            table.string('agent_status')
            table.string('admin')
            table.string('admin_status')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});

knex.schema.hasTable('user').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('user', (table) => {
            table.increments('id')
            table.string('name')
            table.string('email')
            table.string('password')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});

knex.schema.hasTable('APPROVAL_TABLE').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('APPROVAL_TABLE', (table) => {
            table.increments('id')
            table.string('NEW')
            table.string('REJECTED')
            table.string('APPROVED')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});

knex.schema.hasTable('EMI_Table').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('EMI_Table', (table) => {
            table.increments('id')
            table.string('Name')
            table.string('Month')
            table.string('Interest')
            table.string('Discount')
            table.string('Total_cost')
            table.string('Total_Payment') //(Discount + Interest)
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});

knex.schema.hasTable('login').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('login', (table) => {
            table.increments('id')
            table.string('name')
            table.string('email').unique();
            table.string('password')
        })
        .catch((err) => {
            console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
});