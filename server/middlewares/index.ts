import * as Koa from 'koa';
import returnData from './response';
import Routes from '../routes';

const Middlewares = (app: Koa) => {
    app.use(returnData);

    app.use(Routes.routes());
    app.use(Routes.allowedMethods());
}

export default Middlewares;