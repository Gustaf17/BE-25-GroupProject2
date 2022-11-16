const express = require("express");
const router = express.Router();

const {
  getAllAdmin,
  getAdminByID,
  addAdmin,
  deleteAdminByID,
  updateAdminByID,
  login,
  
} = require("../controllers/admin.controller");

router.get("/", getAllAdmin);
router.get("/:id", getAdminByID);
router.post("/register", addAdmin);
router.delete("/:id", deleteAdminByID);
router.put("/update/:id", updateAdminByID);
router.post("/login", login);

module.exports = router;
