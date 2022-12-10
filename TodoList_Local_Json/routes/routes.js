const express = require("express");
const router = express.Router();
const fs = require("fs").promises;
const path = require("path");

const localJson = path.join(__dirname, "TodoList.json");

async function allItems() {
  let getTodoList = [];
  const readTodoList = await fs.readFile(localJson, "utf8");
  getTodoList = await JSON.parse(readTodoList);
  return getTodoList;
}

async function addTodoList(newData) {
  let getTodoList = [];
  const readTodoList = await fs.readFile(localJson, "utf8");
  getTodoList = await JSON.parse(readTodoList);
  getTodoList.push(newData);
  await fs.writeFile(localJson, JSON.stringify(getTodoList, null, 2));
  return getTodoList;
}

//GET request
router.get("/", (req, res) => {
  allItems()
    .then((data) => res.send(data))
    .catch((err) => res.send(err.message));
});

//POST request
router.post("/add", (req, res) => {
  console.log(req.body.name);
  addTodoList(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.send(err.message));
});

module.exports = router;
