import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import { describe, it } from 'node:test';

describe('App renders without crashing', () => {
    it('renders App component', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toBeTruthy();
    });

    it('App renders App-header', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-header').length).toBe(1);
    });

    it('App renders App-body', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-body').length).toBe(1);
    });

    it('App renders App-footer', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('.App-footer').length).toBe(1);
    });
});