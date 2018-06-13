import React from 'react';
import { Collapse } from 'antd';
import './slider.scss';

const Panel = Collapse.Panel;
const text = 'dog';

export class SliderSa extends React.Component {
    render() {
        return (
            <div className="slider-container">
                <div className="inner-slider">
                    this is SliderSa
                </div>
            </div>
        )
    }
}