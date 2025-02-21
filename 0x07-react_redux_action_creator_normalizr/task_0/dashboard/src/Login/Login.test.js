import { render, screen } from '@testing-library/react';
import Login from './Login';
import '@testing-library/jest-dom';

test('renders login page and render 2 input and 2 labels', () => {
    render(<Login />);
    const inputElement = screen.getAllByRole('textbox');
    expect(inputElement).toHaveLength(1);

    const labelElement = screen.getAllByLabelText(/Email|Password/i);
    expect(labelElement).toHaveLength(2);
});