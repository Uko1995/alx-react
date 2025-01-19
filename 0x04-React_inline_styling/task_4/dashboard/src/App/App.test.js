import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

test('renders notifications component without crashing', () => {
    render(<Notifications />);
});

test('renders App without crashing and contain all child components', () => {
    render(<App />);

});

describe('renders App', () => {
    test('when isLoggedIn is true', () => {
        render(<App isLoggedIn={true}/>)
        const check = screen.queryByRole('group', {name: /Login/i});
        expect(check).not.toBeInTheDocument();
    })
})