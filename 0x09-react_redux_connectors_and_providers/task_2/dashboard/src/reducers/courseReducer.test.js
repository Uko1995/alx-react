import { courseReducer } from './courseReducer';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { Map } from 'immutable';

// filepath: /home/uko/alx-react/0x08-react_redux_reducer_selector/task_2/dashboard/src/reducers/courseReducer.test.js

describe('courseReducer with Immutable.js', () => {
    it('should return the default state', () => {
        const newState = courseReducer(undefined, {});
        expect(newState).toEqual(Map([]));
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
        const expectedState = Map({
            courses: [
                { id: 1, name: "ES6", credit: 60, isSelected: false },
                { id: 2, name: "Webpack", credit: 20, isSelected: false },
                { id: 3, name: "React", credit: 40, isSelected: false }
            ]
        });
        const newState = courseReducer(undefined, action);
        expect(newState.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle SELECT_COURSE', () => {
        const initialState = Map({
            courses: [
                { id: 1, name: "ES6", credit: 60, isSelected: false },
                { id: 2, name: "Webpack", credit: 20, isSelected: false },
                { id: 3, name: "React", credit: 40, isSelected: false }
            ]
        });
        const action = { type: SELECT_COURSE, index: 1 };
        const expectedState = Map({
            courses: [
                { id: 1, name: "ES6", credit: 60, isSelected: false },
                { id: 2, name: "Webpack", credit: 20, isSelected: true },
                { id: 3, name: "React", credit: 40, isSelected: false }
            ]
        });
        const newState = courseReducer(initialState, action);
        expect(newState.toJS()).toEqual(expectedState.toJS());
    });

    it('should handle UNSELECT_COURSE', () => {
        const initialState = Map({
            courses: [
                { id: 1, name: "ES6", credit: 60, isSelected: false },
                { id: 2, name: "Webpack", credit: 20, isSelected: true },
                { id: 3, name: "React", credit: 40, isSelected: false }
            ]
        });
        const action = { type: UNSELECT_COURSE, index: 1 };
        const expectedState = Map({
            courses: [
                { id: 1, name: "ES6", credit: 60, isSelected: false },
                { id: 2, name: "Webpack", credit: 20, isSelected: false },
                { id: 3, name: "React", credit: 40, isSelected: false }
            ]
        });
        const newState = courseReducer(initialState, action);
        expect(newState.toJS()).toEqual(expectedState.toJS());
    });
});