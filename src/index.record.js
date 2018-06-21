import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './i18n';
import './index.css';
// 引入react-intl
import { addLocaleData, IntlProvider } from 'react-intl';
/*
* NOTE:
* 引入与navigator.languages[0]所对应的语言；
* 如果没有引入对应的语言，会使用默认的“en”；
* 导致FormattedMessage的映射不会成功；
*/
import zh from 'react-intl/locale-data/zh';
import en from 'react-intl/locale-data/en';
/*
* 引入自定义的映射表；
* 通过与FormattedMessage的id值来当索引映射返回值；
*/
import zh_CN from './i18n/zh';
import en_US from './i18n/en';
/*
* messages是render()时IntlProvider组件所传的props，属性名固定：messages；
* messages返回值为映射表，比如：'react-intl/locale-data/zh'&&'./locale/zh_CN'；
*/
let messages = {};
let currentLang = 'zh-CN';  //en-US
messages["en-US"] = en_US;
messages["zh-CN"] = zh_CN;
addLocaleData([...zh, ...en]);

ReactDOM.render(
    <IntlProvider locale={ currentLang } messages={ messages[currentLang] }>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);
registerServiceWorker();
