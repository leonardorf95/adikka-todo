import { CURRENT_TASK, DELETE_TASK, GET_TASK, PATCH_TASK, UPDATE_TASK, CREATE_TASK } from '../../types/index';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case GET_TASK:
            return {
                ...state,
                tasks: action.payload
            }
        case CURRENT_TASK:
            return {
                ...state,
                selectedTask: action.payload
            }
        case CREATE_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case PATCH_TASK:
        case UPDATE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task)
            }
        }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
}