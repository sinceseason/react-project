import React from 'react';
import { Icon, notification } from 'antd';

function $openNotification() {
    notification.error({
        message: 'Notification Title',
        description: '出错啦',
        icon: <Icon type="frown" style={{ color: '#108ee9' }} />,
        duration: 2,
    });
};

export default {
    $openNotification,
}