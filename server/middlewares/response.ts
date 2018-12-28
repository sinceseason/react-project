import { Context } from '../core/index';
import { ResponseData } from '../base/ResponseData';

const responseJson = (ctx: Context) => (res: any) => {
    let resData = new ResponseData();
    const type = typeof res;
    if (type === 'undefined') {
        resData = {data: undefined, msg: 'return data is undefined', status: 'SUCCESS'}
    } else if (type === 'object' && res !== null) {
        // data is the key property
        if (res.hasOwnProperty('data')) {
            Object.assign(resData, res)
        } else {
            resData.data = res;
        }
        resData.msg = res.message || '';
        resData.errors = res.errors;
    } else {
        resData.msg = `data's type is ${typeof res}`;
        if (type === 'function') {
            resData.data = res();
        } else {
            resData.data = res;
        }
    }
    resData.status = res.status || 'SUCCESS';
    return ctx.body = resData;
}

const returnData = async (ctx: Context, next: () => Promise<any>) => {
    if (!ctx.Result){
        ctx.Result = responseJson(ctx);
    }
    await next();
}

export default returnData;