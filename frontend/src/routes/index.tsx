import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FormPage from '../pages/FormPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={FormPage} />
  </Switch>
);

export default Routes;
