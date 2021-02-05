import React, { useReducer } from 'react';

import { CURRENT_TASK, DELETE_TASK, GET_TASK, PATCH_TASK, UPDATE_TASK, CREATE_TASK } from '../../types/index';

import TaskContext from './taskContext';
import TaksReducer from './taskReducer';

import ClientAxios from '../../config/axiosConfig';

const TaskState = props => {
    const initialState = {
        tasks: [],
        selectedTask: null
    }

    const [state, dispatch] = useReducer(TaksReducer, initialState);

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

    const createTask = async task => {
        await ClientAxios.post(`/api/todos`, task);

        dispatch({
            type: CREATE_TASK,
            payload: task
        })
    }

    const updateTask = async task => {
        await ClientAxios.put(`/api/todos/${task.id}`, task);

        dispatch({
            type: UPDATE_TASK,
            payload: task
        });
    }

    const changeStateTask = async task => {
        await ClientAxios.patch(`/api/todos/${task.id}`, task);

        dispatch({
            type: PATCH_TASK,
            payload: task
        });
    }

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