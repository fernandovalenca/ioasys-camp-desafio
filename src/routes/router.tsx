import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home, Login } from '../pages';

export const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/home' component={Home} />
      </Switch>
    </BrowserRouter>
  )
}