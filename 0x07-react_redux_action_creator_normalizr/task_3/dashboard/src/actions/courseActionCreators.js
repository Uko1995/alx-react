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

console.log(select_course(1));
console.log(unselect_course(2));