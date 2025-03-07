import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext.js';
import { logout } from '../actions/uiActionCreators.js';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid #e01d3f',
        width: '100%',
        fontFamily: 'Georgia, Times New Roman, Times, serif'
    },
    img: {
        height: '30vmin',
        pointerEvents: 'none'
    },
    h1: {
        fontSize: '5vmin',
        color: '#e01d3f',
        
    },
    logoutSection: {
        marginLeft: '2.5vmin',
        fontSize: '2vmin',
    }
});

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { user={}, logOut=(() => {}) } = this.props;
        return (
            <>
                <div className={css(styles.header)}>
                    <img className={css(styles.img)} src={logo} alt='holberton-logo' />
                    <h1 className={css(styles.h1)}>School dashboard</h1>
                    {user?.isLoggedIn && (
                        <section id='logoutSection'>
                            <p className={css(styles.logoutSection)}>Welcome <strong> {user.email} </strong> <a href='#' onClick={logOut}> (logOut) </a></p>
                        </section>
                    )}
                </div>
            </>
        )
    }
}

Header.propTypes = {
    user: PropTypes.object,
    logOut: PropTypes.func
};

export const mapStateToProps = (state) => {
    return {
        user: state.get('user')
    }
};

export const mapDispatchToProps = {
    logOut: logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);