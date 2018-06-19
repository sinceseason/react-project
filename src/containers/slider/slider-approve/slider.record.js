import React from 'react';
import { Collapse, Icon } from 'antd';
import { I18n } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import '../slider_all.scss';

const Panel = Collapse.Panel;

const panelStyle = {
    border: 0,
    color: '#fff',
};

// PROBLEM: NavLink 适用于 slider-sa 特定条件 此处无法使用

export class SliderApprove extends React.Component {
    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="slider-container">
                <div className="inner-slider">
                    <NavLink to={`/nav/sliderApprove/approveApply`} className="slider-content slider-content-grey" activeClassName="active">
                        {t('slider.approvel_apply')}
                    </NavLink>
                    <NavLink to={`/nav/sliderApprove/approveQuery`} className="slider-content slider-content-grey" activeClassName="active">
                        {t('slider.aggregate_query')}
                    </NavLink>
                    {/* <NavLink className="slider-content slider-content-grey" 
                        to={`/nav/sliderApprove/approveExternalUser`}
                        activeClassName="active" >
                        {t('slider.user_manage')} */}
                        <Collapse className="slider-approve" bordered={false} >
                            <Panel
                                header={<span>{t('slider.user_manage')} <Icon type="setting" style={{marginLeft: '20px', fontSize: '18px'}}/></span>}
                                key="1" 
                                style={ panelStyle }>
                                {/* <div className="slider-content">
                                    {t('slider.external_manage')}
                                </div> */}
                                <NavLink to={`/nav/sliderApprove/approveExternalUser`} 
                                    className="slider-content slider-content-grey" 
                                    activeClassName="active">
                                    {t('slider.external_manage')}
                                </NavLink>
                            </Panel>
                        </Collapse>
                    {/* </NavLink> */}
                    
                </div>
            </div>
            )}
            </I18n>
        )
    }
}