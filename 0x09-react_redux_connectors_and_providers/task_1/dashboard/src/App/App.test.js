import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App, { mapStateToProps } from './App.js';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList.js';
import store from '../index.js';
import { fromJS } from 'immutable';
import { configureStore } from '@reduxjs/toolkit';
import { uiReducer } from '../reducers/uiReducer.js';
import { Provider } from 'react-redux';
import { StyleSheetTestUtils } from 'aphrodite';
import { Map } from 'immutable';


beforeEach(() => {
    // Ensure a root element exists before rendering
    document.body.innerHTML = '<div id="root"></div>';
    console.log("Root element:", document.getElementById("root"));
  });

describe('mapStateToProps', () => {
    it('should return an object with', () => {
        const state = fromJS({
            isUserLoggedIn: true
        });
        const result = mapStateToProps(state);
        expect(result).toEqual({isLoggedIn: true})
    });
});