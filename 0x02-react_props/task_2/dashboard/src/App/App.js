import './App.css';

import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';

function App() {
  return (
    <>
      <Notifications />
      <div className='App'>
        <Header />
        <Login />
        <Footer />
      </div>

    
    
    </>
  );
}

export default App;
