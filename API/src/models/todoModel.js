import sequelize from 'sequelize';
import dbConfig from '../database/dbConfig.js';

const TodoModel = dbConfig.define('todo', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: sequelize.STRING(255),
    title: sequelize.STRING(255),
    completed: sequelize.BOOLEAN,
    createdAt: sequelize.DATE,
});

export default TodoModel;