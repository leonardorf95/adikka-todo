import React, { Fragment, useContext, useEffect } from 'react';

import TaskContext from '../../context/tasks/taskContext';
import Task from './Task';

const ListTasks = () => {
    const taskContext = useContext(TaskContext);
    const { tasks, getTasks } = taskContext;

    useEffect(() => {
        getTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Fragment>
            <table className='table table-responsive text-center'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Created At</th>
                        <th scope="col">Name</th>
                        <th scope="col">Completed</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.length === undefined
                            ? (<tr>No hay Tasks</tr>)
                            : tasks.map(task => (
                                <Task
                                    key={task.id}
                                    task={task} />
                            ))
                    }
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTasks;