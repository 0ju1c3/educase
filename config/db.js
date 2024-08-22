const mysql = require("mysql2");

const pool = mysql
    .createPool({
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        connectionLimit: process.env.CONNECTION_LIMIT,
    })
    .promise();

module.exports = pool;
