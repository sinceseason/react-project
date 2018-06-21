import React from 'react';
import { observer } from 'mobx-react';
import { Collapse, Icon } from 'antd';
import { I18n } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { SliderMenu } from '../slider_all';
import { Login } from '../../login/login';
import '../slider_all.scss';

const Panel = Collapse.Panel;

const panelStyle = {
    border: 0,
    color: '#fff',
};

const login = new Login();

@observer
export class SliderApprove extends React.Component {
    constructor(props) {
        debugger
        super(props);
        this.state = {
            menu: login.menuList,
        }
    }

    componentWillMount() {
        // const approveMenu = sliderMenu.get('approve');
        // this.setState({
        //     menu: approveMenu,
        // })
    }

    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="slider-container">
                <div className="inner-slider">
                    {/* <Collapse accordion bordered={false} > */}
                        <SliderMenu 
                            t={t}
                            menu={this.state.menu} />
                    {/* </Collapse> */}
                </div>
            </div>
            )}
            </I18n>
        )
    }
}