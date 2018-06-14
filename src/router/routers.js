import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { Login } from '../containers/login/login';
import { Header } from '../containers/header/header';
import { SliderSa } from '../containers/slider/slider-sa/slider';
import { SliderApprove } from '../containers/slider/slider-approve/slider';
import { SliderApply } from '../containers/slider/slider-apply/slider';
import { Wharf } from '../containers/management/wharf/wharf';

const SliderSaParent = ({ match }) => (
    <div className="custom-container">
        <Route path={`${match.url}`} component={ SliderSa } />
        <Route path={`${match.url}/wharf`} component={ Wharf } />
    </div>
);

const Nav = ({ match }) => (
    <div>
        <Route path={`${match.url}`} component={ Header } />
        <Route path={`${match.url}/sliderSa`} component={ SliderSaParent } />
        <Route path={`${match.url}/sliderApprove`} component={ SliderApprove } />
        <Route path={`${match.url}/sliderApply`} component={ SliderApply } />
    </div>
);

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={ Login } />
            <Route path="/nav" component={ Nav } />
            <Redirect path="*" to="/login" />
        </Switch>
    </BrowserRouter>
)

// 下面的写法会报错 './router/router' does not contain an export named 'MyRouter'.
// export default Routes;
