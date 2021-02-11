import React, { Fragment } from 'react';

// Importación de Subcomponentes
import FormTaks from './FormTaks';
import FormSearch from './FormSearch';

/* 
 Componente Task principal
*/
const Tasks = ({ tasks }) => {
    return (
        <Fragment>
            <div className="container-fluid">
                <div className='my-3 p-3 bg-white rounded shadow-sm'>
                    <div className="row border-bottom pb-2 mb-0">
                        <div className='col-md-1'>
                            <h2>Tasks</h2>
                        </div>

                        <div className="col-md-9">
                            <FormSearch tasks={tasks} />
                        </div>

                        <div className='col-md-2'>
                            <button type="button" className="btn btn-link float-end" data-bs-toggle="modal" data-bs-target="#showForm">
                                <i className="fas fa-plus-circle"></i> &nbsp;
                                Add Task
                            </button>
                        </div>
                    </div>

                    <br />
                </div>

                <div className="modal fade" id="showForm" data-bs-keyboard="false" aria-labelledby="showFormLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="showFormLabel">New Task</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <FormTaks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Tasks;