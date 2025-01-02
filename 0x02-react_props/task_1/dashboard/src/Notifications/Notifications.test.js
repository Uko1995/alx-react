import{ render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

test('<Notifications />', () => {
    render(<Notifications />);

    const li = screen.getAllByRole('listitem');
    expect(li).toHaveLength(3);

    const p = screen.getByText('Here is the list of notifications');
    expect(p).toBeInTheDocument();
});