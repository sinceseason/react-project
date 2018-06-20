import React from 'react';
import { I18n } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// import { classNames } from 'classnames'; NOTE: 这样写报错 classNames is not a function 
import { Icon, Collapse } from 'antd';
import '../slider_all.scss';

const Panel = Collapse.Panel;

const panelStyle = {
    border: 0,
    color: '#fff',
};

const sliderContentList = [
    'wharf_manage', 
    'internal_manage',
    'external_manage'
];

function SliderContentDom(props) {
    const sliderList = props.sliderList;
    const listItems = sliderList.map(item =>
        <div className={props.activeSlider} key={item}>
            <div className="slider-content" onClick={item => props.changeRouter(item)}>{props.t(`slider.${item}`)}</div>
        </div>
    )
    return (<div>{listItems}</div>);
};

export class SliderSa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        }
    }
    changeRouter = (val) => {
        switch (val) {
            case sliderContentList[0]:
                this.props.history.push('/nav/sliderSa/wharf');
                break;
            case sliderContentList[1]:
                this.props.history.push('/nav/sliderSa/internal');
                break;
            case sliderContentList[2]:
                this.props.history.push('/nav/sliderSa/external');
                break;
        }
    }
    render() {
        let activeSlider = classNames('slider-content-container', {
            'active': this.state.active,
        });

        return (
            <I18n ns="translate">
            {(t) => (
                <SliderContentDom 
                    sliderList={sliderContentList} 
                    activeSlider={activeSlider} 
                    t={t} 
                    changeRouter={this.changeRouter} />
            )}
            </I18n>
        )
    }
}