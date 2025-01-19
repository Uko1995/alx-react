import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    login: {
        margin: '2.5em', 
        fontSize: '2.5vmin',
        height: '100vh',
        color: 'black'
    },
    input: {
        fontSize: '2.5vmin',
        margin: '0.7em'
    }
});

export default function Login() {
    return (
        <>
            <div className={css(styles.login)}>
                <p>Login to access the full dashboard</p>
                <label htmlFor='email'>Email</label>
                <input className={css(styles.input)} type='email' name='email' id='email' />
                <label htmlFor='password'>Password</label>
                <input className={css(styles.input)} type='password' name='password' id='password' />
                <button className={css(styles.input)}>OK</button>
            </div>
        </>
    )
}