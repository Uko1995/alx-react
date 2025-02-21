import{ render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem from './Notifications';

test('<NotificationItem /> renders with value', () => {
    
    render(<NotificationItem type='default' value='test' />);
    const li1 = screen.getAllByRole('listitem');
    expect(li1[0]).toBeInTheDocument();
    expect(li1[0]).toHaveTextContent('New course available');
    expect(li1[0]).toHaveAttribute('data-notification-type', 'default');
});

test('<NotificationItem /> renders with html', () => {
    const html = { __html: '<u>test</u>' };

    render(<NotificationItem html={html} />);
    const li2 = screen.getAllByRole('listitem');
    expect(li2[li2.length - 1]).toBeInTheDocument();
    expect(li2[li2.length - 1]).toContainHTML('<li data-notification-type="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>');
});