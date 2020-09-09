const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const PORT = 3434


app.use("/", express.static(path.join(__dirname, "../client/index.html")))

router.use("/getHardCodedJSON", )

app.listen(PORT, () => {
  console.log(`APP LISTENING ON ${PORT}`);
})
