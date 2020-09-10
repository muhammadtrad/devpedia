const express = require("express");
const app = express();
const router = require("./routes/routes")
//const db = express.Router();
const ctrl = require("./controllers/controllers");
const path = require("path");
const PORT = 3434;

const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

/* type Query{
  me: User
}

type User{
  id: ID

} */

/* const schema = buildSchema(`
  type Query{
    username: String,
    password: String
  }
`)

app.use("/graphql", graphqlHTTP({ 
  schema: schema, 
  rootValue: root,
  graphiql: true
}))
 */


app.use("/db", router);

app.use("/", (req, res, next) => {
  res.status(200);
})

app.listen(PORT, () => {
  console.log(`APP LISTENING ON ${PORT}`);
})
