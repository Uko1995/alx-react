import React, { useContext } from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext.js';

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


export default function Footer() {
    
    return (
        <AppContext.Consumer>
            {({user}) => {
                return (
                <>
                    <div className={css(styles.footer)}>
                        <p className={css(styles.p)}>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
                        <br style={{ display: 'block'}} />
                        {user?.isLoggedIn && <p className={css(styles.p)}><a href='#' style={{ textDecoration: 'none'}}>Contact us</a></p>}        
                    </div>
                </>
                )}
            }
        </AppContext.Consumer>
    )
}