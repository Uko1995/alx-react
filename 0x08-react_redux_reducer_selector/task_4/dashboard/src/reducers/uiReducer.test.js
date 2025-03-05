import { toJS } from 'immutable';
import uiReducer, { initialState } from './uiReducer.js';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes.js';

describe('uiReducer', () => {

    test('returns the initial state when no action is passed', () => {
        const state = uiReducer(undefined, {});
        expect(state.toJS()).toEqual(initialState);
    });

    test('returns the initial state when the action SELECT_COURSE is passed', () => {
        const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
        expect(state.toJS()).toEqual(initialState);
    });

    test('changes correctly the isNotificationDrawerVisible property when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
        expect(state.toJS()).toEqual({
            ...initialState,
            isNotificationDrawerVisible: true
        });
    });
});