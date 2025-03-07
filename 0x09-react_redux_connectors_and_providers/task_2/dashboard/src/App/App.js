import React from 'react';
import { connect } from 'react-redux';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import { Footer } from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';
import { defaultLogOut, defaultUser, AppContext } from './AppContext.js';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logout } from '../actions/uiActionCreators.js';

const styles = StyleSheet.create({
  bodyStyle: {
    fontFamily:  'Arial, Helvetica, sans-serif',
  }
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
      ]
    };
    this.handleKey = this.handleKey.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

  }

  markNotificationAsRead(id=Number) {
    this.setState({listNotifications: this .state.listNotifications.filter(notification => notification.id !== id)});
  }


  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
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
    const { user, listNotifications } = this.state;
    const { isLoggedIn, logIn, logOut, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;
    return (
        <>
          <Notifications 
            listNotifications={this.state.listNotifications} 
            displayDrawer={displayDrawer}
            handleDisplayDrawer={displayNotificationDrawer}
            handleHideDrawer={hideNotificationDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
          <Header />
          <div className={css(styles.bodyStyle)}>
            {isLoggedIn ?
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCourses}/>
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={logIn}/>
              </BodySectionWithMarginBottom>
            }
            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at tempora odio, necessitatibus repudiandae reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo ipsa
                iste vero dolor voluptates.
              </p>
            </BodySection>
            <Footer />
          </div>
        </>
    );  
  }
}

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  hideNotificationDrawer: (() => {}),
  displayNotificationDrawer: (() => {}),
  logIn: (() => {}),
  logOut: (() => {})
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  hideNotificationDrawer: PropTypes.func,
  displayNotificationDrawer: PropTypes.func,
  logIn: PropTypes.func,
  logOut: PropTypes.func
};

export const mapStateToProps = (state) => {
  return { 
    isLoggedIn: state.get('isUserLoggedin'),
    displayDrawer: state.get('isNotificationDrawerVisible')
  };
}

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  logIn: loginRequest,
  logOut: logout
};


export default connect(mapStateToProps, mapDispatchToProps)(App);