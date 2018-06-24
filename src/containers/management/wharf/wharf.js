import React from 'react';
import { I18n } from 'react-i18next';
import { Row, Col, Button, Table } from 'antd';
import Http from '../../../http/http';
import * as CONSTANT from '../../../const/constant';

const columns = [{
    title: '序号',
    dataIndex: 'id',
    // key: 'id'
}, {
    title: '码头名称',
    dataIndex: 'wharfName',
    // key: 'wharfName'
},{
    title: '操作',
    // key: 'action'
}];

export class Wharf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wharfList: [],
        }
    }

    componentWillMount() {
        Http._Get('wharf')
            .then(data => {
                let result = data.data;
                if (result.status === CONSTANT.RESULT.SUCCESS) {
                    let list = result.data;
                    this.setState({
                        wharfList: list
                    })
                }
            })
    }

    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="main-container">
                <Row className="bar">
                    <Button type="primary">{t('button.save')}</Button>
                </Row>
                <div className="context">
                    <Table rowKey="id" columns={columns} dataSource={this.state.wharfList}></Table>
                </div>
            </div>
            )}
            </I18n>
        )
    }
}