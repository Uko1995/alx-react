import { courseReducer } from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

// filepath: /home/uko/alx-react/0x08-react_redux_reducer_selector/task_2/dashboard/src/reducers/courseReducer.test.js

describe('courseReducer', () => {
    it('should return the default state', () => {
        const newState = courseReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should handle FETCH_COURSE_SUCCESS', () => {
        const action = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                { id: 1, name: "ES6", credit: 60 },
                { id: 2, name: "Webpack", credit: 20 },
                { id: 3, name: "React", credit: 40 }
            ]
        };
        const expectedState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const newState = courseReducer(undefined, action);
        expect(newState).toEqual(expectedState);
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const action = { type: SELECT_COURSE, index: 2 };
        const expectedState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: true },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const newState = courseReducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: true },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const action = { type: UNSELECT_COURSE, index: 2 };
        const expectedState = [
            { id: 1, name: "ES6", credit: 60, isSelected: false },
            { id: 2, name: "Webpack", credit: 20, isSelected: false },
            { id: 3, name: "React", credit: 40, isSelected: false }
        ];
        const newState = courseReducer(initialState, action);
        expect(newState).toEqual(expectedState);
    });
});