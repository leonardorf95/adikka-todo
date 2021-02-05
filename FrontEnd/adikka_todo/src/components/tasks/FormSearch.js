import React, { Fragment, useState } from 'react';

const FormSearch = ({ tasks }) => {
    const [query, setQuery] = useState('');

    const filterTasks = tasks.filter(task => {
        console.log(query)
        return task.title.toLowerCase().includes(query);
    });

    return (
        <Fragment>
            <div className='d-flex'>
                <input type="text"
                    className='form-control me-2'
                    placeholder='Search Task'
                    name=""
                    id=""
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                    }}
                />
            </div>
        </Fragment>
    )
}

export default FormSearch;