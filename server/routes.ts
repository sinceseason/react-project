import * as Router from 'koa-router';
import UserController from './controller/UserController';

const Routes = new Router();
Routes
    .get('/user', UserController.all);

export default Routes;