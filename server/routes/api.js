const express = require("express");
const listController = require("../controllers/listController");

const router = express.Router();

router.get("/", listController.getList, (req, res) => res.status(200).json(res.locals));

router.post("/add", listController.addItem, (req, res) => res.status(200).json(res.locals));
router.post("/remove", listController.removeItem, (req, res) => res.status(200).json(res.locals));

module.exports = router;
