import React, { Fragment, useContext, useEffect } from 'react';

import TaskContext from '../../context/tasks/taskContext';

import Header from './Header';
import Tasks from '../tasks/Tasks';

const Main = () => {
    const taskContext = useContext(TaskContext);
    const { tasks, getTasks } = taskContext;

    useEffect(() => {
        if(tasks.length === 0)
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