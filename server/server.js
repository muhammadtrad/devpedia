const express = require("express");
const app = express();
const path = require("path");
const PORT = 3434



app.listen(PORT, () => {
  console.log(`APP LISTENING ON ${PORT}`);
})
