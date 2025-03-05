import { Map } from "immutable";
import { coursesNormalizer } from "../schema/courses";
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from "../actions/courseActionTypes";


export const courseReducer = (state = Map([]), action) => {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = coursesNormalizer(action.data);
            const updatedCourses = Object.values(normalizedData.entities.courses).map(course => ({
                ...course,
                isSelected: false
            }));
            return state.merge({courses: updatedCourses});
        
        case SELECT_COURSE:
            return state.setIn(['courses', String(action.index), 'isSelected'], true);
        
        case UNSELECT_COURSE:
            return state.setIn(['courses', String(action.index), 'isSelected'], false);
        default:
            return state;
    }
}