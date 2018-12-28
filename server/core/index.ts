import {Context as KoaContext} from 'koa';

export interface Context extends KoaContext {
    // 可选属性

    // session
    session?: object;

    // request
    getParams?: {
        limit: number;
        offset: number;
    }

    // response
    Result?: Function;
    Pages?: Function;
}