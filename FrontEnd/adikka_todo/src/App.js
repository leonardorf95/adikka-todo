import React, { Fragment } from 'react';

import Main from './components/layout/Main';
import TaskState from './context/tasks/taskState';

function App() {
  return (
    <Fragment>
      <TaskState>
        <Main />
      </TaskState>
    </Fragment>
  );
}

export default App;
