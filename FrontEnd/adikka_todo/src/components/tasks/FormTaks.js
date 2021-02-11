import React, { Fragment, useContext, useState } from 'react';
import Swal from 'sweetalert2';

// Importación del context de estados
import TaskContext from '../../context/tasks/taskContext';

/* 
 Componente FormTaks principal
*/
const FormTaks = () => {
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()

    // Creación del objecto context para su implementación
    const taskContext = useContext(TaskContext);

    // Implementación de props provenientes del context
    const { createTask } = taskContext;

    // Implementación del state del componente para la manipulacion de la información
    const [task, saveTask] = useState({
        id: 0,
        title: '',
        name: '',
        completed: false
    });

    // Destructuring del objeto state del componente para su facilidad de manipulacion
    const { title, name } = task;

    // Funcion para la manipulacion de los inputs
    const onChangeTasks = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        });
    }

    // Funcion para enviar la informacion al props de creación en el state (en base de datos)
    const onSubmitTask = e => {
        e.preventDefault();

        if (title === '' || name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algún campo se encuentra vacio'
            });
            return;
        }

        createTask(task);

        saveTask({
            id: 0,
            title: '',
            name: ''
        });

        window.location.reload()
    }

    return (
        <Fragment>
            <form className='row g-3 needs-validation' noValidate
                onSubmit={onSubmitTask}
            >
                <div className="col-md-12">
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

                <div className="col-md-12">
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

                <div className="modal-footer">
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