import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseList from './CourseList.js';

describe('render CourseList', () => {
    test('renders CourseList without crashing', () => {
        render(<CourseList />)
        const table = screen.getByRole('table');
        expect(table).toBeInTheDocument();
    });

    test('render with 5 rows', () => {
        const courses = [
            {textFirstCell: 'ES6', textSecondCell: '50', isHeader: false},
            {textFirstCell: 'ES6', textSecondCell: '50', isHeader: false},
            {textFirstCell: 'ES6', textSecondCell: '50', isHeader: false},
            {textFirstCell: 'ES6', textSecondCell: '50', isHeader: false},
            {textFirstCell: 'ES6', textSecondCell: '50', isHeader: false}
        ]
        render(<CourseList courses={courses}/>)
        const row = screen.getAllByRole('row');
        expect(row.length).toBe(5);
    });
});