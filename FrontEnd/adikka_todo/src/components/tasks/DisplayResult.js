import React, { Fragment } from 'react';

// Importación de Subcomponentes
import Task from './Task';

/* 
 Componente DisplayResult principal
*/
const DisplayResult = ({ filterTasks }) => {
    return (
        <Fragment>
            <div className="row">
                <table className='table table-responsive'>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Title</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterTasks.map(task => (
                                <Task
                                    key={task.id}
                                    task={task} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default DisplayResult;