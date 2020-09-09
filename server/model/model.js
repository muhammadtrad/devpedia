//model
const {Pool} = require("pg");
const process = require("dotenv");


const pool = new Pool({
  user: process.env.USERDB,
  host: process.env.HOST,
  password: process.env.DBPW
});

class Model{
  constructor(){
    this.table = null;
    this.pool = pool;
    this.pool.on("error", (err) => {
      console.log(" ERROR CONNECTING TO DB ", err);
    });
  }

  select(sqlquery){
    return this.pool.query(sqlquery);
  }
}


module.exports = new Model();


