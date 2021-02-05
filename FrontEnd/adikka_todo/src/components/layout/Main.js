import React, { Fragment } from 'react';

import Header from './Header';
import Tasks from '../tasks/Tasks';

const Main = () => {
    return (
        <Fragment>
            <main className='container'>
                <Header />

                <Tasks />
            </main>
        </Fragment>
    )
}

export default Main;