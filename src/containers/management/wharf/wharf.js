import React from 'react';
import { I18n } from 'react-i18next';
import { Row, Col, Button, Table, Modal } from 'antd';
import Http from '../../../http/http';
import * as CONSTANT from '../../../const/constant';

export class Wharf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wharfList: [],
            visible: false,
        };
        this.columns = [{
            title: '序号',
            dataIndex: 'id',
        }, {
            title: '码头名称',
            dataIndex: 'wharfName',
        },{
            title: '操作',
        }];
    }

    componentWillMount() {
        this.queryWharf();
    }

    queryWharf() {
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

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }

    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="main-container">
                <Row className="bar">
                    {/* QUESTION: 为什么这里写为 onClick={() => this.showModal} 就无法触发 Model ? */}
                    <Button type="primary" onClick={this.showModal}>{t('button.save')}</Button>
                </Row>
                <div className="context">
                    <Table rowKey="id" columns={this.columns} dataSource={this.state.wharfList}></Table>
                </div>
                <Modal
                  title={t('button.add')}
                  wrapClassName="vertical-center-modal"
                  maskStyle={{}}
                  bodyStyle={{textAlign: 'center'}}
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
            )}
            </I18n>
        )
    }
}