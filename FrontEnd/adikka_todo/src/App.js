import React, { Fragment } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './components/layout/Main';
import FormEditTask from './components/tasks/FormEditTask';
import TaskState from './context/tasks/taskState';

function App() {
  return (
    <Fragment>
      <TaskState>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/detail/:id' component={FormEditTask} />
          </Switch>
        </Router>
      </TaskState>
    </Fragment>
  );
}

export default App;
