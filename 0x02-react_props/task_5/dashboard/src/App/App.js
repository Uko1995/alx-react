import './App.css';

import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
];

function App({isLoggedIn=true}) {
  return (
    <>
      <Notifications listNotifications={listNotifications} displayDrawer={true}/>
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses}/> : <Login/>}
        <Footer />
      </div>
    </>
  );
}

export default App;
