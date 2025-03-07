import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext.js';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    footer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderTop: '2px solid #e01d3f',
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        fontFamily: 'Georgia, Times New Roman, Times, serif',
    },
    p: {
        fontSize: '2.5em',
        fontStyle: 'italic',
        marginRight: '2em'
    }
});


export function Footer({user ={}}) {
    return (
        <>
            <div className={css(styles.footer)}>
                <p className={css(styles.p)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                    <br style={{ display: 'block'}} />
                    {user?.isLoggedIn && <p className={css(styles.p)}><a href='#' style={{ textDecoration: 'none'}}>Contact us</a></p>}        
            </div>
        </>
    )
};


Footer.propTypes = {
    user: PropTypes.object
};

export const mapStateToProps = (state) => {
    return {
        user: state.get('user')
    }
};

export default connect(mapStateToProps)(Footer);