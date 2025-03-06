import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

test('renders Footer without crashing and renders the text "Copyright"', () => {
    render(<Footer />);

    const footer = screen.getByText(/Copyright/i);
    expect(footer).toBeInTheDocument();
});