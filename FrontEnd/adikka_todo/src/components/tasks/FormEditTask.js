import React, { Fragment, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';

// Importación del context de estados
import TaskContext from '../../context/tasks/taskContext';

// Importación de Subcomponentes
import Header from '../layout/Header';

/* 
 Componente FormEditTask principal
*/
const FormEditTask = (props) => {
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

    // Obtención del id proveniente de la url
    const { id } = props.match.params;

    // Creación del objecto context para su implementación
    const taskContext = useContext(TaskContext);

    // Implementación de props provenientes del context
    const { getTask, updateTask, deleteTask } = taskContext;

    // Implementación del state del componente para la manipulacion de la información
    const [taskUpdate, saveTask] = useState(null);

    // Implementación de useEffet para la detección del cambio del objecto
    useEffect(() => {
        getInformation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Funcion para obtener la información basada en un solo item
    const getInformation = async () => {
        const information = await getTask(id);

        saveTask(information[0]);
    }

    // Funcion para la manipulacion de los inputs
    const onChangeTasks = e => {
        e.preventDefault();

        saveTask({
            ...taskUpdate,
            [e.target.name]: e.target.value
        });
    }

    // Funcion para eliminar un item
    const deleteThisTask = id => {
        deleteTask(id);

        window.location.href = '/';
    }

    // Funcion para enviar la informacion al props de actualizacion en el state (en base de datos)
    const onSubmitTask = e => {
        e.preventDefault();

        if (taskUpdate.title === '' || taskUpdate.name === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algún campo se encuentra vacio'
            });
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

                    <div className="col-md-12">
                        <button className='btn btn-secondary btn-small'
                            onClick={() => deleteThisTask(id)}
                        >
                            <i className="far fa-trash-alt"></i>  &nbsp; 
                            Delete
                        </button>
                            &nbsp; &nbsp;
                        <button type='submit' className="btn btn-primary">
                            <i className="far fa-edit"></i>  &nbsp;
                                Edit
                            </button>
                    </div>
                </form>
            </main>
        </Fragment>
    )
}

export default FormEditTask;