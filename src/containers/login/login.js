import React from 'react';
import { Input, Icon, Button } from 'antd';
// import { FormattedMessage } from 'react-intl';
import { I18n } from 'react-i18next';
import i18next from 'i18next';
import  Util  from '../../util/util';
import Http from '../../http/http';
import * as CONSTANT from '../../const/constant';
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
            Util.$customErrorNotification(i18next.t('error'), i18next.t('notify.userOrPassEmpty'));
            return;
        }
        let params = {
            userName: this.state.userName,
            password: this.state.password
        }
        Http._Get('login', params)
            .then(data => {
                let result = data.data;
                if (result.status === CONSTANT.RESULT.SUCCESS) {
                    let loginUser = result.data;
                    switch (loginUser.type) {
                        case 1:
                            this.props.history.push('/nav/sliderSa');
                            break;
                        case 2:
                            this.props.history.push('/nav/sliderApprove');
                            break;
                        case 3:
                            this.props.history.push('/nav/sliderApply');
                            break
                        default:
                            this.props.history.push('/404');
                            break;
                    }
                } else {
                    Util.$customErrorNotification(i18next.t('error'), result.msg);
                }
            })
    }

    render() {
        return (
            <I18n ns="translate">
                {(t) => (
                    <div className="container">
                        <div className="inner-container">
                            <Input
                                placeholder={t('inputMsg.username')}
                                prefix={<Icon type="user" style={{ fontSize: 16, color: '#01a5c6' }} />}
                                suffix={this.state.userName ? <Icon type="close-circle" onClick={this.emitEmptyUser} /> : null}
                                value={this.state.userName}
                                onChange={this.onChangeUser}
                                ref={node => this.userNameInput = node}
                            />
                            <Input
                                type='password'
                                style={{marginTop: 20}}
                                placeholder={t('inputMsg.password')}
                                prefix={<Icon type="lock" style={{ fontSize:16, color: '#01a5c6' }} />}
                                suffix={this.state.password ? <Icon type="close-circle" onClick={this.emitEmptyPass} /> : null}
                                value={this.state.password}
                                onChange={this.onChangePass}
                                ref={node => this.passwordInput = node}
                            />
                            <Button 
                                className="login-button"
                                type="primary"
                                onClick={this.login}>{t('button.login')}
                            </Button>
                        </div>
                    </div> 
                )}
            </I18n>
        );
    }
}
