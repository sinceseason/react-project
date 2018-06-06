import { BASE_URL } from '../const/constant';

class Http {
    static _Get(url) {
        return new Promise((resolve, reject) => {
            fetch(BASE_URL + url, {
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
}

export default Http;