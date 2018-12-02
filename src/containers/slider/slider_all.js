import React from 'react';
import { Collapse, Icon, Menu } from 'antd';

const SubMenu = Menu.SubMenu;

function setChild(parentMenu, menuList, props) {
    let child = parentMenu.subMenu;
    let childList = [];
    child.map(val => {
        childList.push(<Menu.Item 
            onClick={() => props.changeRouter(val.router)} 
            key={val.menuId} >
                <Icon type={val.icon}/>
                {props.t(`slider.${val.main}`)}
            </Menu.Item>);
    })
    menuList.push(
        <SubMenu
            key={parentMenu.main}
            title={<span><Icon type={parentMenu.icon} /><span>{props.t(`slider.${parentMenu.main}`)}</span></span>}>
            {childList}
        </SubMenu>
    )
}

export function SliderMenu(props) {
    let menu = props.menu;
    let menuList = [];
    menu.map(v => {
        if (!v.subMenu.length)
            menuList.push(<Menu.Item 
                onClick={() => props.changeRouter(v.router)} 
                key={v.menuId}>
                    <Icon type={v.icon} />
                    {props.t(`slider.${v.main}`)}
                </Menu.Item>)
        else {
            let child = v.subMenu;
            let childList = [];
            setChild(v, menuList, props);
            // child.map(val => {
            //     childList.push(<Menu.Item key={val.id}>{props.t(`slider.${val.main}`)}</Menu.Item>);
                
            // })
            // menuList.push(
            //     <SubMenu
            //         key={v.main}
            //         title={<span><Icon type="mail" /><span>{props.t(`slider.${v.main}`)}</span></span>}>
            //         {childList}
            //     </SubMenu>
             
            // )
            
        }
    })
    menuList = (<Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['1']}>{menuList}</Menu>);
    return menuList;
}
