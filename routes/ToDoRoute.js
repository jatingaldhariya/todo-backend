const { Router } = require("express");
const {
  getTodo,
  saveTodo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoController");
const router = Router();

router.get("/", getTodo);
router.post("/create", saveTodo);
router.post("/update", updateToDo);
router.post("/delete", deleteToDo);

module.exports = router;
