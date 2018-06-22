import React from 'react';
import { Collapse, Icon } from 'antd';

const Panel = Collapse.Panel;

const panelStyle = {
    border: 0,
    color: '#fff',
};

export function SliderMenu(props) {
    let menu = props.menu;
    let menuList = [];
    menu.map(v => {
        if (!v.subMenu.length)
            menuList.push(<div key={v.id}>{props.t(`slider.${v.main}`)}</div>)
            // return <div key={v.id}>{props.t(`slider.${v.main}`)}</div>
        else {
            let child = v.subMenu;
            child.map(val => {
                menuList.push(
                    // <Collapse accordion bordered={false} >
                    <Panel
                        header={<span>{props.t(`slider.${v.main}`)} <Icon type="setting" style={{marginLeft: '20px', fontSize: '18px'}}/></span>}
                        key="1"
                        style={ panelStyle }>
                        <div>{props.t(`slider.${val.main}`)}</div>
                    </Panel>
                    // </Collapse>
                )
            })
        }
    })
    // for (let [k, v] of Object.entries(menu)) {
    //     if (!v.child) {
    //         menuList.push(<div key={k}>{props.t(`slider.${k}`)}</div>)
    //     } else {
    //         let child = v.child;
    //         for (let val of child.values()) {
    //             menuList.push(
    //                 <Collapse accordion bordered={false} >
    //                 <Panel
    //                     header={<span>{props.t(`slider.${k}`)} <Icon type="setting" style={{marginLeft: '20px', fontSize: '18px'}}/></span>}
    //                     key="1"
    //                     style={ panelStyle }>
    //                     <div key={val}>{props.t(`slider.${val}`)}</div>
    //                 </Panel>
    //                 </Collapse>
    //             )
    //         }
            
    //     }
    // }
    menuList = (<Collapse accordion bordered={false} >{menuList}</Collapse>);
    return menuList;
}
