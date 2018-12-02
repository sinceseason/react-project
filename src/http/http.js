import axios from 'axios';
import { BASE_URL } from '../const/constant';
import Util from '../util/util';

const config = {
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' }
}
  
const instance = axios.create(config)

instance.interceptors.request.use(req => req, error =>
    // 当请求错误时
    Promise.reject(error)
)
  
instance.interceptors.response.use(resp => resp, (error) => {
    // 当返回错误时
    if (axios.isCancel(error)) {
      return Promise.reject(new Error('请求被取消'))
    }
    if ('code' in error && error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('请求超时'))
    }
    return Promise.reject(error)
})

class Http {
    static _Get(url, params) {
        return new Promise((resolve, reject) => {
            instance.get(url, {
              params: params
            }).then(data => {
                resolve(data);
            }).catch(error => {
                Http._ResponseFilter(error);
                reject(error);
            })
        })
    }

    static _Post(url, urlPara, params) {
        if (urlPara !== undefined && urlPara != null)
            url += '/' + urlPara

        return new Promise((resolve, reject) => {
            instance.post(url, params, {
                headers: {
                    'Content-Type': undefined
                },
            }).then((data) => {
                resolve(data);
            }).catch((error) => {
                Http._ResponseFilter(error);
                reject(error);
            })
        })
    }

    static _All(urls) {
        return new Promise.all(urls);
    }

    static _ResponseFilter(data) {
        data = data.response;
        switch (data.status) {
            case 200:
                return true;
            case 404:
            // TODO:
                //   router.replace({ name: '404', params: { msg: data.message } })
                return false;
            case 500:
                Util.$BaseErrorNotification(data.data.message);
                break;
            default:
                return true;
          }
    }
}

export default Http;
