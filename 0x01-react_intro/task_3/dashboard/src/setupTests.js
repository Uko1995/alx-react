// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

enzyme.confugure({ adapter: new Adapter() });
