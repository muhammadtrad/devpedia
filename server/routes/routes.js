const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/controllers");

router.get("/",ctrl.getDBresources)

router.get("/hardcode", ctrl.getReactHardCodedResources )

module.exports = router;