import React, { Fragment, useState } from 'react';
import ListTasks from './ListTasks';

const FormSearch = ({ tasks }) => {
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

            <div className="row">
                <ListTasks filterTasks={filterTasks} />
            </div>
        </Fragment>
    )
}

export default FormSearch;