import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'mobx-react';
import stores from './stores/store';

// react-i18n-next 国际化文件
import './i18n';
import './index.css';

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
