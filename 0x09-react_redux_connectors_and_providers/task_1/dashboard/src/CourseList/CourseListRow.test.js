import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow.js';

describe('CourseListRow', () => {
    describe('when isHeader is true', () => {
        test('renders one cell with col-span of 2', () => {
            render(<CourseListRow isHeader={true} textFirstCell="cell 1" />)
            const cell = screen.getByRole('row');
            expect(cell.colSpan).toBe(2);
            expect(cell).toBeInTheDocument();
        });

        test('renders two cells', () => {
            render(<CourseListRow isHeader={true} textFirstCell='cell 1' textSecondCell='cell 2'/>);
            const cell = screen.getAllByRole('cell');
            expect(cell).toHaveLength(2);
            expect(cell[0]).toBeInTheDocument();
            expect(cell[1]).toBeInTheDocument();
        });
    });

    describe('when isHeader is false', () => {
        test('renders two cells', () => {
            render(<CourseListRow isHeader={false} textFirstCell='cell 1' textSecondCell='cell 2'/>);
            const row = screen.getByRole('row');
            const cell = screen.getAllByRole('columnheader');
            expect(row).toBeInTheDocument();
            expect(cell[0]).toBeInTheDocument();
            expect(cell[1]).toBeInTheDocument();
        });
    });
});

