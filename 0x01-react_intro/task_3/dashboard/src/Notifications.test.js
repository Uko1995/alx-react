import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { describe, it } from 'node:test';

describe('Notifications renders without crashing', () => {
    it('renders Notifications component', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toBetruthy();
    });

    it('Notifications renders 3 list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('Notifications renders text: Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications p').text()).toEqual('Here is the list of notifications');
    });
});