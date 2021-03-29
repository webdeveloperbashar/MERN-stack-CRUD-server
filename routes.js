const router = require("express").Router();
const {
  createSalary,
  deleteSalary,
  getAllSalary
} = require("./controller");

router.post("/", createSalary);
router.get("/", getAllSalary);
router.delete("/:id", deleteSalary);

module.exports = router;