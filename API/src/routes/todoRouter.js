import express from 'express';

import TodoController from '../controllers/todoController.js';

const router = express.Router();

router.get('/todos', TodoController.getAlls);
router.get('/todos/:id', TodoController.getById);
router.post('/todos', TodoController.create);
router.put('/todos/:id', TodoController.update);
router.patch('/todos/:id', TodoController.updateState);
router.delete('/todos/:id', TodoController.delete);

export default router;