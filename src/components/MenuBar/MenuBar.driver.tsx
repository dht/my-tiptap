import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuBar, MenuBarProps } from './MenuBar';
import { BaseComponentDriver } from 'testing-base';

export class MenuBarDriver extends BaseComponentDriver {
    private props: Partial<MenuBarProps> = {};

    constructor() {
        super('MenuBar');
    }

    when: any = {
        rendered: () => {
            render(<MenuBar {...(this.props as MenuBarProps)} />);
            return this;
        },
        clicked: () => {
            fireEvent.click(this.wrapper);
            return this;
        },
        snapshot: () => {
            return this.snapshot(<MenuBar {...(this.props as MenuBarProps)} />);
        },
    };

    given: any = {
        props: (props: Partial<MenuBarProps>) => {
            this.props = props;
            return this;
        },
    };

    get = {
        WrapperClassName: () => {
            return this.wrapper.className;
        },
        label: () => {
            return this.wrapper.innerHTML;
        },
    };
}
