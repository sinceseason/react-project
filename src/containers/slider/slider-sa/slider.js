import React from 'react';
import { I18n } from 'react-i18next';
import { Icon, Collapse } from 'antd';
import './slider.scss';

const Panel = Collapse.Panel;

const panelStyle = {
    border: 0,
    color: '#fff',
};

export class SliderSa extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount () {
        
    // }

    changeRouter = (val) => {
        switch (val) {
            case 1:
                this.props.history.push('/nav/sliderSa/wharf');
                console.log(val);
                break;
        
            default:
                break;
        }
    }

    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="slider-container">
                <div className="inner-slider">
                    <Collapse accordion bordered={false}>
                        <Panel
                            header={<span>{t('slider.system_manage')} <Icon type="setting" style={{marginLeft: '10px'}}/></span>}
                            key="1" 
                            style={ panelStyle }>
                            <div className="slider-content"
                                onClick={() => this.changeRouter(1)}>{t('slider.wharf_manage')}</div>
                            <div className="slider-content">{t('slider.internal_account_manage')}</div>
                            <div className="slider-content">{t('slider.external_account_manage')}</div>
                        </Panel>
                    </Collapse>
                </div>
            </div>
            )}
            
            </I18n>
        )
    }
}