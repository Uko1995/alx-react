import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js';

export const select_course = (index) => {
    return {
        type: SELECT_COURSE,
        index: index
    }
};

export const unselect_course = (index) => {
    return {
        type: UNSELECT_COURSE,
        index
    }
};

export const boundSelectCourse = (index) => dispatch(select_course(index));
export const boundUnselectCourse = (index) => dispatch(unselect_course(index));