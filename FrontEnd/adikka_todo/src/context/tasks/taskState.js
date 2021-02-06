import React, { useReducer } from 'react';

// Importacion de los types
import { CURRENT_TASK, DELETE_TASK, GET_TASK, PATCH_TASK, UPDATE_TASK, CREATE_TASK } from '../../types/index';

// Importacion del context del componente
import TaskContext from './taskContext';

// Importacion del reducer del componente
import TaksReducer from './taskReducer';

// Importacion de la configuracion de los axios
import ClientAxios from '../../config/axiosConfig';

/*
* Definicion del STATE global del componente
*/
const TaskState = props => {
    // Definicion del initial state
    const initialState = {
        tasks: [],
        selectedTask: null
    }

    // Implementacion del reducer y con el estado inicial
    const [state, dispatch] = useReducer(TaksReducer, initialState);

    // Funcion que obtiene todos los todos
    const getTasks = async () => {
        try {
            const response = await ClientAxios.get('/api/todos');

            dispatch({
                type: GET_TASK,
                payload: response.data.items
            });
        } catch (error) {
            console.log(error);
        }
    }

    // Funcion que obtiene un todo por id
    const getTask = async id => {
        try {
            const response = await ClientAxios.get(`/api/todos/${id}`);

            dispatch({
                type: CURRENT_TASK,
                payload: response.data.item
            });

            return response.data.item;
        } catch (error) {
            console.log(error);
        }
    }

    // Funcion para crear nuevos todos
    const createTask = async task => {
        await ClientAxios.post(`/api/todos`, task);

        dispatch({
            type: CREATE_TASK,
            payload: task
        })
    }

    // Funcion para actualizar el todo completo
    const updateTask = async task => {
        await ClientAxios.put(`/api/todos/${task.id}`, task);

        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    }

    // Funcion para actualizar el completed del todo
    const changeStateTask = async task => {
        await ClientAxios.patch(`/api/todos/${task.id}`, task);

        dispatch({
            type: PATCH_TASK,
            payload: task
        });
    }

    // Funcion para eliminar los todos
    const deleteTask = async id => {
        await ClientAxios.delete(`/api/todos/${id}`);

        dispatch({
            type: DELETE_TASK,
            payload: id
        });
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                selectedTask: state.selectedTask,
                getTasks,
                getTask,
                createTask,
                updateTask,
                changeStateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;