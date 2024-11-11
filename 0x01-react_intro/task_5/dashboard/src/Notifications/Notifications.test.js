import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { describe, it } from 'node:test';

describe('<Notifications />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Notifications />);
    });

    it('renders without crashing', () => {
        expect(wrapper.exists()).toBeTruthy();
    });

    it('renders three list items', () => {
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('renders the text "Here is the list of notifications"', () => {
        expect(wrapper.find('.Notifications p').text()).toBe('Here is the list of notifications');
    });
});