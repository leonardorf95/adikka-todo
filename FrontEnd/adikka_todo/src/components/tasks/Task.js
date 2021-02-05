import React, { Fragment, useContext } from 'react';

import TaskContext from '../../context/tasks/taskContext';
import FormTaks from './FormTaks';

const Task = ({ task }) => {
    const taskContext = useContext(TaskContext);
    const {changeStateTask, deleteTask } = taskContext;

    const deleteThisTask = id => {
        deleteTask(id);
    }

    const changeThisState = task => {
        if (!task.completed)
            task.completed = true;
        else
            task.completed = false;

        changeStateTask(task);
    }

    const selectedThisTask = id => {
        <FormTaks id={id} />
    }

    return (
        <Fragment>
            <tr>
                <th scope="row">{task === undefined ? 0 : task.id}</th>
                <td>{task === undefined ? 'Title' : task.title}</td>
                <td>{task === undefined ? '2021-02-01' : task.createdAt}</td>
                <td>{task === undefined ? 'name' : task.name}</td>
                <td>
                    {task === undefined ? null :
                        task.completed
                            ? (<button className='btn btn-success' value={task.completed} onClick={() => changeThisState(task)}><i className="far fa-check-circle"></i></button>)
                            : (<button className='btn btn-light' value={task.completed} onClick={() => changeThisState(task)}><i className="far fa-check-circle"></i></button>)
                    }
                </td>
                <td>
                    <button className='btn btn-warning btn-small' data-bs-toggle="modal" data-bs-target="#showForm"
                        onClick={() => selectedThisTask(task.id)}
                    >
                        <i className="far fa-edit"></i>
                    </button>
                            &nbsp; &nbsp;
                    <button className='btn btn-danger btn-small'
                        onClick={() => deleteThisTask(task.id)}
                    >
                        <i className="far fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </Fragment>
    )
}

export default Task;