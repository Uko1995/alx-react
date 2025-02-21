import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

test('<Notifications />', () => {
    render(<Notifications displayDrawer={true} />);
    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
});

test('<NotificationItem /> renders with value', () => {

    const html = {__html: '<u>test</u>'};
    render(<NotificationItem html={html} />);
    const li2 = screen.getByText('test');
    expect(li2).toBeInTheDocument();
    expect(li2.closest('li')).toBeInTheDocument();
});

describe('Notifications Component', () => {
  it('renders the menu item when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  it('does not render div.Notifications when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    const notificationsDiv = screen.queryByText('Here is the list of notifications');
    expect(notificationsDiv).not.toBeInTheDocument();
  });

  it('renders the menu item when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Your notifications')).toBeInTheDocument();
  });

  it('renders div.Notifications when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} />);
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  });
});
