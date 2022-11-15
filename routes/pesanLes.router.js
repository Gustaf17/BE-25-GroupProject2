const express = require("express");
const router = express.Router();

const {
  getAllPesanLes,
  getPesanLesByID,
  addPesanLes,
  deletePesanLesByID,
  updatePesanLesByID,
  deleteAllPesanLes,
} = require("../controllers/pesanLes.controller");

router.get("/", getAllPesanLes);
router.get("/:id", getPesanLesByID);
router.post("/", addPesanLes);
router.delete("/:id", deletePesanLesByID);
router.put("/:id", updatePesanLesByID);
router.delete("/all/:id",deleteAllPesanLes)

module.exports = router;
