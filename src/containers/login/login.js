import React from 'react';
import { Input, Icon, Button } from 'antd';
import { Util } from '../../util/util';
import './login.scss';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    emitEmptyUser = () => {
        this.userNameInput.focus();
        this.setState({
            userName: '',
        });
    }

    emitEmptyPass = () => {
        this.passwordInput.focus();
        this.setState({
            password: '',
        });
    }

    onChangeUser = (e) => {
        this.setState({
            userName: e.target.value,
        });
    }

    onChangePass = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    login = () => {
        if (!this.state.userName || !this.state.password) {
            Util.openNotification();
        }
    }

    // openNotification = () => {
    //     notification.error({
    //         message: 'Notification Title',
    //         description: '出错啦',
    //         icon: <Icon type="frown" style={{ color: '#108ee9' }} />,
    //         duration: 2,
    //     });
    // };

    render() {
        return (
            <div className="container">
                <div className="inner-container">
                    <Input className=""
                        placeholder="Enter your username"
                        prefix={<Icon type="user" style={{ fontSize: 16, color: '#01a5c6' }} />}
                        suffix={this.state.userName ? <Icon type="close-circle" onClick={this.emitEmptyUser} /> : null}
                        value={this.state.userName}
                        onChange={this.onChangeUser}
                        ref={node => this.userNameInput = node}
                    />
                    <Input style={{marginTop: 20}}
                        placeholder="Enter your password"
                        prefix={<Icon type="lock" style={{ fontSize:16, color: '#01a5c6' }} />}
                        suffix={this.state.password ? <Icon type="close-circle" onClick={this.emitEmptyPass} /> : null}
                        value={this.state.password}
                        onChange={this.onChangePass}
                        ref={node => this.passwordInput = node}
                    />
                    <Button 
                        className="login-button"
                        type="primary"
                        onClick={this.login}>登录</Button>
                </div>
            </div>
        );
    }
}