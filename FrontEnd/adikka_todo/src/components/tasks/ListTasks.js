import React, { Fragment } from 'react';

import Task from './Task';

const ListTasks = ({ tasks }) => {
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
                        tasks.length === 0
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