import React from 'react';
import { Icon, notification } from 'antd';

function $BaseErrorNotification(msg) {
    notification.error({
        message: msg,
        description: '出错啦',
        icon: <Icon type="frown" style={{ color: '#108ee9' }} />,
        duration: 2,
    });
};

function $customErrorNotification(msg, desc) {
    notification.error({
        message: msg,
        description: desc,
        icon: <Icon type="frown" style={{ color: '#108ee9' }} />,
        duration: 2,
    });
}

export default {
    $BaseErrorNotification,
    $customErrorNotification
}
