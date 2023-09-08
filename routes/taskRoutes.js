const express = require('express');

const router = express.Router();

const TaskController = require('../controllers/TaskController')

// Obtener todas las tareas
router.get('/', TaskController.getAllTasks);
// Obtener todas las tareas
router.get('/:id', TaskController.getOneTaskById);
//Buscar una tarea
router.get('/search', TaskController.searchTasks);
// Agregar una tarea 
router.post('/', TaskController.addTask);
//Actualizacion una propiedad del objeto
router.patch('/:id', TaskController.updateTask);
//Eliminar una tarea
router.delete('/:id', TaskController.deleteTaskById);

module.exports = router;