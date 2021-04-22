import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './components/layout/Main';
import FormEditTask from './components/layout/Tasks/FormEditTask';
import FormTask from './components/layout/Tasks/FormTask';

const App = () => {
  return (
    <Fragment>
      <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/todos/new' component={FormTask} />
            <Route exact path='/todos/detail/:id' component={FormEditTask} />
          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
