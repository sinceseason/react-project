import React from 'react';
import { Route, BrowserRouter, Switch, Link, Redirect } from 'react-router-dom';

import { Login } from '../containers/login/login';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect path="*" to="/login" />
        </Switch>
    </BrowserRouter>
)

// 下面的写法会报错 './router/router' does not contain an export named 'MyRouter'.
// export default Routes;

