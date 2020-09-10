const express = require("express");
const router = express.Router();

const ctrl = require("../controllers/controllers");

router.get("/ct", ctrl.getTechCategory);
router.get("/", ctrl.getTech);

router.get("/hardcode", ctrl.getReactHardCodedResources )

module.exports = router;