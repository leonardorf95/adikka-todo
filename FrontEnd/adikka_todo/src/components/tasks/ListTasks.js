import React, { Fragment, useState } from 'react';

// Importación de Subcomponentes
import Task from './Task';

/* 
 Componente ListTasks principal
*/
const ListTasks = ({ tasks }) => {
    // Declaración del state para la manipulacion de busqueda
    const [query, setQuery] = useState('');

    // Función que manipulara los resultados conforme a la busqueda
    const filterTasks = tasks.filter(task => {
        return task.title.toLowerCase().includes(query);
    });

    return (
        <Fragment>
            <div className="row">
                <div className='d-flex'>
                    <input type="text"
                        className='form-control me-2'
                        placeholder='Search Task'
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            console.log(e.target.value)
                        }}
                    />
                </div>
            </div>

            {
                filterTasks.length === 0
                    ? (
                        <div className="row">
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
                                    <tr>There is not TODOS</tr>
                                </tbody>
                            </table>
                        </div>
                    )
                    : (
                        <div className="row">
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
                                        filterTasks.map(task => (
                                            <Task
                                                key={task.id}
                                                task={task} />
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
            }
        </Fragment>
    )
}

export default ListTasks;