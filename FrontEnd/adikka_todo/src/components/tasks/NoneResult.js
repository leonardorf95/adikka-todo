import React, { Fragment } from 'react';

/* 
 Componente NoneResult principal
*/
const NoneResult = () => {
    return (
        <Fragment>
            <div className="row">
                <table className='table table-responsive'>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Title</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Name</th>
                            <th scope="col">Completed</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>There is not TODOS</tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default NoneResult;