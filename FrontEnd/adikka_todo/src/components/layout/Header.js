import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <div className='d-flex align-items-center p-3 my-3 rounded shadow-sm'>
                <div className='lh-1'>
                    <h1 className='h6 mb-0 text-black lh-1'>My Task Adikka</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;