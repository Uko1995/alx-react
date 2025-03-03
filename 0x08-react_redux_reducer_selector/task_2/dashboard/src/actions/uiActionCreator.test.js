import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest
} from './uiActionCreators';

import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTITFICATION_DRAWER,
    HIDE_NOTITFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
afterEach(() => {
    fetchMock.restore();
});

it('creates LOGIN_SUCCESS when loginRequest has been done', () => {
    const email = 'test@test.com';
    const password = 'password';
    fetchMock.getOnce('http://localhost:3000/login-success.json', {
        body: { data: 'some data' },
        headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
        { type: LOGIN, user: { email, password } },
        { type: LOGIN_SUCCESS, data: 'some data' }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});

it('creates LOGIN_FAILURE when loginRequest fails', () => {
    const email = 'test@test.com';
    const password = 'password';
    fetchMock.getOnce('http://localhost:3000/login-success.json', {
        throws: new Error('Failed to fetch')
    });

    const expectedActions = [
        { type: LOGIN, user: { email, password } },
        { type: LOGIN_FAILURE }
    ];
    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});
});