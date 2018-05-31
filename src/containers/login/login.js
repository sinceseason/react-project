import React from 'react';
import { Input, Icon } from 'antd';
import './login.scss';

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
        };
    }

    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    // onChangeUserName = (e) => {
    //     this.setState({
    //         userName: e.target.value
    //     });
    // }

    // onChangePassword = (e) => {
    //     this.setState({
    //         password: e.target.value
    //     });
    // }

    onChange = (e) => {
        this.setState({
            userName: e.target.value,
            password: e.target.value
        });
    }

    render() {
        const suffix = this.state.userName || this.state.password ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;

        return (
            <div className="container">
                <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: '#01a5c6' }} />}
                    suffix={suffix}
                    value={this.state.userName}
                    onChange={this.onChange}
                    ref={node => this.userNameInput = node}
                />
                <Input
                    placeholder="Enter your password"
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={suffix}
                    value={this.state.password}
                    onChange={this.onChange}
                    ref={node => this.userNameInput = node}
                />
            </div>
        );
    }
}