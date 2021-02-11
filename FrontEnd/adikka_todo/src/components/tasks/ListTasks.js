import React, { Fragment } from 'react';
import DisplayResult from './DisplayResult';

// Importación de Subcomponentes
import NoneResult from './NoneResult';

/* 
 Componente ListTasks principal
*/
const ListTasks = ({ filterTasks }) => {
    return (
        <Fragment>
            {
                filterTasks.length === 0
                    ? (<NoneResult />)
                    : (<DisplayResult filterTasks={filterTasks} />)
            }
        </Fragment>
    )
}

export default ListTasks;