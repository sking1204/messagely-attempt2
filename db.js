/** Database connection for messagely. */


// const { Client } = require("pg");
// const { DB_URI } = require("./config");

// const client = new Client(DB_URI);

// client.connect();


// module.exports = client;

const { Client } = require("pg");
const {DB_URI} = require("./config")
const client = new Client({
  host: "/var/run/postgresql/",
  database: "messagely",
});
client.connect();
module.exports = client;
