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
    'wharf', 
    'internal',
    'external'
];

function SliderContentDom(props) {
    /* TODO: 使用如下的 map 格式遍历
        const sliderContentMap = new Map([
            [1, 'slider.wharf_manage'],
            [2, 'slider.internal_account_manage'],
            [3, 'slider.external_account_manage'],
        ]);
        const sliderMap = props.sliderMap;
        const listItems = sliderMap.forEach((v, k) =>
            <div className={props.activeSlider} key={k}>
                <div className="slider-content" onClick={(k) => {this.props.changeRouter(k)}}>{props.t(v)}</div>
            </div>
        );
    */
    const sliderList = props.sliderList;
    // NOTE: arrow function 的返回值不能加 { } 否则渲染不出来
    const listItems = sliderList.map(item =>
        <div className={classNames("slider-content-container")} key={item}>
            {/* TODO: 组件动态加载事件参数 item, 并使用组件式引用
            PROBLEM: 目前此方法在点击时 item 参数的值无法传入, 待改善 
            <div className="slider-content" onClick={(item) => props.changeRouter(item)}>{props.t(`slider.${item}`)}</div> */}
            {/* SOLVE: 未给 onClick 事件的() 传参，导致 item 是 null */}
            <div className={classNames("slider-content")} 
                onClick={() => props.changeRouter(item)}>
                {props.t(`slider.${item}_manage`)}
            </div>
            {/* PROBLEM: NavLink 适用性较差 */}
            {/*<NavLink to={`/nav/sliderSa/${item}`} className="slider-content" activeClassName="active">{props.t(`slider.${item}manage`)}</NavLink> */}
        </div>
    )
    
    return (
        <div>
           {listItems}
        </div>
    );
};

export class SliderSa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            // active2: false,
            // active3: false,
        }
    }

    changeRouter = (val) => {
        this.props.history.push(`/nav/sliderSa/${val}`);
        // switch (val) {
        //     case sliderContentList[0]:
        //         this.props.history.push('/nav/sliderSa/wharf');
        //         this.setState({
        //             active: true,
        //             // active2: false,
        //             // active3: false,
        //         })
        //         break;
        //     case sliderContentList[1]:
        //         this.props.history.push('/nav/sliderSa/internal');
        //         // this.setState({
        //         //     active1: false,
        //         //     active2: true,
        //         //     active3: false,
        //         // })
        //         break;
        //     case sliderContentList[2]:
        //         this.props.history.push('/nav/sliderSa/external');
        //         // this.setState({
        //         //     active1: false,
        //         //     active2: false,
        //         //     active3: true,
        //         // })
        //         break;
        // }
    }

    render() {
        // let activeSlider = classNames('slider-content-container', {
        //     'active': this.state.active,
        // });
        // let activeSlider2 = classNames('slider-content-container', {
        //     'active': this.state.active2,
        // });
        // let activeSlider3 = classNames('slider-content-container', {
        //     'active': this.state.active3,
        // });

        return (
            <I18n ns="translate">
            {(t) => (
            <div className="slider-container">
                <div className="inner-slider">
                    <Collapse  className="slider-sa" accordion bordered={false} defaultActiveKey={['1']}>
                        <Panel
                            header={<span>{t('slider.system_manage')} <Icon type="setting" style={{marginLeft: '20px', fontSize: '18px'}}/></span>}
                            key="1" 
                            style={ panelStyle }>
                            {/* <div className={ activeSlider1 }>
                                <div className="slider-content"
                                    onClick={() => this.changeRouter(1)} >{t('slider.wharf_manage')}</div>
                            </div>
                            <div className={ activeSlider2 }>
                                <div className="slider-content"
                                    onClick={() => this.changeRouter(2)} >{t('slider.internal_account_manage')}</div>
                            </div>
                            <div className={ activeSlider3 }>
                                <div className="slider-content"
                                    onClick={() => this.changeRouter(3)} >{t('slider.external_account_manage')}</div>
                            </div> */}
                            <SliderContentDom 
                                sliderList={sliderContentList} 
                                // activeSlider={activeSlider} 
                                t={t} 
                                changeRouter={this.changeRouter} />
                        </Panel>
                    </Collapse>
                </div>
            </div>
            )}
            
            </I18n>
        )
    }
}