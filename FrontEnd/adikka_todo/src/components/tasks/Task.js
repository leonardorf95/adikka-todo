import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

// Importación del context de estados
import TaskContext from '../../context/tasks/taskContext';

/* 
 Componente Task principal
*/
const Task = ({ task }) => {
    // Creación del objecto context para su implementación
    const taskContext = useContext(TaskContext);

    // Implementación de props provenientes del context
    const { changeStateTask, deleteTask } = taskContext;

    // Funcion para eliminar un item
    const deleteThisTask = id => {
        deleteTask(id);
    }

    // Funcion para eliminar un TODO
    const changeThisState = task => {
        if (!task.completed)
            task.completed = true;
        else
            task.completed = false;

        changeStateTask(task);
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
                    <Link to={`/detail/${task.id}`} className="btn btn-warning btn-small">
                        <i className="far fa-edit"></i>
                    </Link>
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