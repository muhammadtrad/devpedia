//model
const {Pool} = require("pg");
require("dotenv").config();


const pool = new Pool({
  user: process.env.USERDB,
  host: process.env.HOST,
  password: process.env.DBPW
});

class Model{
  constructor(){
    this.table = null;
    this.pool = pool;
    this.pool.on("error", (err, client) => {
      console.error(` ERROR CONNECTING TO DB ${err}` );
      process.exit(-1);
    });
  }

  select(sqlquery){
    console.log(`SQL QUERY ${sqlquery}`);
    return this.pool.query(sqlquery);
  }

}


module.exports = new Model();


