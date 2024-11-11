import { beforeEach, describe, it } from 'node:test';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('renders without crashing', () => {
        expect(wrapper).toBeTruthy();
    });

    it('renders a header', () => { 
        expect(wrapper.find('App-header')).toHaveLength(1);
    });

    it('renders a footer', () => {
        expect(wrapper.find('App-footer')).toHaveLength(1);
    });

    it('renders a body', () => {
        expect(wrapper.find('App-body')).toHaveLength(1);
    });
});