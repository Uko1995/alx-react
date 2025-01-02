import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import Notifications from '../Notifications/Notifications';

test('renders notifications component without crashing', () => {
    render(<Notifications />);
});

test('renders App without crashing and contain all child components', () => {
    render(<App />);

});