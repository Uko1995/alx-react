import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('renders Header without crashing', () => {
    render(<Header />);
    
    const img = screen.getByRole('img', { name: /holberton-logo/i });
    const h1 = screen.getByRole('heading', { name: /School dashboard/i });

    expect(img).toBeInTheDocument();
    expect(h1).toBeInTheDocument();
});
