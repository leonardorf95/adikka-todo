import sequelize from 'sequelize';
import todoModel from '../models/todoModel.js';

const TodoController = {
    getAlls: async (req, res) => {
        try {
            const items = await todoModel.findAll({
                order: [
                    ['createdAt', 'DESC']
                ]
            });

            if (!items) {
                return res.status(400).json({
                    message: 'No se pudo cargar la información solicitada.',
                    items: null
                });
            }

            return res.status(200).json({
                message: 'Ok',
                items
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'Se ha producido un error en su solicitud.'
            });
        }
    },
    getById: async (req, res) => {
        try {
            const item = await todoModel.findAll({
                where: {
                    id: req.params.id
                }
            });

            if (!item) {
                return res.status(404).json({
                    message: 'No se encontro la información solicitada de esta tarea.',
                    item: null
                });
            }

            return res.status(200).json({
                message: 'Ok',
                item
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'Se ha producido un error en su petición de obtención de información.'
            });
        }
    },
    create: async (req, res) => {
        try {
            const todo = req.body;

            await todoModel.create(todo);

            return res.status(200).json({
                message: 'Ok'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'Se ha producido un error en su petición de creación de tarea.'
            });
        }
    },
    update: async (req, res) => {
        try {
            const item = await todoModel.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!item) {
                return res.status(404).json({
                    message: 'No se encontro la información solicitada de esta tarea.',
                    item: null
                });
            }

            const {
                name,
                title,
                completed
            } = req.body;

            item.name = name;
            item.title = title;
            item.completed = completed;

            await item.save();

            return res.status(200).json({
                message: 'Ok'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'Se ha producido un error en su petición de actualización de la tarea.'
            });
        }
    },
    updateState: async (req, res) => {
        try {
            const item = await todoModel.findOne({
                where: {
                    id: req.params.id
                }
            });

            if (!item) {
                return res.status(404).json({
                    message: 'No se encontro la información solicitada de esta tarea.',
                    item: null
                });
            }

            item.completed = req.body.completed;

            await item.save();

            return res.status(200).json({
                message: 'Ok'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'Se ha producido un error en su petición de actualización de estado.'
            });
        }
    },
    delete: async (req, res) => {
        try {
            await todoModel.destroy({
                where: {
                    id: req.params.id
                }
            });

            return res.status(200).json({
                message: 'Ok'
            });
        } catch (error) {
            console.log(error);

            return res.status(500).json({
                message: 'Se ha producido un error en su petición de eliminado.'
            });
        }
    }
};

export default TodoController;