import React, { Fragment } from 'react';

const FormSearch = () => {
    return (
        <Fragment>
            <form className='d-flex'>
                <input type="text" className='form-control me-2' placeholder='Search Task' name="" id=""/>

                <button type="submit" className='btn btn-outline-success'>Search</button>
            </form>
        </Fragment>
    )
}

export default FormSearch;