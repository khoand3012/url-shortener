const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.post("/", urlController.createUrl(req, res));
router.get("/:id", urlController.redirectUrl(req, res));

module.exports = router;
