const express = require("express");
const router = express.Router();

const {
  getAllItems,
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks");

router.route("/").get(getAllItems).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
