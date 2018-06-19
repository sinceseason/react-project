import React from 'react';
import { Collapse, Icon } from 'antd';

const Panel = Collapse.Panel;

const panelStyle = {
    border: 0,
    color: '#fff',
};

export const sliderMenu = new Map([
    ['approve', {
        'approve_apply': {},
        'aggregate_query': {},
        'approve_user_manage': {
            'child': [{
                'approve_external_manage': {},
                'approve_external_manage2': {},
                'approve_external_manage3': {},
            }]
        },
    }], 
    ['sa', {

    }],
    ['apply', {

    }]
])

export function SliderMenu(props) {
    let menu = props.menus;
    let menuList = [];
    for (let [k, v] of Object.entries(menu)) {
        if (!v.child) {
            menuList.push(<div key={k}>{props.t(`slider.${k}`)}</div>)
        } else {
            let child = v.child;
            for (let val of child.values()) {
                menuList.push(
                    <Collapse accordion bordered={false} >
                    <Panel
                        header={<span>{props.t(`slider.${k}`)} <Icon type="setting" style={{marginLeft: '20px', fontSize: '18px'}}/></span>}
                        key="1" 
                        style={ panelStyle }>
                        <div key={val}>{props.t(`slider.${val}`)}</div>
                    </Panel>
                    </Collapse>
                )
            }
            
        }
    }
    return menuList;
}