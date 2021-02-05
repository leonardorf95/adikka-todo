import React, { Fragment, useContext, useState, useEffect } from 'react';

import TaskContext from '../../context/tasks/taskContext';
import Header from '../layout/Header';

const FormEditTask = (props) => {
    const { id } = props.match.params;

    const taskContext = useContext(TaskContext);
    const { getTask, updateTask } = taskContext;

    const [taskUpdate, saveTask] = useState(null);

    useEffect(() => {
        getInformation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getInformation = async () => {
        const information = await getTask(id);
        console.log(information[0])
        saveTask(information[0]);
    }

    const onChangeTasks = e => {
        e.preventDefault();

        saveTask({
            ...taskUpdate,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitTask = e => {
        e.preventDefault();

        if (taskUpdate.title === '' || taskUpdate.name === '') {
            // Mensaje de alerta
            return;
        }
        
        updateTask(taskUpdate);

        props.history.push('/');
    }

    return (
        <Fragment>
            <main className='container'>
                <Header />

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
                            value={taskUpdate === null ? '' : taskUpdate.title}
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
                            value={taskUpdate === null ? '' : taskUpdate.name}
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
            </main>
        </Fragment>
    )
}

export default FormEditTask;