const mysql = require("mysql2");
require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;

const connection = mysql.createConnection(DATABASE_URL);

module.exports = connection;
