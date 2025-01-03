import './App.css';
import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKey = this.handleKey.bind(this);
  };

  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];
  
  listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
  ];

  componentDidMount() {
    window.addEventListener('keydown', this.handleKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKey);
  }

  handleKey(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn } = this.props;
    return (
      <>
        <Notifications listNotifications={this.listNotifications} displayDrawer={true}/>
        <div className='App'>
          <Header />
          {isLoggedIn ? <CourseList listCourses={this.listCourses}/> : <Login/>}
          <Footer />
        </div>
      </>
    );  
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
};

/*function App({isLoggedIn=true}) {
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
}*/

export default App;
