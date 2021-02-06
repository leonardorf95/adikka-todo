import React, { Fragment, useContext, useEffect } from 'react';

// Importación del context de estados
import TaskContext from '../../context/tasks/taskContext';

// Importación de Subcomponentes
import Header from './Header';
import Tasks from '../tasks/Tasks';

/* 
 Componente Main principal
*/
const Main = () => {
    // Creación del objecto context para su implementación
    const taskContext = useContext(TaskContext);

    // Implementación de props provenientes del context
    const { tasks, getTasks } = taskContext;

    // Implementación de useEffet para la detección del cambio del objecto
    useEffect(() => {
        if (tasks.length === 0)
            getTasks();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <main className='container'>
                <Header />

                <Tasks
                    tasks={tasks}
                />
            </main>
        </Fragment>
    )
}

export default Main;