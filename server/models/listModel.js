const { Pool, Client } = require("pg");

const PG_URI =
  "postgres://ezadhvzo:awNLLMyVqo27VCyumijt0NzRl8VJmzSZ@ruby.db.elephantsql.com:5432/ezadhvzo";
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
