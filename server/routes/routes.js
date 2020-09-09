const express = require("express");
const router = express.Router();

const createResourcesCtrl = require("../controllers/controllers");

router.get("/captureResources", 
  (req, res, next) => {
    console.log(" request to create resources table heard");  
    next();
  }, 
  createResourcesCtrl.getReactHardCodedResources
)



router.post("/createResources", (req, res, next) => {
  console.log(" request to consume resources heard");
  next();
})

module.exports = router;