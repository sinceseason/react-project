import React from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { Collapse } from 'antd';
import { I18n } from 'react-i18next';
import { SliderMenu } from '../slider_all';
import '../slider_all.scss';

// const Panel = Collapse.Panel;

// const panelStyle = {
//     border: 0,
//     color: '#fff',
// };

@inject('menuStore')
@observer
export class SliderApprove extends React.Component {
    constructor(props) {
        super(props);
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
                            menu={toJS(this.props.menuStore.menuList)} />
                    {/* </Collapse> */}
                </div>
            </div>
            )}
            </I18n>
        )
    }
}