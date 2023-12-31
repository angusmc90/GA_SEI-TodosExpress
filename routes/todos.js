var express = require('express');
var router = express.Router();

// Require the contorller that exports To-Do CRUD functions
var todosCtrl = require('../controllers/todos');

// All actual paths start with "/todos"

// GET /todos
router.get('/', todosCtrl.index)

module.exports = router;
