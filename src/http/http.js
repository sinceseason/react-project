import { BASE_URL } from '../const/constant';

class Http {
    static _Get(url, params) {
        let Url = url;
        if (params) {
            // for (const [k, v] of Object.entries(params)) {
            //     Url += k + '=' + v + '&';
            // }
            let paramsArray = [];  
            Object.keys(params).forEach(key => 
                paramsArray.push(key + '=' + encodeURI(params[key]))
            );
            if (url.search(/\?/) === -1) {  
                Url += '?' + paramsArray.join('&');
            } else {  
                Url += '&' + paramsArray.join('&');
            }  
        }
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + Url, {
                method: 'GET',
            }).then((response) => {
                if (response.ok) {
                    resolve(response);
                } else {
                    reject({status: response.status})
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static _Post(url, params) {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + url, {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            }).then((response) => {
                if (response.ok) {  
                    resolve(response);
                } else {  
                    reject({status:response.status})  
                }
            }).catch((error) => {
                reject(error);
            })
        })
    }

    static _All(urls) {
        return new Promise.all(urls);
    }
}

export default Http;