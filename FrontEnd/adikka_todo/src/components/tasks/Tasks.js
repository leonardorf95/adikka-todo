import React, { Fragment, useContext, useEffect } from 'react';

import TaskContext from '../../context/tasks/taskContext';

import FormSearch from './FormSearch';
import FormTaks from './FormTaks';
import ListTasks from './ListTasks';

const Tasks = () => {
    const taskContext = useContext(TaskContext);
    const { tasks, getTasks } = taskContext;
    
    useEffect(() => {
        if(tasks.length === 0) 
            getTasks();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <div className='my-3 p-3 bg-white rounded shadow-sm'>
                <div className="row border-bottom pb-2 mb-0">
                    <div className='col-md-4'>
                        <h2>Tasks</h2>
                    </div>

                    <div className='col-md-6'>
                        <FormSearch tasks={tasks}/>
                    </div>

                    <div className='col-md-2'>
                        <button type="button" className="btn btn-light float-end" data-bs-toggle="modal" data-bs-target="#showForm">
                            <i className="fas fa-plus-circle"></i> &nbsp;
                            Add Task
                        </button>
                    </div>
                </div>

                <br />

                <div className="row">
                    <ListTasks tasks={tasks} />
                </div>
            </div>

            <div className="modal fade" id="showForm" data-bs-keyboard="false" aria-labelledby="showFormLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="showFormLabel">Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <FormTaks />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Tasks;