import React from 'react';
import { Collapse, Icon } from 'antd';
import { I18n } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { sliderMenu, SliderMenu } from '../slider_all'
import '../slider_all.scss';

const Panel = Collapse.Panel;

const panelStyle = {
    border: 0,
    color: '#fff',
};

export class SliderApprove extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {},
        }
    }

    componentWillMount() {
        const approveMenu = sliderMenu.get('approve');
        this.setState({
            menu: approveMenu,
        })
    }

    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="slider-container">
                <div className="inner-slider">
                    {/* <Collapse accordion bordered={false} > */}
                        <SliderMenu 
                            menus={this.state.menu} 
                            t={t} />
                    {/* </Collapse> */}
                </div>
            </div>
            )}
            </I18n>
        )
    }
}