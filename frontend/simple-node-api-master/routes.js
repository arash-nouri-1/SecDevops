const express = require('express');
const todos = require("./todos");

const router = express.Router();

router.get("/todos", function(req, res) {
  res.json(todos);
});

router.post("/todos", function(req, res) {
  todos.push(req.body);
  res.json(todos);
});

module.exports = router;
