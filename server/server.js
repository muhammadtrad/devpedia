const express = require("express");
const app = express();
const router = require("./routes/routes")
const model = require("./model/model")
const ctrl = require("./controllers/controllers");
const path = require("path");
const PORT = 3434;

const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");


app.use("/db", router);

app.use("/", (req, res, next) => {
  res.status(200);
})

app.listen(PORT, () => {
  console.log(`APP LISTENING ON ${PORT}`);
})
