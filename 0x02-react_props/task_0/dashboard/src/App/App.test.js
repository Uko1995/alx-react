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
});