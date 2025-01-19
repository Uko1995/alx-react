import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '2px solid #e01d3f',
        width: '100%'
    },
    img: {
        height: '30vmin',
        pointerEvents: 'none'
    },
    h1: {
        fontSize: '5vmin',
        color: '#e01d3f',
        fontFamily: 'Georgia, Times New Roman, Times, serif'
    }
});

export default function Header() {
    return (
        <>
            <div className={css(styles.header)}>
                <img className={css(styles.img)} src={logo} alt='holberton-logo' />
                <h1 className={css(styles.h1)}>School dashboard</h1>
            </div>
        </>
    )
}