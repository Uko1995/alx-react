import{ render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('<Notifications />', () => {
    render(<Notifications />);
    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
});

test('<NotificationItem /> renders with value', () => {
    render(<NotificationItem />);

    const html = {__html: '<u>test</u>'};
    render(<NotificationItem html={html} />);
    const li2 = screen.getByText('test');
    expect(li2).toBeInTheDocument();
    expect(li2.closest('li')).toBeInTheDocument();
});