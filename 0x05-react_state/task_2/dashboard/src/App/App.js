import React from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { defaultLogOut, defaultUser, AppContext } from './AppContext';

const styles = StyleSheet.create({
  bodyStyle: {
    fontFamily:  'Arial, Helvetica, sans-serif',
  }
});


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      displayDrawer: false,
      user: defaultUser,
      logOut: this.logOut
    };
    this.handleKey = this.handleKey.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);

  }

  handleDisplayDrawer() {
    this.setState({displayDrawer: true});
  }

  handleHideDrawer() {
    this.setState({displayDrawer: false});
  }

  logIn(email='', password='') {
    this.setState({user: {email, password, isLoggedIn: true}});
  }

  logOut() {
    this.setState({user: defaultUser});
  }

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
    const { user, logOut } = this.props;
    return (
      <AppContext.Provider value={{user: this.state.user, logOut: this.logOut}}>
        <>
          <Notifications 
            listNotifications={this.listNotifications} 
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
          />
          <Header />
          <div className={css(styles.bodyStyle)}>
            {this.state.user.isLoggedIn ?
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={this.listCourses}/>
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn}/>
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
      </AppContext.Provider>
    );  
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
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
