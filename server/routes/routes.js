const express = require("express");
const router = express.Router();

const createResourcesCtrl = require("../controllers/userController");

router.get("/captureResources", 
  (req, res, next) => {
    console.log(" request to create resources table heard");  
    next();
  }, 
  createResourcesCtrl.getReactHardCodedResources
)


module.exports = router;