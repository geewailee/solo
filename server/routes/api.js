const express = require("express");
const listController = require("../controllers/listController");

const router = express.Router();

router.get("/", listController.getList, (req, res) => res.status(200).json(res.locals));

module.exports = router;
