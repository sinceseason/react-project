import React from 'react';
import { observer, inject } from 'mobx-react';
import { toJS } from 'mobx';
import { I18n } from 'react-i18next';
import { SliderMenu } from '../slider_all';
import history from '../../../router/history';
import '../slider_all.scss';

@inject('menuStore')
@observer
export class SliderApprove extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        history.push(`/nav/sliderApprove/approveApply`);
    }

    changeRouter(val) {
        history.push(`/nav/sliderApprove/${val}`);
        // this.props.history.push(`/nav/sliderApprove/${val}`);
    }

    render() {
        return (
            <I18n ns="translate">
            {(t) => (
            <div className="slider-container">
                <div className="inner-slider">
                    <SliderMenu 
                        t={t}
                        menu={toJS(this.props.menuStore.menuList)}
                        changeRouter={this.changeRouter} />
                </div>
            </div>
            )}
            </I18n>
        )
    }
}
