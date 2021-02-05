import React, { Fragment, useContext, useState } from 'react';

import TaskContext from '../../context/tasks/taskContext';

const FormTaks = ({id = 0}) => {
    const taskContext = useContext(TaskContext);
    const {  getTask, getTasks, createTask } = taskContext;

    const [task, saveTask] = useState({
        id: 0,
        title: '',
        name: '',
        completed: false
    });

    const { title, name } = task;

    if(id !== 0) {
        getTask(id)
    }

    const onChangeTasks = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitTask = e => {
        e.preventDefault();

        if (title === '' || name === '') {
            // Mensaje de alerta
            return;
        }

        createTask(task);

        saveTask({
            id: 0,
            title: '',
            name: ''
        });

        getTasks();
    }

    return (
        <Fragment>
            <form className='needs-validation' noValidate
                onSubmit={onSubmitTask}
            >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title (Required)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name='title'
                        placeholder=""
                        value={title}
                        onChange={onChangeTasks}
                        required />
                    <div className="invalid-feedback">
                        Please provide a Title
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <textarea
                        className="form-control"
                        id="name"
                        name='name'
                        rows="3"
                        value={name}
                        onChange={onChangeTasks}
                        required>

                    </textarea>
                    <div className="invalid-feedback">
                        Please provide a name
                    </div>
                </div>

                <div className="col-12">
                    <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Cancelar</button>
                        &nbsp; &nbsp;
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value='Save'
                    />
                </div>
            </form>
        </Fragment>
    )
}

export default FormTaks;