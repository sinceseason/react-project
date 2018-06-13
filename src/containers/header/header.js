import React from 'react';
import { I18n } from 'react-i18next';
import './header.scss';

export class Header extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <I18n ns="translate">
                {(t) => (
                    <div className="header-container">
                        <div className="title">{t('title')}</div>
                    </div>
                )}
            </I18n>
            
        );
    }
}
