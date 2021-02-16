const express = require('express');

const router = express.Router();

const TodoController = require('../app/controllers/TodoController');

router.post('/create', express.json({ extended: true }), TodoController.create);

router.get('/buscar/:id', TodoController.buscar);
router.get('/all', TodoController.all);

router.delete('/deletar/:id', TodoController.deletar);

module.exports = router;