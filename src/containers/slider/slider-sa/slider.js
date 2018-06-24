import React from 'react';
import { I18n } from 'react-i18next';
import classNames from 'classnames';
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
    const sliderList = props.sliderList;
    const listItems = sliderList.map((item, id) =>
        <div key={item} 
            className={classNames("slider-content", {'active': id === props.index})} 
            onClick={() => props.changeRouter(item, id)}>
            {props.t(`slider.${item}_manage`)}
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
            index: 0,
        }
    }

    componentWillMount() {
        this.props.history.push(`/nav/sliderSa/wharf`);
    }

    changeRouter = (val, id) => {
        this.props.history.push(`/nav/sliderSa/${val}`);
        this.setState({
            index: id
        })
    }

    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="slider-container">
                <div className="inner-slider">
                    <Collapse className="slider-sa" accordion bordered={false} defaultActiveKey={['1']}>
                        <Panel
                            header={<span>{t('slider.system_manage')} <Icon type="setting" style={{marginLeft: '20px', fontSize: '18px'}}/></span>}
                            key="1" 
                            style={ panelStyle }>
                            <SliderContentDom 
                                sliderList={sliderContentList} 
                                t={t} 
                                index={this.state.index}
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