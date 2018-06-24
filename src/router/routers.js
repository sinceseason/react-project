import React from 'react';
import { Route, BrowserRouter, Switch, Redirect, Router } from 'react-router-dom';
import history from './history';

import { Login } from '../containers/login/login';
import { Header } from '../containers/header/header';
import { SliderSa } from '../containers/slider/slider-sa/slider';
import { SliderApprove } from '../containers/slider/slider-approve/slider';
import { SliderApply } from '../containers/slider/slider-apply/slider';
import { Wharf } from '../containers/management/wharf/wharf';
import { External } from '../containers/management/external/external';
import { Internal } from '../containers/management/internal/internal';
import { ApproveApply } from '../containers/approve/approve-apply/approve';
import { ApproveQuery } from '../containers/approve/approve-query/approve';
import { ApproveExternalUerManage } from '../containers/approve/approve-user-manage/external-user-manage/approve';

const SliderSaParent = ({ match }) => (
    <div className="custom-container">
        <Route path={`${match.url}`} component={ SliderSa } />
        <Route path={`${match.url}/wharf`} component={ Wharf } />
        <Route path={`${match.url}/external`} component={ External } />
        <Route path={`${match.url}/internal`} component={ Internal } />
    </div>
);

const SliderApproveParent = ({ match }) => (
    <div className="custom-container">
        <Route path={`${match.url}`} component={ SliderApprove } />
        <Route path={`${match.url}/approveApply`} component={ ApproveApply } />
        <Route path={`${match.url}/approveQuery`} component={ ApproveQuery } />
        <Route path={`${match.url}/approveExternalUser`} component={ ApproveExternalUerManage } />
    </div>
);

const Nav = ({ match }) => (
    <div>
        <Route path={`${match.url}`} component={ Header } />
        <Route path={`${match.url}/sliderSa`} component={ SliderSaParent } />
        <Route path={`${match.url}/sliderApprove`} component={ SliderApproveParent } />
        <Route path={`${match.url}/sliderApply`} component={ SliderApply } />
    </div>
);

export const Routes = () => (
    /* NOTE: SliderApprove 里的子组件调用 changeRouter 时, this.props.history.push方法无法实现跳转
    * 报错信息为 Cannot read property 'history' of undefined
    * 因此改为通过自定义 history 的方法跳转
    * 但使用 BrowserRouter 时，没有 history 属性,因此改为 Router
    * PROBLEM: 为什么要使用 BrowserRouter
    */
    // <BrowserRouter>
    <Router history={history}>
        <Switch>
            <Route exact path="/login" component={ Login } />
            <Route path="/nav" component={ Nav } />
            <Route path="/404" render={() => <h1>404 Not Found</h1>} />
            <Redirect path="*" to="/login" />
        </Switch>
    </Router>
    // </BrowserRouter>
)

// NOTE: 下面的写法会报错 './router/router' does not contain an export named 'MyRouter'.
// export default Routes;
