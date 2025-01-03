import './App.css';

import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';

function App({isLoggedIn=true}) {
  return (
    <>
      <Notifications displayDrawer={true}/>
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList/> : <Login/>}
        <Footer />
      </div>
    </>
  );
}

export default App;
